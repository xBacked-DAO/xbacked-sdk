/* eslint-disable no-unused-vars */
const {ask, loadStdlib} = require('@reach-sh/stdlib');
const {VaultsClient, Vault, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;

  const account = new VaultsClient({
    mnemonic,
    network: 'MainNet',
  });
  const vault = new Vault({name: 'gora', network: account.network});

  const VAULT_ID = vault.id;
  console.log(VAULT_ID);
  // eslint-disable-next-line max-len
  while (true) {
    const action = await ask.ask(
        `
  Do you want to:2
  1. get user info
  2. get vault state
  `,
        parseInt,
    );
    switch (action) {
      case 1:
        const userInfo = await account.getUserInfo({
          vault,
          address: 'KCVW6CW2ZZGHDF7I4MIF32O4NE66LKCCX46GDC7SDFOFZWEWRXPOEBU4EA',
        });
        console.log(userInfo);
        break;
      case 2:
        const vaultState = await account.getVaultState({vault});
        console.log(vaultState);
        break;
      case 3:
        const reach = loadStdlib('ALGO');
        const indexer = new reach.algosdk.Indexer(
            // indexer key
            {'X-API-Key': ''},
            // indexer url
            'https://mainnet-idx.algonode.cloud',
            // indexer port
            '',
        );
        const vaultAnalytics = await account.getVaultAnalytics({vault,
          stbl: 760037151, indexer});
        console.log(vaultAnalytics);
        break;
    }
  }
})();
