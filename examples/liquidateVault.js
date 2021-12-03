import pkg from 'xbacked-sdk'

(async() =>{
    const {Account, Vault} = pkg;
    const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
    const isLiquidated = await acc.liquidateVault({vault: new Vault({id: 186}), tokenId: 39});
    console.log("isLiquidated",isLiquidated)
})();