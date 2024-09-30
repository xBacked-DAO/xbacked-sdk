const {VaultClient, Vault, VAULTS} = require('../..');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.fLofty.vaultId;
  const liquidationAddress =
   'KCVW6CW2ZZGHDF7I4MIF32O4NE66LKCCX46GDC7SDFOFZWEWRXPOEBU4EA';
  // process.env.ADDRESS_FOR_LIQUIDATION;
  const account = new VaultClient({
    mnemonic,
    network: 'TestNet',
    asaVault: {decimals: 0, new_sdc_vault: true},
  });
  const vault = new Vault({id: VAULT_ID,
    asaVault: {decimals: 0, new_sdc_vault: true}});
  try {
    const isVaultLiquidated = await account.liquidateVault({
      address: liquidationAddress,
      debtAmount: 30.300014,
      vault, dripInterest: false, minimumPrice: 39, maximumPrice: 39});
    console.log(`isVaultLiquidated: ${isVaultLiquidated}`);
  } catch (error) {
    console.error(error);
  }
})();
