import pkg from 'xbacked-sdk'

(async() =>{
    const {Account, Vault} = pkg;
    const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
    const isPriceUpdated = await acc.updatePrice({price: 0.2 * 1000000,vault: new Vault({id: 151}), tokenId: 39});
    console.log("isPriceUpdated",isPriceUpdated)
})();