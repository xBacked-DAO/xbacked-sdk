const {Account} = require('..');
const dotenv = require('dotenv');
dotenv.config();

// Example snippet to show how to monitor vault activity using the xBacked SDK.
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID;
  const account = new Account({
    mnemonic,
    network: 'TestNet',
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
