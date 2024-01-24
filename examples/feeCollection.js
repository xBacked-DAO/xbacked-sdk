const {VaultClient, Vault, VAULTS} = require('..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.gAlgo.vaultId;
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault:{
      decimals: 6
    }
  });
  const vault = new Vault({id: VAULT_ID, asaVault: {decimals: 6}});

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
          const isInterestDripped = await account.dripInterest({address: await account.getAddress(), vault});
          console.log(isInterestDripped);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
