"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VaultEvent_1 = __importDefault(require("./VaultEvent"));
/** Representation of the Price Updated Events */
class PriceUpdatedEvent extends VaultEvent_1.default {
    constructor(round, owner, newPrice) {
        super(round, owner);
        this.newPrice = newPrice;
    }
    /** Allows the instanstiation of the [[PriceUpdatedEvent]] */
    static parseEvent(event, reachStdLib) {
        return new PriceUpdatedEvent(reachStdLib.bigNumberToNumber(event.when), reachStdLib.formatAddress(event.what[0]), event.what[1].toNumber());
    }
}
exports.default = PriceUpdatedEvent;
//# sourceMappingURL=PriceUpdatedEvent.js.map