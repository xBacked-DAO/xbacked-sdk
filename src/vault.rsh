'reach 0.1';
'use strict';

import {
  calcCollateralRatio,
  healthFactor,
  maximumMint,
  tokenDollarValue,
  COLLATERAL_LIMIT,
  MINIMUM_COLLATERAL_RATIO,
  MINIMUM_HEALTH_FACTOR,
  calculateMintingFee,
  calculateLiquidationFee,
  MICRO_UNITS,
  calculateRedemptionFee
} from './utils.rsh';

// Collateral is the amount of coins deposited by the Minter exchangeRate is
// the rate of stable asset to collateral loanValue, the number of stablecoin
// to send to the the minter.
// mintToken is the asset id for stablecoin.
// cRatio = collateralValueInUsd/VaultDebtInUsd(loanValue)

const ReserveInteract = {
  ...hasConsoleLogger,
  // Presently, the only collateral we are using is ALGO so this returns the
  // current value of algo in usd which is equivalent to stablecoin.
  getCollateralPrice: Fun([], UInt),
  // Reach can't get the coin from within the contract so we need to send the
  // token information in from the frontend.
  getToken: Fun([], Token)
};

const MinterInteract = {
  ...hasConsoleLogger,
  createVault: Fun([UInt], Tuple(UInt, UInt))
};

// This is not actually stored; it acts as a template for an object that describes
// vault state. It is returned to frontends when they request the state of a vault.
const VaultState = {
  collateralRatio: UInt,
  collateral: UInt,
  vaultDebt: UInt,
  hf: UInt,
  collateralValue: UInt
};

export const main = Reach.App(() => {
  // TODO: before go live, verify this
  // setOptions({ verifyArithmetic: true });
  const Minter = Participant('Minter', {
    ...MinterInteract
  });

  const VaultOwner = API('VaultOwner', {
    depositCollateral: Fun([UInt], Bool),
    mintToken: Fun([UInt], Bool),
    returnVaultDebt: Fun([UInt], Bool),
    withdrawCollateral: Fun([UInt], Bool)
  });

  const Reserve = Participant('Reserve', {
    ...ReserveInteract
  });

  const Liquidator = API('Liquidator', {
    liquidateVault: Fun([UInt], Bool)
  });

  const State = View('State', {
    read: Object(VaultState)
  });

  const Oracle = API('Oracle', {
    updatePrice: Fun([UInt], Object(VaultState))
  });

  const VaultRedeemer = API('VaultRedeemer', {
    redeemVault: Fun([UInt], Bool)
  });

  const RecoveryToggler = API('RecoveryToggler', {
    toggleRecoveryMode: Fun([Bool], Bool)
  });

  // Could the fee collector be an API?
  // Anyone can call the func, get a small payment while protocol collects the rest.
  const FeeCollector = Participant('FeeCollector', { ...hasConsoleLogger });

  deploy();
  // Minter Contract
  Minter.publish();
  commit();

  // In reality, the Reserve will end up not existing
  // Oracle data will be pulled out of the blockchain using application calls
  // xUSD will be minted using a similar method
  Reserve.only(() => {
    const initialCollateralPrice = declassify(interact.getCollateralPrice());
    const stablecoin = declassify(interact.getToken());
    assume(initialCollateralPrice > 0);
  });

  Reserve.publish(initialCollateralPrice, stablecoin);
  require(initialCollateralPrice > 0);

  commit();
  Minter.only(() => {
    const [initialCollateral, initialVaultDebt] = declassify(
      interact.createVault(initialCollateralPrice)
    );
    const initialCollateralValue = tokenDollarValue(
      initialCollateral,
      initialCollateralPrice
    );
    const initialMaximumMint = maximumMint(initialCollateralValue, 0);

    const initialMintFee = calculateMintingFee(initialVaultDebt);
    const vaultOwner = this;

    assume(initialVaultDebt > 0);
    assume(initialVaultDebt <= initialMaximumMint);
    assume(initialCollateral > 0);
    assume(initialMintFee > 0);
  });

  Minter.publish(
    initialCollateral,
    initialVaultDebt,
    initialCollateralValue,
    initialMaximumMint,
    initialMintFee,
    vaultOwner
  );
  require(initialVaultDebt <=
    initialMaximumMint, 'initial debt <= initialMaximumMint');
  require(initialCollateral > 0);
  require(initialVaultDebt > 0);
  require(initialCollateralValue ==
    tokenDollarValue(initialCollateral, initialCollateralPrice));
  require(initialMaximumMint == maximumMint(initialCollateralValue, 0));
  require(initialMintFee == calculateMintingFee(initialVaultDebt));
  require(initialMintFee > 0);
  commit();

  FeeCollector.publish();
  commit();

  assert(balance() == 0);
  assert(balance(stablecoin) == 0);

  Minter.pay(initialCollateral);

  commit();

  Reserve.pay([[initialVaultDebt, stablecoin]]);

  const initialMinterVaultDebt = initialVaultDebt - initialMintFee;

  transfer(initialMinterVaultDebt, stablecoin).to(Minter);
  transfer(initialMintFee, stablecoin).to(FeeCollector);

  State.read.set({
    collateralRatio: calcCollateralRatio(
      initialCollateralValue,
      initialMinterVaultDebt
    ),
    collateral: balance(),
    vaultDebt: initialMinterVaultDebt,
    hf: healthFactor(initialCollateralValue, initialMinterVaultDebt),
    collateralValue: initialCollateralValue
  });

  commit();
  Reserve.publish();

  assert(initialCollateral > 0 && initialMinterVaultDebt > 0);
  assert(balance() == initialCollateral && balance(stablecoin) == 0);

  const [vaultDebt, collateralPrice, recoveryMode] = parallelReduce([
    initialMinterVaultDebt,
    initialCollateralPrice,
    false
  ])
    .define(() => {
      // update c-ratio etc
      const currentCollateralValue = tokenDollarValue(
        balance(),
        collateralPrice
      );
      const currentCollateralRatio = calcCollateralRatio(
        currentCollateralValue,
        vaultDebt
      );
      const hf = healthFactor(currentCollateralValue, vaultDebt);
      State.read.set({
        collateralRatio: currentCollateralRatio,
        collateral: balance(),
        vaultDebt,
        hf,
        collateralValue: currentCollateralValue
      });
    })
    .paySpec([stablecoin])
    .invariant(balance() >= 0 && balance(stablecoin) == 0)
    .while(vaultDebt > 0 || balance() > 0)
    .api(
      VaultOwner.mintToken,
      (newVaultDebt) => {
        assume(this == vaultOwner, 'You are not the owner of this vault');
        assume(newVaultDebt > 0, 'You cannot mint 0 tokens');
      },
      // Pay expr is required when using the assume expr above
      (_) => {
        // cannot use shorthand implicit return syntax here because of prettier
        return [0, [0, stablecoin]];
      },
      (newVaultDebt, apiReturn) => {
        // this will error if the caller is not the owner
        require(this == vaultOwner, 'You are not the owner of this vault');
        require(newVaultDebt > 0, 'You must mint at least 1 token');

        const currentMaximumMint = maximumMint(
          currentCollateralValue,
          vaultDebt
        );

        const newMintFee = calculateMintingFee(newVaultDebt);
        const minterVaultDebt = newVaultDebt - newMintFee;
        const totalVaultDebt = vaultDebt + minterVaultDebt;

        const cRatioAfterMint = calcCollateralRatio(
          currentCollateralValue,
          totalVaultDebt
        );
        const canMint =
          cRatioAfterMint >= COLLATERAL_LIMIT &&
          currentMaximumMint > 0 &&
          newVaultDebt > 0 &&
          newVaultDebt <= currentMaximumMint;
        apiReturn(canMint);

        if (canMint) {
          require(newVaultDebt <=
            currentMaximumMint, 'The request mint amount is more than the maximum allowed');
          require(newMintFee == calculateMintingFee(newVaultDebt));
          require(minterVaultDebt == newVaultDebt - newMintFee);
          commit();
          Reserve.pay([[newVaultDebt, stablecoin]]);
          transfer(minterVaultDebt, stablecoin).to(vaultOwner);
          transfer(newMintFee, stablecoin).to(FeeCollector);

          return [vaultDebt + minterVaultDebt, collateralPrice, recoveryMode];
        } else {
          return [vaultDebt, collateralPrice, recoveryMode];
        }
      }
    )
    .api(
      VaultOwner.returnVaultDebt,
      (amountToReturn) => {
        assume(
          amountToReturn <= vaultDebt,
          'You canot return more tokens than the vault debt'
        );
        assume(amountToReturn > 0, 'Cannot return 0 tokens');
        assume(this == vaultOwner, 'You are not the owner of this vault');
      },
      // TODO: when does this payment take place? If we error in the next step
      // will funds be lost?
      (amountToReturn) => {
        return [0, [amountToReturn, stablecoin]];
      },
      (amountToReturn, apiReturn) => {
        // this will error if the caller is not the owner
        require(this == vaultOwner, 'You are not the owner of this vault');
        require(amountToReturn <= vaultDebt &&
          amountToReturn > 0 &&
          vaultDebt > 0);
        transfer(amountToReturn, stablecoin).to(Reserve);

        const vaultDebtRepayed = polyEq(vaultDebt - amountToReturn, 0);
        apiReturn(true);
        if (vaultDebtRepayed) {
          require(polyEq(vaultDebt - amountToReturn, 0));
          transfer(balance()).to(vaultOwner);
          return [0, collateralPrice, recoveryMode];
        } else {
          return [vaultDebt - amountToReturn, collateralPrice, recoveryMode];
        }
      }
    )
    .api(
      VaultOwner.withdrawCollateral,
      (collateralToWithdraw) => {
        const collateralValueAfterWithdrawal =
          (balance() - collateralToWithdraw) * collateralPrice;
        assume(this == vaultOwner, 'You are not the owner of this vault');
        assume(balance() > 0);
        assume(collateralToWithdraw > 0, 'Cannot withdraw 0 tokens');
        assume(collateralToWithdraw < balance());
        assume(
          currentCollateralRatio > COLLATERAL_LIMIT,
          'Vault collateral ratio is not healthy'
        );
        assume(
          collateralValueAfterWithdrawal > 0,
          'Collateral value after withdrawal must not be 0'
        );
      },
      (_) => {
        return [0, [0, stablecoin]];
      },
      (collateralToWithdraw, apiReturn) => {
        // will error if the caller is not the vault owner
        require(this == vaultOwner, 'You are not the owner of this vault');
        require(collateralToWithdraw > 0);
        require(collateralToWithdraw <
          balance(), 'Cannot withdraw more than the balance of this contract');
        require(currentCollateralRatio >
          COLLATERAL_LIMIT, 'Vault collateral ratio is not healthy');
        const collateralValueAfterWithdrawal =
          (balance() - collateralToWithdraw) * collateralPrice;
        require(collateralValueAfterWithdrawal >
          0, 'Collateral value after withdrawal must not be 0');
        const collateralRatioAfterWithdrawal = calcCollateralRatio(
          collateralValueAfterWithdrawal,
          vaultDebt
        );
        // will error if false
        const canWithdraw =
          collateralToWithdraw > 0 &&
          currentCollateralRatio > COLLATERAL_LIMIT &&
          collateralRatioAfterWithdrawal > COLLATERAL_LIMIT &&
          collateralToWithdraw < balance();
        apiReturn(canWithdraw);
        if (canWithdraw) {
          transfer(collateralToWithdraw).to(vaultOwner);
          return [vaultDebt, collateralPrice, recoveryMode];
        } else {
          return [vaultDebt, collateralPrice, recoveryMode];
        }
      }
    )
    .api(
      VaultOwner.depositCollateral,
      (collateralDeposit) => {
        assume(collateralDeposit > 0, 'Cannot deposit 0 collateral tokens');
        assume(this == vaultOwner, 'You are not the owner of this vault');
      },
      (collateralDeposit) => {
        return [collateralDeposit, [0, stablecoin]];
      },
      (collateralDeposit, apiReturn) => {
        // this will error if the caller is not the owner
        require(collateralDeposit > 0, 'Cannot deposit 0 collateral tokens');
        require(this == vaultOwner, 'You are not the owner of this vault');
        apiReturn(true);
        return [vaultDebt, collateralPrice, recoveryMode];
      }
    )
    //Liquidate Vault
    .api(
      Liquidator.liquidateVault,
      (bal) => {
        assume(bal >= vaultDebt);
      },
      (bal) => {
        const liquidationFee = calculateLiquidationFee(vaultDebt);
        const canLiquidate =
          vaultDebt > 0 &&
          hf < MINIMUM_HEALTH_FACTOR &&
          currentCollateralRatio < MINIMUM_COLLATERAL_RATIO &&
          bal >= vaultDebt;
        if (canLiquidate) {
          // [amt of network tokens, [amt, vaultDebt]]
          return [0, [vaultDebt + liquidationFee, stablecoin]];
        } else {
          return [0, [0, stablecoin]];
        }
      },
      (bal, apiReturn) => {
        require(bal >= vaultDebt);
        const liquidatorAddr = this;
        const canLiquidate =
          vaultDebt > 0 &&
          hf < MINIMUM_HEALTH_FACTOR &&
          currentCollateralRatio < MINIMUM_COLLATERAL_RATIO &&
          bal >= vaultDebt;
        apiReturn(canLiquidate);
        if (canLiquidate) {
          transfer(balance()).to(liquidatorAddr);
          transfer(vaultDebt, stablecoin).to(Reserve);
          const liquidationFee = calculateLiquidationFee(vaultDebt);
          transfer(liquidationFee, stablecoin).to(FeeCollector);
          return [0, collateralPrice, recoveryMode];
        } else {
          return [vaultDebt, collateralPrice, recoveryMode];
        }
      }
    )
    // Oracle Update Price
    .api(Oracle.updatePrice, (price, apiReturn) => {
      const newCollateralValue = balance() * price;
      const newCollateralRatio = calcCollateralRatio(
        newCollateralValue,
        vaultDebt
      );
      const newHf = healthFactor(newCollateralValue, vaultDebt);
      apiReturn({
        collateralRatio: newCollateralRatio,
        collateral: balance(),
        vaultDebt,
        hf: newHf,
        collateralValue: newCollateralValue
      });
      return [vaultDebt, price, recoveryMode];
    })
    // VaultRedeemer Redeems Xuasd
    .api(
      VaultRedeemer.redeemVault,
      (amountOfXusdToRedeem) => {
        const collateralAmountToReceive =
          (amountOfXusdToRedeem / collateralPrice) * MICRO_UNITS;
        assume(amountOfXusdToRedeem > 0);
        assume(collateralPrice > 0);
        assume(vaultDebt - amountOfXusdToRedeem >= 0);
        assume(vaultDebt - amountOfXusdToRedeem >= 0);
        assume(balance() >= collateralAmountToReceive);
      },
      (amountOfXusdToRedeem) => {
        const redemptionFee = calculateRedemptionFee(amountOfXusdToRedeem);
        return [0, [amountOfXusdToRedeem + redemptionFee, stablecoin]];
      },
      (amountOfXusdToRedeem, apiReturn) => {
        const collateralAmountToReceive =
          (amountOfXusdToRedeem / collateralPrice) * MICRO_UNITS;
        const redemptionFee = calculateRedemptionFee(amountOfXusdToRedeem);
        require(amountOfXusdToRedeem > 0);
        require(collateralPrice > 0);
        require(vaultDebt - amountOfXusdToRedeem >= 0);
        require(vaultDebt - amountOfXusdToRedeem >= 0);
        require(balance() >= collateralAmountToReceive);
        transfer(amountOfXusdToRedeem, stablecoin).to(Reserve);
        transfer(collateralAmountToReceive).to(this);
        transfer(redemptionFee, stablecoin).to(FeeCollector);
        apiReturn(true);
        return [
          vaultDebt - amountOfXusdToRedeem,
          collateralPrice,
          recoveryMode
        ];
      }
    )
    //RecoveryToggler sets recovery mode
    .api(RecoveryToggler.toggleRecoveryMode, (recoveryModeVal, apiReturn) => {
      apiReturn(true);
      return [vaultDebt, collateralPrice, recoveryModeVal];
    })
    .timeout(relativeTime(10), () => {
      Anybody.publish();
      return [vaultDebt, collateralPrice, recoveryMode];
    });
  assert(vaultDebt == 0);
  assert(balance() == 0 && balance(stablecoin) == 0);
  commit();
  exit();
});