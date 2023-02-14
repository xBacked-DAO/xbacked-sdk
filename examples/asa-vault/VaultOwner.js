/* eslint-disable no-unused-vars */
const {VaultClient, Vault, VAULTS} = require('../..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = process.env.VAULT_ID ? process.env.VAULT_ID :
  VAULTS.TestNet.algo.vaultId;
  console.log(VAULT_ID);
  const STABLECOIN = process.env.STABLE_COIN;
  const COLLATERAL_TOKEN = process.env.COLLATERAL_TOKEN;
  const acc = new VaultClient({mnemonic,
    network: 'TestNet', asaVault: {decimals: 8}});
  while (true) {
    const todo = await ask.ask(`
   Do you want to:
   1.) Opt into stable coin
   2.) Create vault 
   3.) to mint token  
   4.) to return vault debt  
   5.) to withdraw collateral  
   6.) to deposit collateral
   7.) to opt into asa collateral token`, parseInt);

    try {
      switch (todo) {
        case 1: await acc.optIntoToken(STABLECOIN);
          console.log('Opted into token');
          break;
        case 2: const isVaultCreated = await acc.createVault({collateral: 140,
          mintAmount: 100,
          vault: new Vault({id: VAULT_ID, asaVault: {decimals: 8}}),
          minimumPrice: 1,
          maximumPrice: 1});
          console.log(`isVaultCreated: ${isVaultCreated}`);
          break;
        case 3: const isTokenMinted = await acc.mintToken({amount: 2,
          vault: new Vault({id: VAULT_ID,
            asaVault: {decimals: 8}}), minimumPrice: 1,
          maximumPrice: 1});
          console.log(`isTokenMinted: ${isTokenMinted}`);
          break;
        case 4: const isVaultDebtReturned = await acc
            .returnVaultDebt({amount: 1,
              vault: new Vault({id: VAULT_ID, asaVault: {decimals: 8}}),
              close: false,
              address: await acc.getAddress(),
            });
          console.log(`isVaultDebtReturned: ${isVaultDebtReturned}`);
          break;
        case 5: const isCollateralWithdrawn = await acc.
            withdrawCollateral({amount: 3,
              vault: new Vault({id: VAULT_ID,
                asaVault: {decimals: 8}}), minimumPrice: 1,
              maximumPrice: 1});
          console.log(`isCollateralWithdrawn: ${isCollateralWithdrawn}`);
          break;
        case 6: const isCollateralDeposited = await acc.
            depositCollateral({amount: 3,
              vault: new Vault({id: VAULT_ID, asaVault: {decimals: 8}})});
          console.log(`isCollateralDeposited: ${isCollateralDeposited}`);
          break;
        case 7: await acc.optIntoToken(COLLATERALTOKEN);
          console.log('Opted into collateral token');
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
