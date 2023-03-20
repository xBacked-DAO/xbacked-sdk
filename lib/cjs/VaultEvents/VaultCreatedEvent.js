"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vault_1 = require("../Vault");
const VaultEvent_1 = __importDefault(require("./VaultEvent"));
/** Representation of the Created Vault Events */
class VaultCreatedEvent extends VaultEvent_1.default {
    constructor(round, owner, vaulState) {
        super(round, owner);
        this.vaultState = vaulState;
    }
    /** Allows the instanstiation of the [[VaultCreatedEvents]] */
    static parseEvent(event, reachStdLib) {
        return new VaultCreatedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), Vault_1.Vault.parseUserInfo(event.what[1]));
    }
}
exports.default = VaultCreatedEvent;
//# sourceMappingURL=VaultCreatedEvent.js.map