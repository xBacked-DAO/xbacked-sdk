const {Account, Vault, VAULT_IDS} = require('..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();


(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULT_IDS.TestNet.algo;
  const account = new Account({
    mnemonic,
    network: 'TestNet',
  });
  const vault = new Vault({id: VAULT_ID});

  while (true) {
    const action = await ask.ask(`
  Do you want to:
  1. collect fees
  2. settle interest
  3. drip interest
  `, parseInt);
    try {
      switch (action) {
      // distribute collateral fees to xUSD stakers and DAO
      // Receive 0.5% of the accured fees
        case 1: const isFeeCollected = await account.collectFees({vault});
          console.log(isFeeCollected);
          break;
          // Settle accrued interest
          // & distribute to DAO & Governance token stakers
        case 2: const isInterestSettled = await account.settleInterest({vault});
          console.log(isInterestSettled);
          break;
          // Drip interest for specific vault. This is helpful when liquidating
        case 3: const isInterestDripped = await account
            .dripInterest({address: await account.getAddress(), vault});
          console.log(isInterestDripped);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
