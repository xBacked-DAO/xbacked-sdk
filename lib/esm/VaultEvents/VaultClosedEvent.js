import VaultEvent from './VaultEvent';
/** Representation of the Closed Vault Events */
export default class VaultClosedEvent extends VaultEvent {
    constructor(round, owner) {
        super(round, owner);
    }
    /** Allows the instanstiation of the [[VaultClosedEvent]] */
    static parseEvent(event, reachStdLib) {
        return new VaultClosedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]));
    }
}
//# sourceMappingURL=VaultClosedEvent.js.map