import VaultEvent from './VaultEvent';
/** Representation of the Price Updated Events */
export default class PriceUpdatedEvent extends VaultEvent {
    constructor(round, owner, newPrice) {
        super(round, owner);
        this.newPrice = newPrice;
    }
    /** Allows the instanstiation of the [[PriceUpdatedEvent]] */
    static parseEvent(event, reachStdLib) {
        return new PriceUpdatedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), event.what[1].toNumber());
    }
}
//# sourceMappingURL=PriceUpdatedEvent.js.map