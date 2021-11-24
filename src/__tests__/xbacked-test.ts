// import { xbacked } from '../index';
import Account from '../Account';
import Reserve from '../interacts/Reserve';
import Minter from '../interacts/Minter';
import FeeCollector from '../interacts/FeeCollector';
import Vault from '../Vault';

jest.setTimeout(200000000);

// test('createVault', async() => {
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isLiquidated = await acc.liquidateVault({vault: new Vault({id: 3}), tokenId: 8});
//   console.log("isLiquidated",isLiquidated)
// });

// test("reserveOptIn", async() => {
//   const acc = new Account({mnemonic:  "sniff soap champion basic agree electric silly reject idle decorate transfer calm harbor pretty universe orbit deny just silly enter lunar ball spot abandon ice"});
//   await acc.initialiseReachAccount();
//   if (await acc.reachStdLib.canFundFromFaucet()) {
//     await acc.reachStdLib.fundFromFaucet(acc.reachAccount, acc.reachStdLib.parseCurrency(100));
//     }
//   acc.optIntoToken(8);
//   console.log("opt in successful");

// });

// test("reserveConnect", async() => {
//   const reserve = new Reserve({price: 9})
//   const acc = new Account({mnemonic:  "sniff soap champion basic agree electric silly reject idle decorate transfer calm harbor pretty universe orbit deny just silly enter lunar ball spot abandon ice",
//           interact: reserve});
//   await acc.initialiseReachAccount();
//   acc.addListener("getCollateralPrice", async() => {
//     console.log("Get collateral listener called");
//     return 2000000;
//   })
//   if (await acc.reachStdLib.canFundFromFaucet()) {
//     await acc.reachStdLib.fundFromFaucet(acc.reachAccount, acc.reachStdLib.parseCurrency(100));
//     }
//   await acc.connectAsReserveToVault({vault: new Vault({id: 32})});
//   console.log("connected successful");
// });

// test("FeeCollectorOptin", async() => {
//   const acc = new Account({mnemonic:  "minimum melody hollow balance cheap door gloom script mix violin tenant ceiling field skate fork room gather degree police swap airport stove conduct able dolphin"});
//   await acc.initialiseReachAccount();
//   if (await acc.reachStdLib.canFundFromFaucet()) {
//     await acc.reachStdLib.fundFromFaucet(acc.reachAccount, acc.reachStdLib.parseCurrency(100));
//     }
//   acc.optIntoToken(8);
//   console.log("opt in successful");
// });

// test("FeeCollectorConnect", async() => {
//   const feeCollector = new FeeCollector({name: "FeeCollector"});
//   const acc = new Account({mnemonic:  "minimum melody hollow balance cheap door gloom script mix violin tenant ceiling field skate fork room gather degree police swap airport stove conduct able dolphin",
//         interact: feeCollector});
//   await acc.initialiseReachAccount();
//   if (await acc.reachStdLib.canFundFromFaucet()) {
//     await acc.reachStdLib.fundFromFaucet(acc.reachAccount, acc.reachStdLib.parseCurrency(100));
//     }
//   await acc.connectAsFeeCollectorToVault({vault: new Vault({id: 43})});
//   console.log("opt in successful");
// });

test('xbacked', () => {
  expect('x').toBe('x');
});
