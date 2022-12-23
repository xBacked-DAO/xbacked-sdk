/* eslint-disable no-unused-vars */
const {VaultClient, VAULTS} = require('..');
const dotenv = require('dotenv');
const {vault: backend} = require('@xbacked-dao/xbacked-contracts');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = 8;
  const account = new VaultClient({
    mnemonic,
    network: 'LocalHost',
  });
  const abi = await account.getContractAbi({contractId: VAULT_ID, backend});
  console.log(abi);
})();
