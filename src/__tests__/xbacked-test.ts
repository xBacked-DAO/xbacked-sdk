
import Account from '../__mock__/MockAccount';
import Vault from '../Vault';


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




it('Oracle update price', async function () {
  const isPriceUpdated = await account.updatePrice({ price: COLLATERAL_PRICE, vault: new Vault({ id: VAULT_ID }) });
 expect(isPriceUpdated).toBe(true);
});

it('Liquidator Liquidate Vault', async function () {
  const isLiquidated = await account.liquidateVault({ vault: new Vault({ id: VAULT_ID }), address: "" });
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


