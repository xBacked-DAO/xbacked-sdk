import VaultEvent from './VaultEvent';
/** Representation of the Price Updated Events */
export default class PriceUpdatedEvent extends VaultEvent {
    newPrice: number;
    constructor(round: number, owner: string, newPrice: number);
    /** Allows the instanstiation of the [[PriceUpdatedEvent]] */
    static parseEvent(event: any, reachStdLib: any): PriceUpdatedEvent;
}
