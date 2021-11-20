import { xbacked } from '../index';
import Account from '../Account';
import Minter from '../interacts/Minter';
import { EventEmitter } from 'stream';

jest.setTimeout(200000000);

// test('createVault', async() => {
//   const m = new Minter({collateral:5000000, mintAmount:2000000});
//    const acc = new Account({mnemonic:  "join nasty pilot crane when excuse shallow crisp curious monster cram naive potato easily try head cotton mango envelope broken elephant carpet rule able scrub",
//                     interact: m});
//   const retCallBack = () => ([8000000,2000000]);
//   acc.setListener(retCallBack);
//   await acc.deployVault();
//   // console.log(await m.createVault());
// })

test('xbacked', () => {
  expect(xbacked('x')).toBe('x');
});


