import Account from './Account';
import Vault from './Vault';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import VaultCreatedEvent from './VaultEvents/VaultCreatedEvent';
import VaultClosedEvent from './VaultEvents/VaultClosedEvent';
import VaultTransactionEvent from './VaultEvents/VaultTransactionEvent';

export default class EventFetcher {
  protected vault: Vault;
  protected acc: Account;
  protected announcer: any;

  constructor(params: { vault: Vault; account: Account }) {
    this.vault = params.vault;
    this.acc = params.account;
    const ctc = this.acc.reachAccount.contract(backend, this.vault.id);
    this.announcer = ctc.events.Announcer;
  }

  // Compares created vaults with closed vaults and returns only the open vaults
  // without duplicate records.
  async getOpenVaults(params: {
    startRound?: number;
    endRound?: number;
    timeout?: number;
  }): Promise<string[]> {
    const createdVaultsCount = new Map<string, number>();

    const createdVaults = await this.getEvents<VaultCreatedEvent>({
      reachEvent: this.announcer.vaultCreated,
      parseEvent: VaultCreatedEvent.parseEvent,
      ...params,
    });

    const closedVaults = await this.getEvents({
      reachEvent: this.announcer.vaultClosed,
      parseEvent: VaultClosedEvent.parseEvent,
      ...params
    });

    createdVaults.map((event) => {
      const vaultEvent = createdVaultsCount.get(event.owner);
      if (vaultEvent) {
        createdVaultsCount.set(event.owner, vaultEvent + 1);
      }
      else {
        createdVaultsCount.set(event.owner, 1);
      }
    });

    closedVaults.map((event) => {
      const vaultEvent = createdVaultsCount.get(event.owner);
      if (vaultEvent) {
        createdVaultsCount.set(event.owner, vaultEvent - 1);
      }
    });

    const openVaults:string[] = [];
    createdVaultsCount.forEach((value: number, key: string) => {
      if (value > 0) {
        openVaults.push(key);
      }
    });

    return Promise.resolve(openVaults);
  }

  async getCreatedVaults(params: {
    startRound?: number;
    endRound?: number;
    timeout?: number;
  }): Promise<VaultCreatedEvent[]> {
    return this.getEvents<VaultCreatedEvent>({
      reachEvent: this.announcer.vaultCreated,
      parseEvent: VaultCreatedEvent.parseEvent,
      ...params,
    });
  }

  async getClosedVaults(params: {
    startRound?: number;
    endRound?: number;
    timeout?: number;
  }): Promise<VaultClosedEvent[]> {
    return this.getEvents({
      reachEvent: this.announcer.vaultClosed,
      parseEvent: VaultClosedEvent.parseEvent,
      ...params,
    });
  }

  async getTransactions(params: {
    startRound?: number;
    endRound?: number;
    timeout?: number;
  }): Promise<VaultTransactionEvent[]> {
    return this.getEvents({
      reachEvent: this.announcer.vaultTransaction,
      parseEvent: VaultTransactionEvent.parseEvent,
      ...params,
    });
  }

  protected async getEvents<T>(params: {
    reachEvent: any;
    parseEvent: (event: any, reachStdLib: any) => T;
    startRound?: number;
    endRound?: number;
    timeout?: number;
  }): Promise<T[]> {
    const reachStdLib = this.acc.reachStdLib;

    const startRound: number = params.startRound || 0;
    const endRound: number = params.endRound || reachStdLib.bigNumberToNumber(await reachStdLib.getNetworkTime());
    const timeout: number = params.timeout || 5000;

    const newTimeoutPromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(reject, timeout);
      });
    let keepGoing = true;

    // Note: Events always start scanning from the time "0" unless seek
    // or seekNow is used to overwrite this.
    if (startRound > 0) {
      try {
        // Sets the starting point of search for events inside the contract
        // instance. Can only seek future.
        params.reachEvent.seek(reachStdLib.bigNumberify(startRound));
      } catch (e) {
        // Seek might fail if round increases during computing.
        // In that case just fallback to the last set value.
      }
    }

    const eventArray: T[] = [];

    // Retrieve events from startRound until endRound or the next event takes longer
    // than MAX_EVENT_TIMEOUT
    while (keepGoing) {
      await Promise.race([params.reachEvent.next(), newTimeoutPromise()])
        .then(async (event) => {
          const currentRound = reachStdLib.bigNumberToNumber(event.when);
          if (currentRound <= endRound) {
            eventArray.push(params.parseEvent(event, reachStdLib));
          } else {
            keepGoing = false;
          }
        })
        .catch((e) => {
          // This catches the timeout or any error inside the 'then' block
          if (e) {
            throw e;
          }
          keepGoing = false;
        });
    }
    return eventArray;
  }
}
