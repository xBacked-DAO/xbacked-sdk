import { ReachUserVault } from '../interfaces';
import VaultEvent from './VaultEvent';
/**
 * Representation of a VaultTransaction event
 */
export default class VaultTransactionEvent extends VaultEvent {
    /** @property The type of transaction */
    type: string;
    /** @property The current state of the vault */
    vaultState: ReachUserVault;
    constructor(round: number, owner: string, type: string, vaulState: ReachUserVault);
    /** Allows the instanstiation of the [[VaultTransactionEvent]] */
    static parseEvent(event: any, reachStdLib: any): VaultTransactionEvent;
}
