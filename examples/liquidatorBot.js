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
} = require('..'); // Use require('@xbacked-dao/xbacked-sdk'); instead
const yargs = require('yargs/yargs');

// Max. timeout between event queries.
const MAX_EVENT_TIMEOUT = 2000;

const argv = yargs(process.argv.slice(2))
    .usage('Usage: $0')
    .number('vault-id')
    .describe('vault-id', 'The master vault id to search for vaults')
    .number('token-id')
    .describe('token-id', 'The token id to use as payment')
    .number('d')
    .alias('d', 'debt-amount')
    .describe('d', 'Amount of debt tokens to use for liquidation')
    .number('s')
    .alias('s', 'start-round')
    .describe('s', 'Search for vaults starting from this round')
    .number('e')
    .alias('e', 'end-round')
    .describe('e', 'Search for vaults ending at this round. Skip this to use the lastest round')
    .number('u')
    .alias('u', 'update-interval')
    .describe('u', 'The interval in seconds between vaults updates')
    .boolean('v')
    .alias('v', 'verbose')
    .describe('v', 'Show all output')
    .default({u: 10, s: 0, v: false})
    .demandOption(['vault-id', 'token-id', 'debt-amount'])
    .version(false)
    .argv;

const verbose = (string) => {
  if (argv.verbose) {
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


    if (updatedCR < 120) {
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
    return 0;
  } catch (e) {
    console.log(`Failed to liquidate vault: ${e}`);
    return 0;
  }
};

(async () => {
  const account = new Account({
    mnemonic: 'amateur sponsor crystal rain filter bulk document silver erupt wave science enough half access crack illegal such broom tobacco dress napkin faint way ability result',
    // mnemonic: 'lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch',
    network: 'LocalHost',
  });
  await account.optIntoToken(yargs.tokenId);

  account.fundFromFaucet();
  const reachStdLib = account.reachStdLib;
  const vault = new Vault({id: yargs.vaultID});

  let remainingDebtTokens = convertToMicroUnits(argv.debtAmount);
  let startRound = argv.startRound;
  const openVaults = new Set();

  while (remainingDebtTokens > 1) {
    const endRound = argv.endRound || reachStdLib.bigNumberToNumber(await reachStdLib.getNetworkTime());

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

    for (const ownerAddr of openVaults) {
      const usedTokens = await tryLiquidate(account, vault, ownerAddr, remainingDebtTokens);
      remainingDebtTokens -= usedTokens;
    }

    // Wait the update interval seconds to update vaults and try to liquidate
    await new Promise((resolve) => setTimeout(resolve, argv.updateInterval * 1000));
  }
  // Reach next() hangs the process.
  process.exit(0);
})();

