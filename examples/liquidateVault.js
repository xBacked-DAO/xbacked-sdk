const {VaultsClient, Vault, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.algo.vaultId;
  const liquidationAddress = process.env.ADDRESS_FOR_LIQUIDATION;
  const account = new VaultsClient({
    mnemonic,
    network: 'TestNet',
  });
  const vault = new Vault({name: "algo", network: "TestNet"});
  try {
    const isVaultLiquidated = await account.liquidateVault({
      address: liquidationAddress,
      debtAmount: 30,
      vault,
      dripInterest: true,
      minimumPrice: 1,
      maximumPrice: 1});
    console.log(`isVaultLiquidated: ${isVaultLiquidated}`);
  } catch (error) {
    console.error(error);
  }
})();
