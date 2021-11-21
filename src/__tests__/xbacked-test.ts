// import { xbacked } from '../index';
import Account from '../Account';
import Minter from '../interacts/Minter';
import Vault from '../Vault';

jest.setTimeout(200000000);

// test('createVault', async() => {
//   const m = new Minter({collateral:5000000, mintAmount:2000000});

//  console.log(acc.reachAccount, "reachascc");
// await  acc.optIntoToken(130);
// const retCallBack = (initialCollateralPrice: number) => {
// console.log(initialCollateralPrice);
// return ([8000000,2000000]);}
// acc.addListener("createVault", retCallBack);
// acc.addListener("appId", (params: any) => { console.log(params)})
// acc.addListener("signalDone", (params: any) => { console.log(params)})
// await acc.deployVault();
// console.log(await m.createVault());
// });

test('xbacked', () => {
  expect('x').toBe('x');
});
