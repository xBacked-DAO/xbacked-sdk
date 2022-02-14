import {Account} from './Account';
import {Vault} from './Vault';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import VaultCreatedEvent from './VaultEvents/VaultCreatedEvent';
import VaultClosedEvent from './VaultEvents/VaultClosedEvent';
import VaultTransactionEvent from './VaultEvents/VaultTransactionEvent';

// Compares created vaults with closed vaults and returns only the open vaults
// without duplicate records.
export const getOpenVaults = async (params: {
  vault: Vault;
  account: Account;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<string[]> => {
  const ctc = params.account.reachAccount.contract(backend, params.vault.id);
  const announcer = ctc.events.Announcer;

  const createdVaultsCount = new Map<string, number>();

  const createdVaults = await getEvents<VaultCreatedEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultCreated,
    parseEvent: VaultCreatedEvent.parseEvent,
    ...params,
  });

  const closedVaults = await getEvents<VaultClosedEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultClosed,
    parseEvent: VaultClosedEvent.parseEvent,
    ...params,
  });

  createdVaults.map((event) => {
    const vaultEvent = createdVaultsCount.get(event.owner);
    if (vaultEvent) {
      createdVaultsCount.set(event.owner, vaultEvent + 1);
    } else {
      createdVaultsCount.set(event.owner, 1);
    }
  });

  closedVaults.map((event) => {
    const vaultEvent = createdVaultsCount.get(event.owner);
    if (vaultEvent) {
      createdVaultsCount.set(event.owner, vaultEvent - 1);
    }
  });

  const openVaults: string[] = [];
  createdVaultsCount.forEach((value: number, key: string) => {
    if (value > 0) {
      openVaults.push(key);
    }
  });

  return Promise.resolve(openVaults);
};

export const getCreatedVaults = async (params: {
  vault: Vault;
  account: Account;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<VaultCreatedEvent[]> => {
  const ctc = params.account.reachAccount.contract(backend, params.vault.id);
  const announcer = ctc.events.Announcer;

  return getEvents<VaultCreatedEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultCreated,
    parseEvent: VaultCreatedEvent.parseEvent,
    ...params,
  });
};

export const getClosedVaults = async (params: {
  vault: Vault;
  account: Account;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<VaultClosedEvent[]> => {
  const ctc = params.account.reachAccount.contract(backend, params.vault.id);
  const announcer = ctc.events.Announcer;

  return getEvents<VaultClosedEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultClosed,
    parseEvent: VaultClosedEvent.parseEvent,
    ...params,
  });
};

export const getTransactions = async (params: {
  vault: Vault;
  account: Account;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<VaultTransactionEvent[]> => {
  const ctc = params.account.reachAccount.contract(backend, params.vault.id);
  const announcer = ctc.events.Announcer;

  return getEvents<VaultTransactionEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultTransaction,
    parseEvent: VaultTransactionEvent.parseEvent,
    ...params,
  });
};

const getEvents = async <T>(params: {
  reachStdLib: any;
  reachEvent: any;
  parseEvent: (event: any, reachStdLib: any) => T;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<T[]> => {
  const startRound: number = params.startRound || 0;
  const endRound: number =
    params.endRound || params.reachStdLib.bigNumberToNumber(await params.reachStdLib.getNetworkTime());
  const timeout: number = params.timeout || 5000;

  const timeoutReachFetch = (ms: number) => {
    return new Promise((resolve, reject) => {
      const timeOut = setTimeout(() => {
        reject();
      }, ms);

      params.reachEvent.next().then((event: any) => {
        clearTimeout(timeOut);
        resolve(event);
      });
    });
  };

  let keepGoing = true;

  // Note: Events always start scanning from the time "0" unless seek
  // or seekNow is used to overwrite this.
  if (startRound > 0) {
    try {
      // Sets the starting point of search for events inside the contract
      // instance. Can only seek future.
      params.reachEvent.seek(params.reachStdLib.bigNumberify(startRound));
    } catch (e) {
      // Seek might fail if round increases during computing.
      // In that case just fallback to the last set value.
    }
  }

  const eventArray: T[] = [];

  // Retrieve events from startRound until endRound or the next event takes longer
  // than MAX_EVENT_TIMEOUT
  while (keepGoing) {
    try {
      const event: any = await timeoutReachFetch(timeout);
      const currentRound = params.reachStdLib.bigNumberToNumber(event.when);
      if (currentRound <= endRound) {
        eventArray.push(params.parseEvent(event, params.reachStdLib));
      } else {
        keepGoing = false;
      }
    } catch (e) {
      // This catches the timeout or any error inside the 'then' block
      if (e) {
        throw e;
      }
      keepGoing = false;
    }
  }
  return eventArray;
};
