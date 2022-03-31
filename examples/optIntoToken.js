const {Account} = require('..');
const {dotenv} = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const acc = new Account({mnemonic,
    network: 'TestNet'});
  await acc.optIntoToken(TOKEN_ID);
  console.log('opted into token');
})();
