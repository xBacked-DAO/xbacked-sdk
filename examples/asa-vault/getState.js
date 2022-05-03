/* eslint-disable no-unused-vars */
const {ask} = require('@reach-sh/stdlib');
const {VaultClient, Vault, VAULT_IDS} = require('../..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULT_IDS.TestNet.algo;
  console.log(VAULT_ID);
  const account = new VaultClient({
    mnemonic,
    network: 'TestNet',
    asaVault: {decimals: 8},
  });
  const vault = new Vault({id: VAULT_ID, asaVault: {decimals: 8}});
  // eslint-disable-next-line max-len
  while (true) {
    const action = await ask.ask(`
  Do you want to:
  1. get user info
  2. get vault state
  `, parseInt);
    switch (action) {
      case 1: const userInfo = await account.getUserInfo({vault,
        address: await account.getAddress()});
        console.log(userInfo);
        break;
      case 2: const vaultState = await account.getVaultState({vault});
        console.log(vaultState);
        break;
    }
  }
})();
