/* eslint-disable no-unused-vars */
const {VaultClient, Vault, VAULTS} = require('../..');
const {ask} = require('@reach-sh/stdlib');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.TestNet.fLofty.vaultId;
  console.log(VAULT_ID);
  const STABLECOIN = process.env.STABLE_COIN;
  const COLLATERAL_TOKEN = process.env.COLLATERAL_TOKEN;
  const acc = new VaultClient({mnemonic, network: 'TestNet', asaVault: {decimals: 0, new_sdc_vault: true}});
  const vault = new Vault({id: VAULT_ID,
    asaVault: {decimals: 0, new_sdc_vault: true}});
  console.log(await acc.getAddress());
  while (true) {
    const todo = await ask.ask(
        `
   Do you want to:
   1.) Opt into stable coin
   2.) Create vault 
   3.) to mint token  
   4.) to return vault debt  
   5.) to withdraw collateral  
   6.) to deposit collateral
   7.) to opt into asa collateral token`,
        parseInt,
    );

    try {
      switch (todo) {
        case 1:
          await acc.optIntoToken(STABLECOIN);
          console.log('Opted into token');
          break;
        case 2:
          const isVaultCreated = await acc.createVault({
            collateral: 2,
            mintAmount: 100,
            vault: new Vault({id: VAULT_ID,
              asaVault: {decimals: 0, new_sdc_vault: true}}),
            minimumPrice: 60,
            maximumPrice: 60,
          });
          console.log(`isVaultCreated: ${isVaultCreated}`);
          break;
        case 3:
          const isTokenMinted = await acc.mintToken({
            amount: 2,
            vault: new Vault({id: VAULT_ID,
              asaVault: {decimals: 0, new_sdc_vault: true}}),
            minimumPrice: 60,
            maximumPrice: 60,
          });
          console.log(`isTokenMinted: ${isTokenMinted}`);
          break;
        case 4:
          const isVaultDebtReturned = await acc.returnVaultDebt({
            amount: 1.5,
            vault: new Vault({id: VAULT_ID,
              asaVault: {decimals: 0, new_sdc_vault: true}}),
            close: false,
            address: await acc.getAddress(),
            // address: 'Y3YTSFL3HC24NDJGMVDMRJXI6YBRT2QVYWCTSYWT4SLNYPBFSVX5JDFDM4',
          });
          console.log(`isVaultDebtReturned: ${isVaultDebtReturned}`);
          break;
        case 5:
          const isCollateralWithdrawn = await acc.withdrawCollateral({
            amount: 1,
            vault: new Vault({id: VAULT_ID, asaVault:
               {decimals: 0, new_sdc_vault: 0}}),
            minimumPrice: 60,
            maximumPrice: 60,
          });
          console.log(`isCollateralWithdrawn: ${isCollateralWithdrawn}`);
          break;
        case 6:
          const isCollateralDeposited = await acc.depositCollateral({
            amount: 1,
            vault: new Vault({id: VAULT_ID, asaVault: {decimals: 0,
              new_sdc_vault: true}}),
          });
          console.log(`isCollateralDeposited: ${isCollateralDeposited}`);
          break;
        case 7:
          await acc.optIntoToken(COLLATERALTOKEN);
          console.log('Opted into collateral token');
          break;
        case 8: const isPriceUpdated =
          await acc.updatePrice({price: 39, vault});
          console.log({isPriceUpdated});
          break;
        case 9: const isInterestDripped =
        await acc.dripInterest({address: await acc.getAddress(), vault});
          console.log({isInterestDripped});
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
