
/*
  This example script yields all the liquidation events that occured in the
  current vault version.

  Usage example:
  $ VAULT_ID=79758986 node examples/liquidatorEvents.js | tee log.txt
*/

const { masterVault } = require('@xbacked-dao/xbacked-contracts');
const axios = require('axios');
const {
  Account,
  Vault,
  getTransactions
} = require('..'); // Use require('@xbacked-dao/xbacked-sdk'); instead if using sdk as module

// Current Testnet ID's
const VAULT_ID = process.env.VAULT_ID;
const TOKEN_ID = 62281549;

const NETWORK = 'TestNet';

// Round to start searching
// This can be changed to any round number, but seems like Reach
// still need to take it´s time to fast forward in the history
const startRound = 0;
// 5 minute timeout to stop after the last transaction was fetched.
const timeout = 5 * 60 * 1000;

(async () => {
  if (process.env.VAULT_ID) {
    const account = new Account({
      mnemonic: 'amateur sponsor crystal rain filter bulk document silver erupt wave science enough half access crack illegal such broom tobacco dress napkin faint way ability result',
      network: NETWORK
    });
    await account.optIntoToken(TOKEN_ID);

    account.fundFromFaucet();
    const vault = new Vault({id: VAULT_ID});

    console.log(`Getting transactions history starting from round ${startRound}...`);
    let liquidations = 0, txns = 0;

    // This function will be executed each time a new transaction is found.
    const f = async (event) => {
      const current_liq = liquidations;
      const current_txns = txns;
      txns++;
      if (event.type === 'LIQUIDATE') {
        liquidations++;
        // Async GET will mess up transaction order.
        const res = await axios.get(`https://algoindexer.testnet.algoexplorerapi.io/v2/blocks/${event.round}`)
        console.log(event);

        const d = new Date(res.data.timestamp * 1000);
        console.log(`Liquidation time: ${d.toLocaleString()}`);

        console.log(`Liq. count: ${current_liq + 1}`);
        console.log(`Txn. count: ${current_txns + 1}\n`);
      }
      if(txns % 1000 == 0) {
        console.log(`Txn. count: ${txns}\n`);
      }
    };

    await getTransactions({vault, account, f, startRound, timeout});
    console.log(`\nTimed out after ${timeout / 1000}s`);
    process.exit(0);
  } else {
    console.log(`\nVerify VAULT_ID env is set to the lastest TestNet contract version`);
    process.exit(1);
  }
})();


