const {getAllAccounts, VaultClient, Vault, VAULTS, addrFromBox} = require('..');
const {loadStdlib} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.newAlgo.vaultId;
  const INDEXER_TOKEN = process.env.INDEXER_TOKEN;
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    new_algo_vault: true
  });
  console.log({VAULT_ID})
  const vault = new Vault({id: VAULT_ID, new_algo_vault: true});
  const reach = loadStdlib('ALGO');
  const token = {'X-API-Key': INDEXER_TOKEN};
  const indexer = new reach.algosdk.Indexer(
      // indexer key
      token,
      // indexer url
      '	https://mainnet-idx.algonode.cloud',
      // indexer port
      '',
  );
  // recursive function to get all opted in addresses
  const accounts = await getAllAccounts(
      // application ID
      VAULT_ID,
      indexer,
      [],
  );
  console.log({accounts});
  // get state for each vault
  const vaultData = accounts.map( (vaultAccount) => {
    try{
      return account.getUserInfo({address: addrFromBox(vaultAccount), vault});
    }catch(eror){
      return{error}
    }
    
  });
  const vaultAddresses = accounts.map( (vaultAccount) => addrFromBox(vaultAccount));
  console.log(vaultAddresses);
  const resolvedVaultData = await Promise.all(vaultData);
  const totalVaultDebt = resolvedVaultData.reduce((prev, next)=> prev + next.vaultDebt, 0);
  const microUnits = 1000000
  console.log({tvd: totalVaultDebt / microUnits});
  return resolvedVaultData;
})();
