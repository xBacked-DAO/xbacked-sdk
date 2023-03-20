import { Account } from './Account';
import { VaultReturnParams, ReachUserVault, UserVaultReturnParams, VaultParameters } from './interfaces';
/**
 * The Parameters returned from the staate of a contract
 */
/**
 * An abstraction of an Xusd contract
 */
export declare class Vault {
    /** @property Unique identifier for the contract */
    readonly id: number | undefined;
    backend: any;
    constructor(params: VaultParameters);
    /**
     * Used to get the state of the contract
     * @param params Contains key account of type [[Account]] that will be used to read state from the contract
     * @returns State information of type [[VaultReturnParams]]
     */
    getState(params: {
        account: Account;
    }): Promise<VaultReturnParams>;
    /**
     *
     * @param params Contains keys account that indicates the account that will be used to read the information from the contract and address that indicates the address of the contract to be read from
     * @returns User information of type [[UserVaultReturnParams]]
     */
    getUserInfo(params: {
        account: Account;
        address: string;
    }): Promise<UserVaultReturnParams>;
    /**
     *
     * @param vaultState type of [[UserVaultReturnParams]]
     * @returns type of [[ReachUserVault]]
     */
    static parseUserInfo(vaultState: any): ReachUserVault;
}
