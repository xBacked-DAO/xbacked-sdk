import { xbacked } from '../index';
import Account from '../__mock__/MockAccount';
import Reserve from '../interacts/Reserve';
import Minter from '../interacts/Minter';
import FeeCollector from '../interacts/FeeCollector';
import Vault from '../Vault';

import { xbacked } from '../index';



jest.setTimeout(200000000);

beforeAll(() => {
  jest.clearAllMocks();
});

const VAULT_ID = 1;
const MINT_AMOUNT = 2;
const COLLATERAL_AMOUNT = 3;
const COLLATERAL_PRICE = 4;
const TOKEN_ID = 5;
const account = new Account({
  mnemonic:
    'lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch',
});
it('Create Account with mnemonic', async function () {
  await account.initialiseReachAccount();
  expect(account.reachAccount).toBeDefined();
});

it('Vault Deployment', async function () {
  const minter = new Minter({ collateral: COLLATERAL_AMOUNT, mintAmount: MINT_AMOUNT });
  account.interact = minter;
  let vault = await account.deployVault();
  expect(vault.id).toBe(VAULT_ID);
});

it('Connect reserve to vault', async function () {
  const reserve = new Reserve({ price: COLLATERAL_PRICE, tokenId: TOKEN_ID });
  account.interact = reserve;
  let vault = await account.connectToVault({ vault: new Vault({ id: VAULT_ID }) });
  expect(vault.id).toBe(VAULT_ID);
});

it('Connect Feecollector to vault', async function () {
  const feeCollector = new FeeCollector();
  account.interact = feeCollector;
  let vault = await account.connectToVault({ vault: new Vault({ id: VAULT_ID }) });
  expect(vault.id).toBe(VAULT_ID);
});

it('Oracle update price', async function () {
  const isPriceUpdated = await account.updatePrice({ price: COLLATERAL_PRICE, vault: new Vault({ id: VAULT_ID }) });
  expect(isPriceUpdated).toBe(true);
});

it('Liquidator Liquidate Vault', async function () {
  const isLiquidated = await account.liquidateVault({ vault: new Vault({ id: VAULT_ID }) });
  expect(isLiquidated).toBe(true);
});

it('Recovery Toggler toggles recovery mode', async function () {
  const isRecoveryModeChanged = await account.toggleRecoveryMode({ vault: new Vault({ id: VAULT_ID }), mode: true });
  expect(isRecoveryModeChanged).toBe(true);
});

it('Redeemer redeems vault', async function () {
  const isVaultRedeemed = await account.redeemVault({ vault: new Vault({ id: VAULT_ID }), amount: 1 });
  expect(isVaultRedeemed).toBe(true);
});

it('Minter returns vault debt', async function () {
  const isVaultDebtReturned = await account.returnVaultDebt({
    amount: MINT_AMOUNT,
    vault: new Vault({ id: VAULT_ID }),
  });
  expect(isVaultDebtReturned).toBe(true);
});

it('Minter redeems vault', async function () {
  const isCollateralWithdrawn = await account.withdrawCollateral({
    amount: MINT_AMOUNT,
    vault: new Vault({ id: VAULT_ID }),
  });
  expect(isCollateralWithdrawn).toBe(true);
});

