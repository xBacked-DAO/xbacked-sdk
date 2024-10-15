const {VaultsClient, Vault, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.lfty0314.vaultId;
  const liquidationAddress = process.env.ADDRESS_FOR_LIQUIDATION;
  const account = new VaultsClient({
    mnemonic,
    network: 'TestNet',
  });
  const vault = new Vault({name: 'lfty0314', network: 'TestNet'});
  try {
    const isVaultLiquidated = await account.liquidateVault({
      address: liquidationAddress,
      debtAmount: 19.8,
      vault,
      dripInterest: true,
      minimumPrice: 22,
      maximumPrice: 22});
    console.log(`isVaultLiquidated: ${isVaultLiquidated}`);
  } catch (error) {
    console.error(error);
  }
})();
