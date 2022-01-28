import EventFetcher from '../__mock__/MockFetcher';
import Account from '../__mock__/MockAccount';
import Vault from '../Vault';

const vault = new Vault({ id: 1 });
const account = new Account({});

account.reachAccount = {};
account.reachAccount.contract = jest.fn((x, y) => {
  return {
    events: {
      Announcer: {
        vaultCreated: null,
        vaultClosed: null,
        vaultTransaction: null,
      },
    },
  };
});
account.reachStdLib.getNetworkTime = jest.fn(() => 100);

const toNumberMock = {
  toNumber: jest.fn((x) => 0),
};

const eventFetcher = new EventFetcher({ vault, account });

it('Creates the fetcher', async function () {
  expect(account.reachAccount.contract).toBeCalled();
  expect(eventFetcher).toBeDefined();
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
          'address',
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            vaultDebt: toNumberMock,
            redeemable: false,
          },
        ],
      }),
    );
    announcerMock.vaultCreated.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: [
          'address',
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
          },
        ],
      }),
    );
    announcerMock.vaultCreated.next.mockReturnValueOnce(
      new Promise((resolve) => {
        setTimeout(resolve, 200);
      }),
    );
    eventFetcher.setAnnouncer(announcerMock);
  });

  it('Checks get all results when no interval', async function () {
    const results = await eventFetcher.getCreatedVaults({ timeout: 100 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await eventFetcher.getCreatedVaults({ endRound: 1, timeout: 100 });
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
        what: ['address'],
      }),
    );
    announcerMock.vaultClosed.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: ['address'],
      }),
    );
    announcerMock.vaultClosed.next.mockReturnValueOnce(
      new Promise((resolve) => {
        setTimeout(resolve, 200);
      }),
    );
    eventFetcher.setAnnouncer(announcerMock);
  });

  it('Checks get all results when no interval', async function () {
    const results = await eventFetcher.getClosedVaults({ timeout: 100 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await eventFetcher.getClosedVaults({ endRound: 1, timeout: 100 });
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
          'address',
          0,
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
          },
        ],
      }),
    );
    announcerMock.vaultTransaction.next.mockReturnValueOnce(
      Promise.resolve({
        when: 2,
        what: [
          'address',
          0,
          {
            collateralRatio: toNumberMock,
            collateral: toNumberMock,
            liquidating: false,
            vaultDebt: toNumberMock,
            redeemable: false,
          },
        ],
      }),
    );
    announcerMock.vaultTransaction.next.mockReturnValueOnce(
      new Promise((resolve) => {
        setTimeout(resolve, 200);
      }),
    );
    eventFetcher.setAnnouncer(announcerMock);
  });

  it('Checks get all results when no interval', async function () {
    const results = await eventFetcher.getTransactions({ timeout: 100 });
    expect(results.length).toBe(2);
  });

  it('Checks ending round ignoring last', async function () {
    const results = await eventFetcher.getTransactions({ endRound: 1, timeout: 100 });
    expect(results.length).toBe(1);
  });
});
