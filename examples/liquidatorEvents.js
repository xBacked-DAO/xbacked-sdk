
/*
  This example script yields all the liquidation events that occurred in the
  current vault version.

  Usage example:
  $ VAULT_ID=79758986 node examples/liquidatorEvents.js | tee log.txt
*/

const axios = require('axios');
const {
  VaultsClient,
  Vault,
  getTransactions,
  VAULTS,
} = require('..'); // Use require('@xbacked-dao/xbacked-sdk'); instead if using sdk as module

// Current MainNet ID's
const VAULT_ID = VAULTS.MainNet.gAlgo.vaultId;
console.log({VAULT_ID});

const NETWORK = 'MainNet';

// Round to start searching
// This can be changed to any round number, but seems like Reach
// still need to take it´s time to fast forward in the history
const startRound = 41309301;
// 5 minute timeout to stop after the last transaction was fetched.
const timeout = 5 * 60 * 1000;

(async () => {
  if (VAULT_ID) {
    const account = new VaultsClient({
      mnemonic: 'amateur sponsor crystal rain filter bulk document silver erupt wave science enough half access crack illegal such broom tobacco dress napkin faint way ability result',
      network: NETWORK,
    });
    // await account.optIntoToken(TOKEN_ID);

    // account.fundFromFaucet();
    const vault = new Vault({name: 'gAlgo', network: 'MainNet'});

    console.log(`Getting transactions history starting from round ${startRound}...`);
    let liquidations = 0; let txns = 0;

    // This function will be executed each time a new transaction is found.
    const f = async (event) => {
      const current_liq = liquidations;
      const current_txns = txns;
      txns++;
      if (event.type === 'LIQUIDATE') {
        liquidations++;
        // Async GET will mess up transaction order.
        const res = await axios.get(`https://mainnet-api.algonode.cloud/v2/blocks/${event.round}`);
        console.log(event);

        const d = new Date(res.data.timestamp * 1000);
        console.log(`Liquidation time: ${d.toLocaleString()}`);

        console.log(`Liq. count: ${current_liq + 1}`);
        console.log(`Txn. count: ${current_txns + 1}\n`);
      }
      if (txns % 1000 == 0) {
        console.log(`Txn. count: ${txns}\n`);
      }
    };

    await getTransactions({vault, account, f, startRound, endRound: 41346674, timeout, asaVault: true});
    console.log(`\nTimed out after ${timeout / 1000}s`);
    process.exit(0);
  } else {
    console.log(`\nVerify VAULT_ID env is set to the lastest MainNet contract version`);
    process.exit(1);
  }
})();


