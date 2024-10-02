/* eslint-disable camelcase */
const {
  VaultClient,
  VAULTS,
} = require('../..'); // Use require('@xbacked-dao/xbacked-sdk'); instead if using sdk as module

const {new_sdc_vault} = require('@xbacked-dao/xbacked-contracts');
const dotenv = require('dotenv');

console.log({new_sdc_vault});
dotenv.config();
(async () =>{
  const mnemonic = process.env.MNEMONIC;
  const VAULT_ID = VAULTS.MainNet.lfty0314.vaultId;
  console.log(VAULT_ID);
  const account = new VaultClient({
    mnemonic,
    network: 'MainNet',
    asaVault: {decimals: 0, new_sdc_vault: true},
  });


  await account.subscribeToEvents({vaultId: VAULT_ID,
    createCallback: (address, state)=>console.log({address, state}),
    transactionCallback: (address, state)=>console.log({address, state}),
    liquidateCallback: (liquidator, vaultOwner, collateral, debt)=>
      console.log({liquidator, vaultOwner,
        collateral: collateral.toNumber(), debt: debt.toNumber()}),
  });
})();
