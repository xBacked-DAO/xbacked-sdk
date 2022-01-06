import { Account, Minter } from '@xbacked-dao/xbacked-sdk';

const minter = new Minter({ collateral: 5, mintAmount: 2 });
const acc = new Account({
  signer: 'MyAlgoConnect',
  network: 'TestNet',
  interact: minter,
});
const retCallBack = async (initialCollateralPrice: any) => {
  return [8, 2];
};
acc.addListener('appId', (params: any) => {
  console.log(params);
});
acc.addListener('createVault', retCallBack);
acc.deployVault();