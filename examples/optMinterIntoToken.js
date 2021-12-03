import pkg from 'xbacked-sdk'
(async() => {
  const {Account, Minter} = pkg;
  const acc = new Account({mnemonic:  "obtain exit ritual table pipe project kind junk avoid title reform awake refuse enact prosper police trash dumb trigger shallow wreck fiscal congress above dolphin"});
  await acc.optIntoToken(39);
  console.log("opted into token");
})()
