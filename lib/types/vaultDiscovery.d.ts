import { Account } from './Account';
import { Vault } from './Vault';
import VaultCreatedEvent from './VaultEvents/VaultCreatedEvent';
import VaultClosedEvent from './VaultEvents/VaultClosedEvent';
import VaultTransactionEvent from './VaultEvents/VaultTransactionEvent';
/** Returns the vaults that are open
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
export declare const getOpenVaults: (params: {
    vault: Vault;
    account: Account;
    f?: ((event: any) => void) | undefined;
    startRound?: number | undefined;
    endRound?: number | undefined;
    timeout?: number | undefined;
    asaVault?: boolean | undefined;
}) => Promise<string[]>;
/** Returns the vaults that have been created
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
export declare const getCreatedVaults: (params: {
    vault: Vault;
    account: Account;
    f?: ((event: any) => void) | undefined;
    startRound?: number | undefined;
    endRound?: number | undefined;
    timeout?: number | undefined;
    asaVault?: boolean | undefined;
}) => Promise<VaultCreatedEvent[]>;
/** Returns the vaults that have been closed
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
export declare const getClosedVaults: (params: {
    vault: Vault;
    account: Account;
    f?: ((event: any) => void) | undefined;
    startRound?: number | undefined;
    endRound?: number | undefined;
    timeout?: number | undefined;
    asaVault?: boolean | undefined;
}) => Promise<VaultClosedEvent[]>;
/** Returns all transactions for the given vault
 * @param vault The contract ID whose vaults will be returned
 * @param account The account that is used to read information from the contract
 * @param f A function (parsedEvent) => void that will be executed each time an event is fetched
 * @param startRound The round to start checking from
 * @param endRound The round to stop searching at
 * @param timeOut Duration after which an iteration to search the current round should time out if a result is not gotten
 */
export declare const getTransactions: (params: {
    vault: Vault;
    account: Account;
    f?: ((event: any) => void) | undefined;
    startRound?: number | undefined;
    endRound?: number | undefined;
    timeout?: number | undefined;
    asaVault?: boolean | undefined;
}) => Promise<VaultTransactionEvent[]>;
