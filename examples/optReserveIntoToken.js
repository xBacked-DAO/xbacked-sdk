import pkg from 'xbacked-sdk'
const {Account} = pkg;
 const acc = new Account({mnemonic:  "sniff soap champion basic agree electric silly reject idle decorate transfer calm harbor pretty universe orbit deny just silly enter lunar ball spot abandon ice"});
  acc.optIntoToken(39);
  console.log("opt in successful");