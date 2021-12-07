import pkg from 'xbacked-sdk';
const {Account, Minter} = pkg;
const minter = new Minter({collateral: 5, mintAmount: 2});
const acc = new Account({mnemonic: '', interact: minter});
const retCallBack = async (initialCollateralPrice) => {
  return ([8, 2]);
};
acc.addListener('appId', (params) => {
  console.log(params);
});
acc.addListener('createVault', retCallBack);
acc.deployVault();
