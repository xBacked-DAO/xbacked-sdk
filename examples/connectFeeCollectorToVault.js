import pkg from 'xbacked-sdk';
(async () => {
  const {FeeCollector, Account} = pkg;
  const feeCollector = new FeeCollector();
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet', interact: feeCollector});
  await acc.connectToVault({vault: new Vault({id: 186})});
  console.log('opt in successful');
})();
