import {Account, Minter} from 'xbacked-sdk';
const minter = new Minter({collateral: 5, mintAmount: 2});
const acc = new Account({signer: 'MyAlgoConnect',
  network: 'TestNet', interact: minter});
const retCallBack = async (initialCollateralPrice) => {
  return ([8, 2]);
};
acc.addListener('appId', (params) => {
  console.log(params);
});
acc.addListener('createVault', retCallBack);
acc.deployVault();
