/* eslint-disable no-unused-vars */
const {VaultsClient, VAULTS} = require('..');
const dotenv = require('dotenv');
const {vault: backend} = require('@xbacked-dao/xbacked-contracts');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.algo;
  const account = new VaultsClient({
    mnemonic,
    network: 'MainNet',
  });
  const abi = await account.getContractAbi({contractId: VAULT_ID, backend});
  console.log(abi);
})();
