import VaultEvent from './VaultEvent';

export default class VaultClosedEvent extends VaultEvent {
  constructor(round: number, owner: string) {
    super(round, owner);
  }

  static parseEvent(event: any, reachStdLib: any): VaultClosedEvent {
    return new VaultClosedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.addressFromHex(event.what[0]));
  }
}
