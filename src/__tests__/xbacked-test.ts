// import { xbacked } from '../index';
import Account from '../__mock__/MockAccount';
import Reserve from '../interacts/Reserve';
import Minter from '../interacts/Minter';
import FeeCollector from '../interacts/FeeCollector';
import Vault from '../Vault';

jest.setTimeout(200000000);

// test('walletFback', () => {
//   var a = new Account({});
// });

test('xbacked', () => {
  expect('x').toBe('x');
  let a = 0;
  if (!a) {
    console.log('a is undefined');
  } else {
    console.log('a is defined');
  }
});

//things to test for
/**
 * Different ways to create an account
 * Vault deployment
 * connection by reserve and FeeCollector to vault
 * Vault Price Update
 * Vault Liquidation
 * //Toggling recoverymode
 *
 */

const VAULT_ID = 1;
const MINT_AMOUNT = 2;
const COLLATERAL_AMOUNT = 3;
const COLLATERAL_PRICE = 4;
const TOKEN_ID = 5;

// it("Create Account with mnemonic", async function(){
//   let account = new Account({mnemonic: "obtain exit ritual table pipe project kind junk avoid title reform awake refuse enact prosper police trash dumb trigger shallow wreck fiscal congress above dolphin"});
//   await account.initialiseReachAccount();
//   expect(!account.reachAccount).toBe(false);
// });

// it("Vault Deployment", async function(){
//   const minter = new Minter({collateral: COLLATERAL_AMOUNT, mintAmount: MINT_AMOUNT});
//     const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch",
//        interact: minter,});
//     let vault = await acc.deployVault();
//     expect(vault.id).toBe(VAULT_ID);
// });

// it("Connect reserve to vault", async function(){
//   const reserve = new Reserve({price: COLLATERAL_PRICE, tokenId: TOKEN_ID});
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch",
//   interact: reserve});
//   let vault = await acc.connectToVault({vault: new Vault({id: VAULT_ID})});
//   expect(vault.id).toBe(VAULT_ID);
// });

// it("Connect Feecollector to vault", async function(){
//   const feeCollector = new FeeCollector();
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch",
//   interact: feeCollector});
//   let vault = await acc.connectToVault({vault: new Vault({id: VAULT_ID})});
//   expect(vault.id).toBe(VAULT_ID);
// });

// it("Oracle update price", async function(){
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isPriceUpdated = await acc.updatePrice({price: COLLATERAL_PRICE, vault: new Vault({id: VAULT_ID})});
//   expect(isPriceUpdated).toBe(true);
// });

// it("Liquidator Liquidate Vault", async function(){
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isLiquidated = await acc.liquidateVault({vault: new Vault({id: VAULT_ID})});
//   expect(isLiquidated).toBe(true);
// });

// it("Recovery Toggler toggles recovery mode", async function(){
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isRecoveryModeChanged = await acc.toggleRecoveryMode({vault: new Vault({id: VAULT_ID}), mode: true});
//   expect(isRecoveryModeChanged).toBe(true);
// });

// it("Redeemer redeems vault", async function(){
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isVaultRedeemed = await acc.redeemVault({vault: new Vault({id: VAULT_ID}), amount: 1});
//   expect(isVaultRedeemed).toBe(true);
// });

// it("Minter returns vault debt", async function(){
//   const acc = new Account({mnemonic:  "lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch"});
//   const isVaultDebtReturned = await acc.returnVaultDebt({amount: MINT_AMOUNT, vault: new Vault({id: VAULT_ID})});
//   expect(isVaultDebtReturned).toBe(true);
// });

it('Minter redeems vault', async function () {
  const acc = new Account({
    mnemonic:
      'lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch',
  });
  const isCollateralWithdrawn = await acc.withdrawCollateral({
    amount: MINT_AMOUNT,
    vault: new Vault({ id: VAULT_ID }),
  });
  expect(isCollateralWithdrawn).toBe(true);
});
