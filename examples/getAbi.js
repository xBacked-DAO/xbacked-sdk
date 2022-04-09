/* eslint-disable no-unused-vars */
const {Account, Vault} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID;
  const account = new Account({
    mnemonic,
    network: 'TestNet',
  });
  const abi = await account.getContractAbi({vaultId: VAULT_ID});
  console.log(abi);
})();
