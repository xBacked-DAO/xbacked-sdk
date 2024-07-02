const {getAllAccounts, VaultClient, Vault, VAULTS, addrFromBox} = require('..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.newSilver$.vaultId;
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault: {
      decimals: 6,
      new_asa_vault: true,
    },
  });
  const vault = new Vault({id: VAULT_ID, asaVault: {
    decimals: 6,
    new_asa_vault: true,
  }});
  console.log(await account.getAddress());
  while (true) {
    const action = await ask.ask(
        `
  Do you want to:
  1. collect fees
  2. drip interest
  `,
        parseInt,
    );
    try {
      switch (action) {
        // distribute collateral fees to xUSD stakers and DAO
        // Receive 0.5% of the accured fees

        case 1:
          const isFeeCollected = await account.collectFees({vault});
          console.log(isFeeCollected);
          break;
        // Drip interest for specific vault. This is helpful when liquidating
        case 2:

          const {loadStdlib} = require('@reach-sh/stdlib');
          const dotenv = require('dotenv');
          dotenv.config();

          (async () => {
            const mnemonic = process.env.MNEMONIC;
            const VAULT_ID = VAULTS.MainNet.newSilver$.vaultId;
            const INDEXER_TOKEN = process.env.INDEXER_TOKEN;
            const account = new VaultClient({
              mnemonic,
              network: 'MainNet',
              asaVault: {
                decimals: 6,
                new_asa_vault: true,
              },
            });
            console.log({VAULT_ID});
            const vault = new Vault({id: VAULT_ID, asaVault: {
              decimals: 6,
              new_asa_vault: true,
            }});
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
            const vaultData = accounts.map( async (vaultAccount) => {
              await account.dripInterest({address: addrFromBox(vaultAccount), vault});
              try {
                return account.getUserInfo({address: addrFromBox(vaultAccount), vault});
              } catch (eror) {
                return {error};
              }
            });
            const vaultAddresses = accounts.map( (vaultAccount) => addrFromBox(vaultAccount));
            console.log(vaultAddresses);
            const resolvedVaultData = await Promise.all(vaultData);
            const totalVaultDebt = resolvedVaultData.reduce((prev, next)=> prev + next.vaultDebt, 0);
            const microUnits = 1000000;
            console.log({tvd: totalVaultDebt / microUnits});
            return resolvedVaultData;
          })();

          // const isInterestDripped = await account.dripInterest({address: await account.getAddress(), vault});
          // console.log(isInterestDripped);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
