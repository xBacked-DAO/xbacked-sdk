const reach = require('@reach-sh/stdlib');
const contracts = require('@xbacked-dao/xbacked-contracts');
const dotenv = require('dotenv');

dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const reachConnection = reach.loadStdlib('ALGO');
  reachConnection.setProviderByName('LocalHost');

  const account = await reachConnection.newAccountFromMnemonic(mnemonic);

  if (reachConnection.canFundFromFaucet) {
    await reachConnection.fundFromFaucet(account, reachConnection.parseCurrency(100));
  }

  const token = await reachConnection.launchToken(account, 'STB', 'STB');
  await account.tokenAccept(token.id);
  await token.mint(account, reachConnection.parseCurrency(2000));

  const contractConnection = account.contract(contracts.vault);

  let leContract;

  console.log(token.id.toNumber());

  await reachConnection.withDisconnect(() =>
    contracts.vault
      .Admin(contractConnection, {
        log: async (message) => console.log(`From contract: ${message}`),
        isInitialized: (contractID) => {
          // resolve(contractID);
          leContract = contractID;
          reachConnection.disconnect(null);
          console.log(leContract);
        },
        setLiquidatorDiscountRate: () => 4.5 * 10,
        setStablecoin: () => token.id,
        setInitialSupply: () => 2000,
        setLiquidatorDiscountRate: () => 3.5 * 10,
        constructorParams: () => ({
          initialTreasuryAddress: account.getAddress(),
          initialGovStakersAddress: account.getAddress(),
          initialStabilityPoolAddress: account.getAddress(),
          oracleAddress: account.getAddress(),
          LIQUIDATION_COLLATERAL_RATIO: 1100000,
          VAULT_INTEREST_RATE: 2000000000,
        }),
      })
      .catch((e) => {
        if (e) {
          console.warn(e);
        }
      }),
  );

  console.log(`Contract; ${leContract}; StableCoin: ${token.id.toNumber()}`);
})();
