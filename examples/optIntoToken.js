import pkg from 'xbacked-sdk';
(async () => {
  const {Account} = pkg;
  const acc = new Account({mnemonic: ''});
  await acc.optIntoToken(TOKEN_ID);
  console.log('opted into token');
})();
