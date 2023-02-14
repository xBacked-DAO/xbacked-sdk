"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vault_1 = require("../Vault");
const VaultEvent_1 = __importDefault(require("./VaultEvent"));
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
class VaultTransactionEvent extends VaultEvent_1.default {
    constructor(round, owner, type, vaulState) {
        super(round, owner);
        this.type = type;
        this.vaultState = vaulState;
    }
    /** Allows the instanstiation of the [[VaultTransactionEvent]] */
    static parseEvent(event, reachStdLib) {
        return new VaultTransactionEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), TransactionType[reachStdLib.bigNumberToNumber(event.what[1])], Vault_1.Vault.parseUserInfo(event.what[2]));
    }
}
exports.default = VaultTransactionEvent;
//# sourceMappingURL=VaultTransactionEvent.js.map