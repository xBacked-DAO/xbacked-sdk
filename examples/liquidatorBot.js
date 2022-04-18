// NOTE: this bot watches events emitted from a vault to determine when to liquidate
// The alternative is to use the getAllAccounts function to get all addresses & iterate over them
const {
  Account,
  Vault,
  convertToMicroUnits,
  convertFromMicroUnits,
  calcMaxDebtPayout,
  calcCollateralRatio,
  calcDiscountPrice,
  calcCollateralRatioAfterLiquidation,
  LIQUIDATION_FEE,
  getOpenVaults,
  VAULT_IDS,
} = require('..'); // Use require('@xbacked-dao/xbacked-sdk'); instead
const dotenv = require('dotenv');
dotenv.config();
// Max. timeout between event queries.
const MAX_EVENT_TIMEOUT = 5000000;


const verbose = (string) => {
  if (process.env.VERBOSE == 1) {
    console.log(string + '\n');
  }
};

const tryLiquidate = async (account, vault, address, remainingDebtTokens) => {
  try {
    const vaultState = await vault.getState({account});
    const collateralPrice = vaultState.collateralPrice;
    const userInfo = await vault.getUserInfo({account, address});
    const collateral = userInfo.collateral;
    const vaultDebt = userInfo.vaultDebt;

    verbose('Collateral Price: ' + collateralPrice, null, 2);

    const updatedCR = calcCollateralRatio(collateral,
        collateralPrice, vaultDebt);
    userInfo.collateralRatio = updatedCR;
    verbose('Address: ' + address);
    verbose('User vault state: ' + JSON.stringify(userInfo, null, 2));


    if (updatedCR < 1.1) {
      const maxDebtPayout = calcMaxDebtPayout(
          collateral,
          collateralPrice,
          vaultDebt,
      );
      // Partial liquidate if there are not enough tokens.
      const amountToPay = Math.min(remainingDebtTokens, maxDebtPayout);
      verbose(`Max pay amount: ${maxDebtPayout}`);
      verbose(`Amount to pay: ${amountToPay}`);
      const collateralRatioAfterLiquidation = calcCollateralRatioAfterLiquidation(
          collateral,
          collateralPrice,
          amountToPay,
          vaultDebt,
      );
      verbose(`CR after liquidation: ${collateralRatioAfterLiquidation}\n`);

      const discountPrice = calcDiscountPrice(collateralPrice);
      const collateralPaid = (amountToPay / discountPrice);
      const totalReceived = collateralPaid - (collateralPaid * LIQUIDATION_FEE);

      await account.liquidateVault({address, debtAmount: amountToPay, vault});
      console.log(`Vault from ${address} liquidated with ${convertFromMicroUnits(amountToPay)} debt tokens`);
      console.log(`Aquired ${totalReceived} collateral tokens at ${convertFromMicroUnits(discountPrice)}\n`);
      console.log(`Remaining debt tokens: ${convertFromMicroUnits(remainingDebtTokens - amountToPay)}\n`);
      return amountToPay;
    }
    console.log(`No need to liquidate  updated C.R: ${updatedCR}`);
    return 0;
  } catch (e) {
    console.log(`Failed to liquidate vault: ${e}`);
    return 0;
  }
};

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULT_IDS.TestNet.algo;
  const STABLECOIN = process.env.STABLE_COIN;
  const account = new Account({
    mnemonic,
    network: 'TestNet',
  });
  await account.optIntoToken(STABLECOIN);
  await account.fundFromFaucet();
  const reachStdLib = account.reachStdLib;
  const vault = new Vault({id: VAULT_ID});
  let remainingDebtTokens = convertToMicroUnits(process
      .env.REMAINING_DEBT_TOKENS);
  let startRound = process.env.START_ROUND;
  const openVaults = new Set();

  while (remainingDebtTokens > 1) {
    const endRound = process.env.END_ROUND || reachStdLib
        .bigNumberToNumber(await reachStdLib.getNetworkTime());
    if (startRound < endRound) {
      console.log('Obtaining new vault data\n');
      verbose(`startRound: ${startRound}`);
      verbose(`endRound: ${endRound}\n`);
      try {
        (await getOpenVaults({
          account,
          vault,
          startRound,
          endRound,
          timeout: MAX_EVENT_TIMEOUT,
        })).forEach((ownerAddr) => openVaults.add(ownerAddr));
      } catch (e) {
        console.log(e);
      }
      startRound = endRound;
    }

    console.log(openVaults, 'openVaults');

    for (const ownerAddr of openVaults) {
      const usedTokens = await tryLiquidate(account,
          vault, ownerAddr, remainingDebtTokens);
      remainingDebtTokens -= usedTokens;
    }

    // Wait the update interval seconds to update vaults and try to liquidate
    await new Promise((resolve) => setTimeout(resolve, 60 * 1000));
  }
  // Reach next() hangs the process.
  process.exit(0);
})();

