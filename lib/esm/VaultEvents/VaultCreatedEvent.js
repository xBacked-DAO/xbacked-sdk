import { Vault } from '../Vault';
import VaultEvent from './VaultEvent';
/** Representation of the Created Vault Events */
export default class VaultCreatedEvent extends VaultEvent {
    constructor(round, owner, vaulState) {
        super(round, owner);
        this.vaultState = vaulState;
    }
    /** Allows the instanstiation of the [[VaultCreatedEvents]] */
    static parseEvent(event, reachStdLib) {
        return new VaultCreatedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), Vault.parseUserInfo(event.what[1]));
    }
}
//# sourceMappingURL=VaultCreatedEvent.js.map