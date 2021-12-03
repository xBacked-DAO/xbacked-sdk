import pkg from 'xbacked-sdk'

(async() =>{
    const {Account, Vault} = pkg;
    const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
    const isRecoveryModeChanged = await acc.toggleRecoveryMode({vault: new Vault({id: 186}), mode: true});
    console.log("isRecoveryModeChanged",isRecoveryModeChanged)
    
})();