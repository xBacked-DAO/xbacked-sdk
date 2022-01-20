/* eslint-disable no-unused-vars */
import {Account, Vault} from 'xbacked-sdk';
(async () => {
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  const isVaultCreated = await acc.createVault({collateral: 10,
    mintAmount: 5,
    vault: new Vault({id: VAULT_ID})});
  const isTokenMinted = await acc.mintToken({amount: 2,
    vault: new Vault({id: VAULT_ID})});
  const isVaultDebtReturned = await acc.returnVaultDebt({amount: 5,
    vault: new Vault({id: VAULT_ID})});
  const isCollateralWithdrawn = await acc.withdrawCollateral({amount: 3,
    vault: new Vault({id: VAULT_ID})});
  const isCollateralDeposited = await acc.depositCollateral({amount: 3,
    vault: new Vault({id: VAULT_ID})});
})();
