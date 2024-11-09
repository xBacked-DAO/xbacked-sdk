const {getAllAccounts, VaultsClient,
  Vault, VAULTS, addrFromBox} = require('..');
const {loadStdlib} = require('@reach-sh/stdlib');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();


// eslint-disable-next-line require-jsdoc
function readOrCreateJson(filePath) {
  try {
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileData);
    } else {
      // Return an empty array if the file does not exist
      return [];
    }
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return []; // Return an empty array if there's an error
  }
}

// Function to write data to a JSON file
// eslint-disable-next-line require-jsdoc
function writeToJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf-8');
    console.log(`Updated data has been written to ${filePath}`);
  } catch (error) {
    console.error('Error writing to JSON file:', error);
  }
}

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.algo.vaultId;
  const INDEXER_TOKEN = process.env.INDEXER_TOKEN;
  const account = new VaultsClient({
    mnemonic,
    network: 'MainNet',
  });
  console.log({VAULT_ID});

  const reach = loadStdlib('ALGO');
  const token = {'X-API-Key': INDEXER_TOKEN};
  const indexer = new reach.algosdk.Indexer(
      // indexer key
      token,
      // indexer url
      'https://mainnet-idx.algonode.cloud',
      // indexer port
      '',
  );
  const vaultName = 'algo';
  Object.entries({[vaultName]: VAULTS['MainNet'][vaultName]})
      .forEach(async ([name, rawData]) =>{
        console.log({name});
        const vault = new Vault({name, network: 'MainNet'});
        const accounts = await getAllAccounts(
        // application ID
            rawData.vaultId,
            indexer,
            [],
        );
        const globalState = await account.getVaultState({vault});
        console.log({accounts});
        // get state for each vault
        const getUserInfo = async ({address, vault, time, price})=>{
          const vaultInfo = await account.getUserInfo({address, vault});
          return {...vaultInfo,
            vaultOwner: address, time, price, vault: vault.name};
        };
        const vaultData = accounts.map( (vaultAccount) => {
          try {
            return getUserInfo({address: addrFromBox(vaultAccount),
              vault, time: new Date(),
              price: globalState.coldState.collateralPrice});
          } catch (eror) {
            return {error};
          }
        });
        const resolvedVaultData = await Promise.all(vaultData);
        const currentFilePath = `./data/${name}.json`;
        const currentArray = readOrCreateJson(currentFilePath);
        console.log({currentArray});
        currentArray.push(resolvedVaultData);
        writeToJson(currentFilePath, currentArray);
        //   console.log({resolvedVaultData});
        console.log(resolvedVaultData.length);
      });
  // recursive function to get all opted in addresses
})();


