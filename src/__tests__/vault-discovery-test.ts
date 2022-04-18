import { getOpenVaults, getCreatedVaults, getClosedVaults, getTransactions } from '../vaultDiscovery';
import Account from '../__mock__/MockAccount';
import { Vault } from '../Vault';

jest.setTimeout(200000000);

const vault = new Vault({ id: 1 });
const account = new Account({});

account.reachAccount = {};
account.reachStdLib.getNetworkTime = jest.fn(() => 100);

const toNumberMock = {
  toNumber: jest.fn((x) => 0),
};

describe('Gets open vaults', () => {
  beforeEach(() => {
    const announcerMock = {
      vaultCreated: {
        seek: jest.fn((x) => null),
        next: jest.fn(),
      },
      vaultClosed: {
        seek: jest.fn((x) => null),
        next: jest.fn(),
      },
    };
    announcerMock.vaultCreated.next.mockResolvedValueOnce({
      when: 0,
      what: [
        '0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
        {
          collateralRatio: toNumberMock,
          collateral: toNumberMock,
          liquidating: false,
          vaultDebt: toNumberMock,
          redeemable: false,
          lastAccruedInterestTime: toNumberMock,
        },
      ],
    });
    announcerMock.vaultCreated.next.mockResolvedValueOnce({
      when: 2,
      what: [
        '0x1b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
        {
          collateralRatio: toNumberMock,
          collateral: toNumberMock,
          liquidating: false,
          vaultDebt: toNumberMock,
          redeemable: false,
          lastAccruedInterestTime: toNumberMock,
        },
      ],
    });
    announcerMock.vaultCreated.next.mockResolvedValueOnce(
      new Promise((resolve, reject) => {
        setTimeout(resolve, 100);
      }),
    );
    account.initialiseReachAccount = jest.fn();
    account.reachAccount.contract = jest.fn((x, y) => {
      return {
        events: {
          Announcer: announcerMock,
        },
      };
    });
  });

  it('Checks return only open vaults', async function () {
    const results = await getOpenVaults({ account, vault, timeout: 50 });
    expect(results.length).toBe(2);
  });

  it('Checks return only open vaults whithin interval', async function () {
    const results = await getOpenVaults({ account, vault, endRound: 1, timeout: 50 });
    expect(results.length).toBe(1);
  });
});

describe('Gets vaults created', () => {
  beforeEach(() => {
    const announcerMock = {
      vaultCreated: {
        seek: jest.fn((x) => null),
        next: jest.fn(),
      },
    };
    announcerMock.vaultCreated.next.mockReturnValueOnce(
      Promise.resolve({
        when: 0,
        what: [
          '0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            vaultDebt: toNumberMock,
            redeemable: false,
            lastAccruedInterestTime: toNumberMock,
          },
        ],
      }),
    );
    announcerMock.vaultCreated.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: [
          '0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
            lastAccruedInterestTime: toNumberMock,
          },
        ],
      }),
    );
    announcerMock.vaultCreated.next.mockReturnValueOnce(
      new Promise((resolve, reject) => {
        setTimeout(resolve, 100);
      }),
    );
    account.reachAccount.contract = jest.fn((x, y) => {
      return {
        events: {
          Announcer: announcerMock,
        },
      };
    });
  });

  it('Checks get all results when no interval', async function () {
    const results = await getCreatedVaults({ account, vault, timeout: 50 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await getCreatedVaults({ account, vault, endRound: 1, timeout: 50 });
    expect(results.length).toBe(1);
  });
});

describe('Gets vaults closed', () => {
  beforeEach(() => {
    const announcerMock = {
      vaultClosed: {
        seek: jest.fn((x) => null),
        next: jest.fn(),
      },
    };
    announcerMock.vaultClosed.next.mockReturnValueOnce(
      Promise.resolve({
        when: 0,
        what: ['0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd'],
      }),
    );
    announcerMock.vaultClosed.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: ['0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd'],
      }),
    );
    announcerMock.vaultClosed.next.mockReturnValueOnce(
      new Promise((resolve, reject) => {
        setTimeout(resolve, 100);
      }),
    );
    account.reachAccount.contract = jest.fn((x, y) => {
      return {
        events: {
          Announcer: announcerMock,
        },
      };
    });
  });

  it('Checks get all results when no interval', async function () {
    const results = await getClosedVaults({ account, vault, timeout: 50 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await getClosedVaults({ account, vault, endRound: 1, timeout: 50 });
    expect(results.length).toBe(1);
  });
});

describe('Gets vaults transactions', () => {
  beforeEach(() => {
    const announcerMock = {
      vaultTransaction: {
        seek: jest.fn((x) => null),
        next: jest.fn(),
      },
    };
    announcerMock.vaultTransaction.next.mockReturnValueOnce(
      Promise.resolve({
        when: 0,
        what: [
          '0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
          0,
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
            lastAccruedInterestTime: toNumberMock,
          },
        ],
      }),
    );
    announcerMock.vaultTransaction.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: [
          '0x0b7a36328e02451e4b3433d5b40a05ced3794b5c35878d07cfef95a91f8400dd',
          0,
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
            lastAccruedInterestTime: toNumberMock,
          },
        ],
      }),
    );
    announcerMock.vaultTransaction.next.mockReturnValueOnce(
      new Promise((resolve, reject) => {
        setTimeout(resolve, 100);
      }),
    );
    account.reachAccount.contract = jest.fn((x, y) => {
      return {
        events: {
          Announcer: announcerMock,
        },
      };
    });
  });

  it('Checks get all results when no interval', async function () {
    const results = await getTransactions({ account, vault, timeout: 50 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await getTransactions({ account, vault, endRound: 1, timeout: 50 });
    expect(results.length).toBe(1);
  });
});
