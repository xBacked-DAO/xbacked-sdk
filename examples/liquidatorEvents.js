
const { masterVault } = require('@xbacked-dao/xbacked-contracts');
const axios = require('axios');
const {
  Account,
  Vault,
  getTransactions
} = require('..'); // Use require('@xbacked-dao/xbacked-sdk'); instead

// Current Testnet ID's
const VAULT_ID = 70423635;
const TOKEN_ID = 62281549;

const NETWORK = 'TestNet';

// Round to start searching
const startRound = 0;
// 5 minute timeout to stop fetching
const timeout = 5 * 60 * 1000;

(async () => {
  const account = new Account({
    mnemonic: 'amateur sponsor crystal rain filter bulk document silver erupt wave science enough half access crack illegal such broom tobacco dress napkin faint way ability result',
    network: NETWORK
  });
  await account.optIntoToken(TOKEN_ID);

  account.fundFromFaucet();
  const vault = new Vault({id: VAULT_ID});

  console.log(`Getting transactions history starting from round ${startRound}...`);
  let liquidations = 0, txns = 0;
  const f = async (event) => {
    txns++;
    if (event.type === 'LIQUIDATE') {
      liquidations++;
      const res = await axios.get(`https://algoindexer.testnet.algoexplorerapi.io/v2/blocks/${event.round}`)
      console.log(event);

      const d = new Date(res.data.timestamp * 1000);
      console.log(`Liquidation time: ${d.toLocaleString()}`);

      console.log(`Liq. count: ${liquidations}`);
      console.log(`Txn. count: ${txns}\n`);
    }
    if(txns % 1000 == 0) {
      console.log(`Txn. count: ${txns}\n`);
    }
  };
  await getTransactions({vault, account, f, startRound, timeout});
  console.log(`\nTimed out after ${timeout / 1000}s`);
  process.exit(0);
})();


