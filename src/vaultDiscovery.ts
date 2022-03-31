import { Account } from './Account';
import { Vault } from './Vault';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import VaultCreatedEvent from './VaultEvents/VaultCreatedEvent';
import VaultClosedEvent from './VaultEvents/VaultClosedEvent';
import VaultTransactionEvent from './VaultEvents/VaultTransactionEvent';

// Compares created vaults with closed vaults and returns only the open vaults
// without duplicate records.

/** Returns the vaults that are open
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
export const getOpenVaults = async (params: {
  vault: Vault;
  account: Account;
  startRound?: number;
  endRound?: number;
  timeout?: number;
}): Promise<string[]> => {
  await params.account.initialiseReachAccount();
  const ctc = params.account.reachAccount.contract(backend, params.vault.id);
  const announcer = ctc.events.Announcer;

  const createdVaultsCount = new Map<string, number>();

  const createdVaults = await getEvents<VaultCreatedEvent>({
    reachStdLib: params.account.reachStdLib,
    reachEvent: announcer.vaultCreated,
    parseEvent: VaultCreatedEvent.parseEvent,
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

  const openVaults: string[] = [];
  createdVaultsCount.forEach((value: number, key: string) => {
    if (value > 0) {
      openVaults.push(key);
    }
  });

  return Promise.resolve(openVaults);
};

/** Returns the vaults that have been created
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
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

/** Returns the vaults that have been closed
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
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
/** Returns all transactions for the given vault
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
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

/** Returns the Vault Event for a specified event
 * @param reachStdLib An instance of the reach standard library
 * @param reachEvent The particular event that the contract is being searched for
 * @param parseEvent The parseEvent function of the reachEvent params
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
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
