const {VaultsClient, Vault, VAULTS} = require('..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.algo.vaultId;
  const proposedAddress = process.env.ADDRESS_FOR_REDEMPTION;
  const account = new VaultsClient({
    mnemonic,
    network: 'TestNet',
  });
  const vault = new Vault({id: VAULT_ID});
  while (true) {
    const action = await ask.ask(`
  Do you want to:
  1. propose a vault for redemption
  2. redeem a vault
  `, parseInt);

    try {
      switch (action) {
      // receive 0.75% of the collateral of the vault, protocol takes 0.25%
        case 1: const isVaultProposed = await account
            .proposeVaultForRedemption({address: proposedAddress,
              vault});
          console.log(isVaultProposed);
          break;
          // redeem 100 xUSD tokens & receive $100 worth of collateral
        case 2: const isVaultRedeemed = await account.redeemVault({vault,
          amountToRedeem: 10,
          minimumPrice: 1,
          maximumPrice: 1,
          targetVault: proposedAddress,
        });
          console.log(isVaultRedeemed);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
