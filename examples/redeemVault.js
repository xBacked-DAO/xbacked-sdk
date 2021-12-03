import pkg from 'xbacked-sdk'

(async() =>{
    const {Account, Vault} = pkg;
    const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
    const isVaultRedeemed = await acc.redeemVault({vault: new Vault({id: 186}), amount: 1000000});
    console.log("isVaultRedeemed",isVaultRedeemed)   

})();ß