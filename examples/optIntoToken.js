import {Account}  from 'xbacked-sdk';
(async () => {
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  await acc.optIntoToken(TOKEN_ID);
  console.log('opted into token');
})();
