/* eslint-disable no-unused-vars */
const {ask} = require('@reach-sh/stdlib');
const {VaultClient, Vault, VAULTS} = require('../..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.xAlgo.vaultId;
  console.log(VAULT_ID);
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault: {decimals: 0, new_sdc_vault: false, new_asa_vault: true},
  });
  console.log(await account.getAddress());
  const vault = new Vault({id: VAULT_ID,
    asaVault: {decimals: 0, new_sdc_vault: false, new_asa_vault: true}});
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
        const userInfo = await account
            .getUserInfo({vault, address: '3XBWFSSX2FZ6QQSTI5FGJNYEEGVWSXYUOWWZV3YSW3LAPVHTSKRV6CASFY'});
        console.log(userInfo);
        break;
      case 2:
        const vaultState = await account.getVaultState({vault});
        console.log(vaultState);
        break;
    }
  }
})();
