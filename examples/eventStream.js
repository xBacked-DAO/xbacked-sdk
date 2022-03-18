const { Account } = require('..');

(async () => {
  const account = new Account({
    mnemonic: '...',
    network: 'LocalHost',
  });

  // receive 0.75% of the collateral of the vault, protocol takes 0.25%
  await account.subscribeToEvents({
    vaultId: 6,
    createCallback: (address, vaultState) => {
      console.log('Created', address, JSON.stringify(vaultState, null, 4));
    },
    transactionCallback: (address, vaultState) => {
      console.log('Transaction', address, JSON.stringify(vaultState, null, 4));
    },
  });
})();
