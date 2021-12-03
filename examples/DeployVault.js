import pkg from 'xbacked-sdk'
// (async() => {
  const {Account, Minter} = pkg;
  const m = new Minter({collateral:5000000, mintAmount:2000000});
  const acc = new Account({mnemonic:   "obtain exit ritual table pipe project kind junk avoid title reform awake refuse enact prosper police trash dumb trigger shallow wreck fiscal congress above dolphin",
                      interact: m});
  const retCallBack = async (initialCollateralPrice) => {
    console.log(initialCollateralPrice.toNumber());
    return ([8000000,2000000]);}
  acc.addListener("appId", (params) => { console.log(params)})
  acc.addListener("createVault", retCallBack);
  acc.deployVault();
// })();


//   await acc.deployVault();