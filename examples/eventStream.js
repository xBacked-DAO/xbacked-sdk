const {VaultClient, VAULTS} = require('..');
const dotenv = require('dotenv');
dotenv.config();

// Example snippet to show how to monitor vault activity using the xBacked SDK.
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.algo.vaultId;
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
  });

  await account.subscribeToEvents({
    vaultId: VAULT_ID,
    createCallback: (address, vaultState) => {
      console.log('Created', address, JSON.stringify(vaultState, null, 4));
    },
    transactionCallback: (address, vaultState) => {
      console.log('Transaction', address, JSON.stringify(vaultState, null, 4));
    },
  });
})();
