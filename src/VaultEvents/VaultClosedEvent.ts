import VaultEvent from './VaultEvent';

/** Representation of the Closed Vault Events */
export default class VaultClosedEvent extends VaultEvent {
  constructor(round: number, owner: string) {
    super(round, owner);
  }
  /** Allows the instanstiation of the [[VaultClosedEvent]] */
  static parseEvent(event: any, reachStdLib: any): VaultClosedEvent {
    return new VaultClosedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]));
  }
}
