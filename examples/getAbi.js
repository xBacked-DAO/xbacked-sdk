/* eslint-disable no-unused-vars */
const {Account, VAULT_IDS} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULT_IDS.TestNet.algo;
  const account = new Account({
    mnemonic,
    network: 'TestNet',
  });
  const abi = await account.getContractAbi({vaultId: VAULT_ID});
  console.log(abi);
})();
