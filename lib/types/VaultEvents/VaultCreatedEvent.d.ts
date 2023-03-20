import { ReachUserVault } from '../interfaces';
import VaultEvent from './VaultEvent';
/** Representation of the Created Vault Events */
export default class VaultCreatedEvent extends VaultEvent {
    /** @property the current state of the vault */
    vaultState: ReachUserVault;
    constructor(round: number, owner: string, vaulState: ReachUserVault);
    /** Allows the instanstiation of the [[VaultCreatedEvents]] */
    static parseEvent(event: any, reachStdLib: any): VaultCreatedEvent;
}
