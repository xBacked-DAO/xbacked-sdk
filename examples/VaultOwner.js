/* eslint-disable no-unused-vars */
const {VaultsClient, Vault, VAULTS, convertFromMicroUnits} = require('..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.algo.vaultId;
  console.log(VAULT_ID);
  const STABLECOIN = process.env.STABLE_COIN;
  const acc = new VaultsClient({mnemonic,
    network: 'TestNet'});
  console.log(await acc.getAddress())
  const vaultState = await acc.getVaultState({vault: new Vault({name: "goEth", network: acc.network})});
  const price = convertFromMicroUnits(vaultState.coldState.collateralPrice);
  while (true) {
    const todo = await ask.ask(`
   Do you want to:
   1.) Opt into stable coin
   2.) Create vault 
   3.) to mint token  
   4.) to return vault debt  
   5.) to withdraw collateral  
   6.) to deposit collateral`, parseInt);

    try {

      switch (todo) {
        // should also opt into stable coin
        case 1: await acc.optIntoToken(VAULTS.TestNet.goEth.assetId);
          console.log('Opted into token');
          break;
        case 2: const isVaultCreated = await acc.createVault({collateral: 0.047325,
          mintAmount: 100,
          vault: new Vault({name: "goEth", network: acc.network}),
          minimumPrice: price - price * 0.02,
          maximumPrice: price + price * 0.02});
          console.log(`isVaultCreated: ${isVaultCreated}`);
          break;
        case 3: const isTokenMinted = await acc.mintToken({amount: 2,
          vault: new Vault({name: "goEth", network: acc.network}),
          minimumPrice: price - price * 0.02,
          maximumPrice: price + price * 0.02});
          console.log(`isTokenMinted: ${isTokenMinted}`);
          break;
        case 4: const isVaultDebtReturned = await acc
            .returnVaultDebt({amount: 4,
              vault: new Vault({name: "goEth", network: acc.network}),
              address: await acc.getAddress()});
          console.log(`isVaultDebtReturned: ${isVaultDebtReturned}`);
          break;
        case 5: const isCollateralWithdrawn = await acc.
            withdrawCollateral({amount: 0.0001,
              vault: new Vault({name: "goEth", network: acc.network}), 
              minimumPrice: price - price * 0.02,
              maximumPrice: price + price * 0.02});
          console.log(`isCollateralWithdrawn: ${isCollateralWithdrawn}`);
          break;
        case 6: const isCollateralDeposited = await acc.
            depositCollateral({amount: 0.002,
              vault: new Vault({name: "goEth", network: acc.network})});
          console.log(`isCollateralDeposited: ${isCollateralDeposited}`);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
