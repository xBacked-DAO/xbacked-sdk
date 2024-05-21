/* eslint-disable no-unused-vars */
const {ask} = require('@reach-sh/stdlib');
const {VaultsClient, Vault, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
 
  const account = new VaultsClient({
    mnemonic,
    network: 'MainNet'
  });
  const vault = new Vault({name: "silver$", network: account.network});
  const VAULT_ID = vault.id; 
  console.log(VAULT_ID);
  // eslint-disable-next-line max-len
  while (true) {
    const action = await ask.ask(
        `
  Do you want to:
  1. get user info
  2. get vault state
  `,
        parseInt,
    );
    switch (action) {
      case 1:
        const userInfo = await account.getUserInfo({vault, address: await account.getAddress()});
        console.log(userInfo);
        break;
      case 2:
        const vaultState = await account.getVaultState({vault});
        console.log(vaultState);
        break;
    }
  }
})();
