import {Account, Vault, EventFetcher} from '../lib/cjs/index.js';

(async () => {

  const VAULT_ID = 50;

  const account = new Account({
    mnemonic: 'lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch',
    network: 'LocalHost'
  });
  await account.initialiseReachAccount();
  const vault = new Vault({id: VAULT_ID});

  console.log(await vault.getUserInfo({account, address: 'ZUEUFXKIOP4FZPGY4HEIWPZC7MZGOMHO22I2ESF3HLZM4H4IQK76IMCLJE'}));

  const eventFetcher = new EventFetcher({ vault, account });

  console.log((await eventFetcher.getCreatedVaults({timeout: 1000})));
  // Output example:
  // [
  //   VaultCreatedEvent {
  //     round: 51,
  //     owner: 'ZUEUFXKIOP4FZPGY4HEIWPZC7MZGOMHO22I2ESF3HLZM4H4IQK76IMCLJE',
  //     vaultState: {
  //       collateralRatio: 1200,
  //       collateral: 120000000,
  //       liquidating: false,
  //       vaultDebt: 100000000,
  //       redeemable: false
  //     }
  //   },
  //   VaultCreatedEvent {
  //     round: 62,
  //     owner: 'V4KOI6X774CYZQTMZ2LAI7ZDI5LITCGBYLQOVA6TN5CBLRMZRIC4K4CNOI',
  //     vaultState: {
  //       collateralRatio: 1200,
  //       collateral: 120000000,
  //       liquidating: false,
  //       vaultDebt: 100000000,
  //       redeemable: false
  //     }
  //   }
  // ]

  // Promises cannot be cancelled and Reach next() will never resolve until
  // fetching a new vault.
  process.exit(0)
})();
