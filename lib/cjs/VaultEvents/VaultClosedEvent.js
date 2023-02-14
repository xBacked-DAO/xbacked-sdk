"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VaultEvent_1 = __importDefault(require("./VaultEvent"));
/** Representation of the Closed Vault Events */
class VaultClosedEvent extends VaultEvent_1.default {
    constructor(round, owner) {
        super(round, owner);
    }
    /** Allows the instanstiation of the [[VaultClosedEvent]] */
    static parseEvent(event, reachStdLib) {
        return new VaultClosedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]));
    }
}
exports.default = VaultClosedEvent;
//# sourceMappingURL=VaultClosedEvent.js.map