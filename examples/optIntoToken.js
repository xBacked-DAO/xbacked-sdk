const {Account} = require('..');
const dotenv = require('dotenv');
dotenv.config();
(async () => {
  const mnemonic = process.env.MNEMONIC;
  const acc = new Account({mnemonic,
    network: 'TestNet'});
  
  console.log(await acc.getAddress());
  await acc.optIntoToken(process.env.STABLE_COIN);
  console.log('opted into token');
})();
