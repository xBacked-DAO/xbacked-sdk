import { Vault } from '../Vault';
import VaultEvent from './VaultEvent';
/**
 * The type of transaction for a particular  [[VaultTransactionEvent]]
 */
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["DEPOSIT"] = 0] = "DEPOSIT";
    TransactionType[TransactionType["MINT"] = 1] = "MINT";
    TransactionType[TransactionType["REPAY"] = 2] = "REPAY";
    TransactionType[TransactionType["WITHDRAW"] = 3] = "WITHDRAW";
    TransactionType[TransactionType["LIQUIDATE"] = 4] = "LIQUIDATE";
})(TransactionType || (TransactionType = {}));
/**
 * Representation of a VaultTransaction event
 */
export default class VaultTransactionEvent extends VaultEvent {
    constructor(round, owner, type, vaulState) {
        super(round, owner);
        this.type = type;
        this.vaultState = vaulState;
    }
    /** Allows the instanstiation of the [[VaultTransactionEvent]] */
    static parseEvent(event, reachStdLib) {
        return new VaultTransactionEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), TransactionType[reachStdLib.bigNumberToNumber(event.what[1])], Vault.parseUserInfo(event.what[2]));
    }
}
//# sourceMappingURL=VaultTransactionEvent.js.map