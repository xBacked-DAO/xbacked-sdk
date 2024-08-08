import { Account } from './Account';
import { VaultReturnParams, ReachUserVault, UserVaultReturnParams, VaultParameters } from './interfaces';
declare type AsaVault = {
    decimals: number;
    z_p_f_vault_asa?: boolean;
    large_cp_vault_asa?: boolean;
    new_asa_vault?: boolean;
};
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
    asaVault?: AsaVault;
    name: string;
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
export {};
