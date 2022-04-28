import VaultClient from '../__mock__/MockVaultClient';
import { Vault } from '../Vault';
import { calculateInterestAccrued } from '../utils';
jest.setTimeout(200000000);

beforeAll(() => {
  jest.clearAllMocks();
});

const VAULT_ID = 1;
const MINT_AMOUNT = 2;
const COLLATERAL_PRICE = 4;
const MINIMUM_PRICE = 1;
const MAXIMUM_PRICE = 1;
const account = new VaultClient({
  mnemonic:
    'lens sell urban area teach cash material nephew trumpet square myself group limb sun view sunny update fabric twist repair oval salon kitchen above inch',
});

const bigNumberMock = jest.fn((val) => {
  return {
    toNumber: () => val,
  };
});

account.reachStdLib.newAccountFromMnemonic = jest.fn(account.reachStdLib.newAccountFromMnemonic);
account.reachStdLib.newAccountFromSecret = jest.fn(account.reachStdLib.newAccountFromSecret);
account.reachStdLib.connectAccount = jest.fn(account.reachStdLib.connectAccount);

function clearAccount() {
  account.mnemonic = undefined;
  account.reachAccount = undefined;
  account.secretKey = undefined;
  account.networkAccount = undefined;
}

beforeAll(async () => {
  await account.initialiseReachAccount();
});

it('Create Reach Account', async function () {
  await account.initialiseReachAccount();
  expect(account.reachStdLib.newAccountFromMnemonic).toHaveBeenCalledTimes(1);
  expect(account.reachAccount).toBeDefined();
  let mnemonic = account.mnemonic;
  let reachAccount = account.reachAccount;
  clearAccount();
  let sk = [
    1, 220, 176, 222, 181, 64, 111, 141, 28, 81, 148, 76, 223, 180, 36, 111, 230, 64, 101, 127, 126, 217, 116, 95, 20,
    215, 105, 219, 78, 250, 98, 143, 11, 122, 54, 50, 142, 2, 69, 30, 75, 52, 51, 213, 180, 10, 5, 206, 211, 121, 75,
    92, 53, 135, 141, 7, 207, 239, 149, 169, 31, 132, 0, 221,
  ];
  account.secretKey = sk;
  await account.initialiseReachAccount();
  expect(account.reachStdLib.newAccountFromSecret).toHaveBeenCalledTimes(1);
  clearAccount();
  let networkAccount = {
    addr: 'BN5DMMUOAJCR4SZUGPK3ICQFZ3JXSS24GWDY2B6P56K2SH4EADO6XN56GQ',
    sk: [
      1, 220, 176, 222, 181, 64, 111, 141, 28, 81, 148, 76, 223, 180, 36, 111, 230, 64, 101, 127, 126, 217, 116, 95, 20,
      215, 105, 219, 78, 250, 98, 143, 11, 122, 54, 50, 142, 2, 69, 30, 75, 52, 51, 213, 180, 10, 5, 206, 211, 121, 75,
      92, 53, 135, 141, 7, 207, 239, 149, 169, 31, 132, 0, 221,
    ],
  };
  account.networkAccount = networkAccount;
  account.signer = 'AlgoSigner';
  account.network = 'TestNet';
  account.provider = 'Provider';
  account.reachAccount = null;
  await account.initialiseReachAccount();
  expect(account.reachStdLib.connectAccount).toHaveBeenCalledTimes(3);
  clearAccount();
  const throwFunc = async () => {
    await account.initialiseReachAccount();
  };
  await expect(throwFunc).rejects.toThrow(Error);
  account.mnemonic = mnemonic;
  account.reachAccount = reachAccount;
});

it('Get vault Info', async () => {
  const expectedVaultState = {
    constants: {
      INTEREST_RATE_PER_SECOND: 1,
      LIQUIDATION_COLLATERAL_RATIO: 1,
      MINIMUM_COLLATERAL_RATIO: 1,
      VAULT_INTEREST_RATE: 1,
    },
    hotState: {
      accruedInterest: 1,
      totalVaultDebt: 1,
    },
    coldState: {
      accruedFees: 1,
      collateralPrice: 1,
      deprecated: false,
      redeemableVaults: [],
    govStakersAddress: 'CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44',
    liquidationStakersAddress: 'CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44',
    oracleAddress: 'CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44',
    adminAddress: 'CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44',
    daoAddress: 'CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44',
      proposalTime: 1,
    },
  };
  const vaultState = await account.getVaultState({ vault: new Vault({ id: 10 }) });
  expect(JSON.stringify(vaultState)).toEqual(JSON.stringify(expectedVaultState));
});

it('Get user info', async () => {
  const networkSecs = 10000000;
  account.reachStdLib.getNetworkSecs = jest.fn(async () => bigNumberMock(networkSecs));
  const originalValue = {
    collateral: 100,
    liquidating: false,
    vaultDebt: 40,
    redeemable: false,
    lastAccruedInterestTime: 10000,
    vaultFound: true,
  };
  const userInfo = await account.getUserInfo({ address: ' ', vault: new Vault({ id: VAULT_ID }) });
  const interestAccrued = calculateInterestAccrued(
    networkSecs,
    originalValue.lastAccruedInterestTime,
    originalValue.vaultDebt,
    2000000000,
  );
  originalValue.vaultDebt = interestAccrued + originalValue.vaultDebt;
  userInfo.vaultDebt = originalValue.vaultDebt;
  expect(JSON.stringify(userInfo)).toEqual(JSON.stringify(originalValue));
});

it('Oracle update price', async function () {
  const isPriceUpdated = await account.updatePrice({ price: COLLATERAL_PRICE, vault: new Vault({ id: VAULT_ID }) });
  expect(isPriceUpdated).toBe(true);
});

it('Liquidator Liquidate Vault', async function () {
  const isLiquidated = await account.liquidateVault({
    vault: new Vault({ id: VAULT_ID }),
    address: '',
    debtAmount: 10,
    dripInterest: false,
    minimumPrice: MINIMUM_PRICE,
    maximumPrice: MAXIMUM_PRICE,
  });
  expect(isLiquidated).toBe(true);
});

it('Minter returns vault debt', async function () {
  const isVaultDebtReturned = await account.returnVaultDebt({
    amount: MINT_AMOUNT,
    vault: new Vault({ id: VAULT_ID }),
    close: false,
  });
  expect(isVaultDebtReturned).toBe(true);
});

it('Minter withdraws collateral', async function () {
  const isCollateralWithdrawn = await account.withdrawCollateral({
    amount: MINT_AMOUNT,
    vault: new Vault({ id: VAULT_ID }),
    minimumPrice: MINIMUM_PRICE,
    maximumPrice: MAXIMUM_PRICE,
  });
  expect(isCollateralWithdrawn).toBe(true);
});

it('Minter deposit collateral', async function () {
  const isCollateralDeposited = await account.depositCollateral({
    vault: new Vault({ id: VAULT_ID }),
    amount: 1000,
  });
  expect(isCollateralDeposited).toBe(true);
});

it('Minter mints token', async function () {
  const isTokenMinted = await account.mintToken({
    vault: new Vault({ id: VAULT_ID }),
    amount: 500,
    minimumPrice: MINIMUM_PRICE,
    maximumPrice: MAXIMUM_PRICE,
  });
  expect(isTokenMinted).toBe(true);
});

it('Minter creates vault', async function () {
  const isVaultCreated = await account.createVault({
    vault: new Vault({ id: VAULT_ID }),
    collateral: 1000,
    mintAmount: 500,
    minimumPrice: MINIMUM_PRICE,
    maximumPrice: MAXIMUM_PRICE,
  });
  expect(isVaultCreated).toBe(true);
});

it('Liquidator drips interest', async function () {
  const dripInterest = await account.dripInterest({
    vault: new Vault({ id: VAULT_ID }),
    address: '',
  });
  expect(dripInterest).toBe(true);
});
