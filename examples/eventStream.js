const { Account } = require('..');


// Example snippet to show how to monitor vault activity using the xBacked SDK.
(async () => {
  const account = new Account({
    mnemonic: '...',
    network: 'TestNet',
  });

  await account.subscribeToEvents({
    vaultId: 2,
    createCallback: (address, vaultState) => {
      console.log('Created', address, JSON.stringify(vaultState, null, 4));
    },
    transactionCallback: (address, vaultState) => {
      console.log('Transaction', address, JSON.stringify(vaultState, null, 4));
    },
  });
})();
