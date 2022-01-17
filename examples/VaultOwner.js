import {Account, Vault} from 'xbacked-sdk';
(async()=>{
    const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
    let isVaultCreated = await acc.createVault({collateral: 10, mintAmount: 5, vault: new Vault({id: VAULT_ID})});
    let isTokenMinted = await acc.mintToken({amount: 2,vault: new Vault({id: VAULT_ID})});
    let isVaultDebtReturned = await acc.returnVaultDebt({amount: 5, vault: new Vault({id: VAULT_ID})});
    let isCollateralWithdrawn = await acc.withdrawCollateral({amount: 3, vault: new Vault({id: VAULT_ID})});
    let isCollateralDeposited = await acc.depositCollateral({amount: 3, vault: new Vault({id: VAULT_ID})});

})()