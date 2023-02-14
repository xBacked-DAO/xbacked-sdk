"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = exports.getClosedVaults = exports.getCreatedVaults = exports.getOpenVaults = void 0;
const xbacked_contracts_1 = require("@xbacked-dao/xbacked-contracts");
const VaultCreatedEvent_1 = __importDefault(require("./VaultEvents/VaultCreatedEvent"));
const VaultClosedEvent_1 = __importDefault(require("./VaultEvents/VaultClosedEvent"));
const VaultTransactionEvent_1 = __importDefault(require("./VaultEvents/VaultTransactionEvent"));
// Compares created vaults with closed vaults and returns only the open vaults
// without duplicate records.
/** Returns the vaults that are open
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
const getOpenVaults = (params) => __awaiter(void 0, void 0, void 0, function* () {
    yield params.account.initialiseReachAccount();
    const ctc = params.account.reachAccount.contract(params.asaVault ? xbacked_contracts_1.vaultAsa : xbacked_contracts_1.vault, params.vault.id);
    const announcer = ctc.events.Announcer;
    const createdVaultsCount = new Map();
    const createdVaults = yield getEvents(Object.assign({ reachStdLib: params.account.reachStdLib, reachEvent: announcer.vaultCreated, parseEvent: VaultCreatedEvent_1.default.parseEvent }, params));
    createdVaults.map((event) => {
        const vaultEvent = createdVaultsCount.get(event.owner);
        if (vaultEvent) {
            createdVaultsCount.set(event.owner, vaultEvent + 1);
        }
        else {
            createdVaultsCount.set(event.owner, 1);
        }
    });
    const openVaults = [];
    createdVaultsCount.forEach((value, key) => {
        if (value > 0) {
            openVaults.push(key);
        }
    });
    return Promise.resolve(openVaults);
});
exports.getOpenVaults = getOpenVaults;
/** Returns the vaults that have been created
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
const getCreatedVaults = (params) => __awaiter(void 0, void 0, void 0, function* () {
    yield params.account.initialiseReachAccount();
    const ctc = params.account.reachAccount.contract(params.asaVault ? xbacked_contracts_1.vaultAsa : xbacked_contracts_1.vault, params.vault.id);
    const announcer = ctc.events.Announcer;
    return getEvents(Object.assign({ reachStdLib: params.account.reachStdLib, reachEvent: announcer.vaultCreated, parseEvent: VaultCreatedEvent_1.default.parseEvent }, params));
});
exports.getCreatedVaults = getCreatedVaults;
/** Returns the vaults that have been closed
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
const getClosedVaults = (params) => __awaiter(void 0, void 0, void 0, function* () {
    yield params.account.initialiseReachAccount();
    const ctc = params.account.reachAccount.contract(params.asaVault ? xbacked_contracts_1.vaultAsa : xbacked_contracts_1.vault, params.vault.id);
    const announcer = ctc.events.Announcer;
    return getEvents(Object.assign({ reachStdLib: params.account.reachStdLib, reachEvent: announcer.vaultClosed, parseEvent: VaultClosedEvent_1.default.parseEvent }, params));
});
exports.getClosedVaults = getClosedVaults;
/** Returns all transactions for the given vault
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param f A function (parsedEvent) => void that will be executed each time an event is fetched
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
const getTransactions = (params) => __awaiter(void 0, void 0, void 0, function* () {
    yield params.account.initialiseReachAccount();
    const ctc = params.account.reachAccount.contract(params.asaVault ? xbacked_contracts_1.vaultAsa : xbacked_contracts_1.vault, params.vault.id);
    const announcer = ctc.events.Announcer;
    return getEvents(Object.assign({ reachStdLib: params.account.reachStdLib, reachEvent: announcer.vaultTransaction, parseEvent: VaultTransactionEvent_1.default.parseEvent }, params));
});
exports.getTransactions = getTransactions;
/** Returns the Vault Event for a specified event
 * @param reachStdLib An instance of the reach standard library
 * @param reachEvent The particular event that the contract is being searched for
 * @param parseEvent The parseEvent function of the reachEvent params
 * @param f A function (parsedEvent) => void that will be executed each time an event is fetched
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
const getEvents = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const startRound = params.startRound || 0;
    const endRound = params.endRound || params.reachStdLib.bigNumberToNumber(yield params.reachStdLib.getNetworkTime());
    const timeout = params.timeout || 5000;
    const timeoutReachFetch = (ms) => {
        return new Promise((resolve, reject) => {
            const timeOut = setTimeout(() => {
                reject();
            }, ms);
            params.reachEvent.next().then((event) => {
                clearTimeout(timeOut);
                resolve(event);
            });
        });
    };
    let keepGoing = true;
    // Note: Events always start scanning from the time "0" unless seek
    // or seekNow is used to overwrite this.
    if (startRound > 0) {
        try {
            // Sets the starting point of search for events inside the contract
            // instance. Can only seek future.
            params.reachEvent.seek(params.reachStdLib.bigNumberify(startRound));
        }
        catch (e) {
            // Seek might fail if round increases during computing.
            // In that case just fallback to the last set value.
        }
    }
    const eventArray = [];
    // Retrieve events from startRound until endRound or the next event takes longer
    // than MAX_EVENT_TIMEOUT
    while (keepGoing) {
        try {
            const event = yield timeoutReachFetch(timeout);
            const currentRound = params.reachStdLib.bigNumberToNumber(event.when);
            if (currentRound <= endRound) {
                eventArray.push(params.parseEvent(event, params.reachStdLib));
                if (params.f) {
                    params.f(params.parseEvent(event, params.reachStdLib));
                }
            }
            else {
                keepGoing = false;
            }
        }
        catch (e) {
            // This catches the timeout or any error inside the 'then' block
            if (e) {
                throw e;
            }
            keepGoing = false;
        }
    }
    return eventArray;
});
//# sourceMappingURL=vaultDiscovery.js.map