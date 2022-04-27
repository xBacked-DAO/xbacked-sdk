import VaultEvent from './VaultEvent';

/** Representation of the Price Updated Events */
export default class PriceUpdatedEvent extends VaultEvent {
  newPrice: number;
  constructor(round: number, owner: string, newPrice: number) {
    super(round, owner);
    this.newPrice = newPrice;
  }
  /** Allows the instanstiation of the [[PriceUpdatedEvent]] */
  static parseEvent(event: any, reachStdLib: any): PriceUpdatedEvent {
    return new PriceUpdatedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), event.what[1].toNumber());
  }
}
