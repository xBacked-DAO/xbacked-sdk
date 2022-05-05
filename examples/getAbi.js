/* eslint-disable no-unused-vars */
const {VaultClient, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.TestNet.algo.vaultId;
  const account = new VaultClient({
    mnemonic,
    network: 'TestNet',
  });
  const abi = await account.getContractAbi({vaultId: VAULT_ID});
  console.log(abi);
})();
