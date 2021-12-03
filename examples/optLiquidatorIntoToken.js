import pkg from 'xbacked-sdk'
(async() => {
  const {Account, Minter} = pkg;
  const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
  await acc.optIntoToken(39);
  console.log("opted into token");
})()
