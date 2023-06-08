/* eslint-disable no-unused-vars */
const {ask} = require('@reach-sh/stdlib');
const {VaultClient, Vault, VAULTS} = require('../..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.meldGold.vaultId;
  console.log(VAULT_ID);
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault: {decimals: 6},
  });
  console.log(await account.getAddress());
  const vault = new Vault({id: VAULT_ID, asaVault: {decimals: 8, z_p_f_vault_asa: true}});
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
