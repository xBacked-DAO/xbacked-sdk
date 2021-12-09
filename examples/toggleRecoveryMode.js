import pkg from 'xbacked-sdk';
(async () =>{
  const {Account, Vault} = pkg;
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  // eslint-disable-next-line max-len
  const isRecoveryModeChanged = await acc.toggleRecoveryMode({vault: new Vault({id: VAULT_ID}), mode: true});
  console.log('isRecoveryModeChanged', isRecoveryModeChanged);
})();
