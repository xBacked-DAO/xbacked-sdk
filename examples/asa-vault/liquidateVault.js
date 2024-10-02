const {VaultClient, Vault, VAULTS} = require('../..');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.MainNet.lfty0314.vaultId;
  const liquidationAddress =
   '3XBWFSSX2FZ6QQSTI5FGJNYEEGVWSXYUOWWZV3YSW3LAPVHTSKRV6CASFY';
  // process.env.ADDRESS_FOR_LIQUIDATION;
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault: {decimals: 0, new_sdc_vault: true},
  });
  const vault = new Vault({id: VAULT_ID,
    asaVault: {decimals: 0, new_sdc_vault: true}});
  try {
    const isVaultLiquidated = await account.liquidateVault({
      address: liquidationAddress,
      debtAmount: 32.76,
      vault, dripInterest: false, minimumPrice: 36.4, maximumPrice: 36.4});
    console.log(`isVaultLiquidated: ${isVaultLiquidated}`);
  } catch (error) {
    console.error(error);
  }
})();
