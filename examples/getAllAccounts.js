const {getAllAccounts, Account, Vault} = require('..');
const {loadStdlib} = require('@reach-sh/stdlib');

(async () => {
  const account = new Account({
    mnemonic: 'lens sell....',
    network: 'LocalHost',
  });
  const VAULT_ID = 123;
  const vault = new Vault({id: VAULT_ID});
  const reach = loadStdlib('ALGO');
  const indexer = new reach.algosdk.Indexer(
      // indexer key
      '',
      // indexer url
      'https://algoindexer.testnet.algoexplorerapi.io',
      // indexer port
      443,
  );
  // recursive function to get all opted in addresses
  const accounts = await getAllAccounts(
      // application ID
      VAULT_ID,
      indexer,
      [],
  );
  // get state for each vault
  const vaultData = accounts.map((vaultAccount) => {
    return account.getUserInfo({address: vaultAccount.address, vault});
  });
  return vaultData;
})();
