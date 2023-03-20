import { Vault } from './Vault';
import { Account } from './Account';
import { AccountInterface, UserVaultReturnParams, VaultReturnParams, AdminProperties } from './interfaces';
export declare class VaultClient extends Account {
    backend: any;
    constructor(params: AccountInterface);
    /**
     *
     * @param params Contains keys address, debtAmount, vault, dripInterest, minimumPrice allowed for this transaction
     * and maximumPrice allowed for this transaction. Include dripInterest if you would like the vault debt to be updated before liquidation
     * @returns A boolean indicating if the vault was liquidated or not
     */
    liquidateVault(params: {
        address: string;
        debtAmount: number;
        vault: Vault;
        dripInterest: false;
        minimumPrice: number;
        maximumPrice: number;
    }): Promise<boolean>;
    /**
     * Attempt to redeem some of the Vault asset against a redeemable vault, to
     * receive vault collateral.
     * @param params Contains the amount of xUSD to redeem, the vault to redeem it from, minimumPrice
     * that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating success of call.
     */
    redeemVault(params: {
        amountToRedeem: number;
        vault: Vault;
        minimumPrice: number;
        maximumPrice: number;
        targetVault: string;
    }): Promise<boolean>;
    /**
     * Propose the address of a vault that could be redeemable, to qualify the
     * vault must be 'less healthy' than any of the other proposed vaults, or
     * there must be a free slot.
     * @param params Address of vault to propose, and target vault contract.
     * @returns A boolean indicating success of call.
     */
    proposeVaultForRedemption(params: {
        address: string;
        vault: Vault;
    }): Promise<boolean>;
    /**
     *
     * @param params Contains the new price and the vault whose price should be updated
     * @returns A boolean indicating if the price was successfully updated or not
     */
    updatePrice(params: {
        price: number;
        vault: Vault;
    }): Promise<boolean>;
    /**
     *
     * @param params Contains the amount of xUsd tokens to be minted, the vault in which the token should be minted,
     * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the xUsd tokens were successfully minted or not
     */
    mintToken(params: {
        amount: number;
        vault: Vault;
        minimumPrice: number;
        maximumPrice: number;
    }): Promise<boolean>;
    /**
     *
     * @param params Contains the amount of tokens to be deposited as collateral as well as the vault
     * @returns A boolean indicating if the collateral was deposited successfully
     */
    depositCollateral(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    /**
     *
     * @param params Contains amount of collateral to be withdrawn, the vault they should be withdrawn from,
     * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the collaterals were successfully withdrawn or not
     */
    withdrawCollateral(params: {
        amount: number;
        vault: Vault;
        minimumPrice: number;
        maximumPrice: number;
    }): Promise<boolean>;
    /**
     *
     * @param params An object with key amount signifying the amount of debt tokens
     *  to return, key vault indicating the Contract and key close indicating if the vault should be closed
     * @returns A boolean indicating if the vault debt was returned or not
     */
    returnVaultDebt(params: {
        amount: number;
        vault: Vault;
        close?: boolean;
        address: string;
    }): Promise<boolean>;
    /**
     * Used to get the state of the contract
     * @param params An object with key vault that indicates the contract whose state is to be retrieved
     * @returns The state of the vault of type [[VaultReturnParams]]
     */
    getVaultState(params: {
        vault: Vault;
    }): Promise<VaultReturnParams>;
    /**
     * Used to create a vault in the contract
     * @param params Contains keys collateral that indicates the amount of collateral that will be used to create the vault,
     * mintAmount that indicates the amount of xusd tokens to be minted, vault that indicates the contract we are
     * communicating with, minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the vault was created or not
     */
    createVault(params: {
        collateral: number;
        mintAmount: number;
        vault: Vault;
        minimumPrice: number;
        maximumPrice: number;
    }): Promise<boolean>;
    /**
     * Used by an account to collect fees from the contract
     * @param params Contains key vault which indicates the contract this function should interact with
     * @returns A boolean indicating of fees were collected or not
     */
    collectFees(params: {
        vault: Vault;
    }): Promise<boolean>;
    /**
     * Will trigger interest to accrue on a specific user vault
     * @param params Contains address of vault to accrue interest for. Also includes vault which indicates the contract this function should interact with.
     * @returns A boolean indicating of fees were collected or not
     */
    dripInterest(params: {
        address: string;
        vault: Vault;
    }): Promise<boolean>;
    /**
     *
     * @param params Contains key address which indicates the vault we want to retrieve the info of as well as key vault that indicates the contract we want to interact with
     * @returns the information for the specified vault
     */
    getUserInfo(params: {
        address: string;
        vault: Vault;
    }): Promise<UserVaultReturnParams>;
    /**
     * Subscribes to all vault events and calls the provided callbacks when the event is fired
     * @param params An object that contains key vaultId, key createCallback and key transactionCallback
     */
    subscribeToEvents(params: {
        /** @property a uint that uniquely identifies the contract */
        vaultId: number;
        /** @property callback that is called when a vault is created, it is called with the address that created the vault as well as its user vault state */
        createCallback: (address: string, state: UserVaultReturnParams) => void;
        /** @property callback that is called when a transaction is made in any vault in the contract, it is called  with the address that made the transaction as well as its uservault state  */
        transactionCallback: (address: string, state: UserVaultReturnParams) => void;
        updatePriceCallback: (address: string, newPrice: number) => void;
    }): Promise<void>;
    /**
     * Used to relplenish the supply on the treasury address
     * @param params An object that contains the supply amount and the target [[Vault]].
     * @returns A boolean indicating if the supply was replenished or not
     */
    replenishSupply(params: {
        supplyAmt: number;
        vault: Vault;
    }): Promise<boolean>;
    /**
     * Used to set the admin properties of a vault
     * @param params An object that contains an [[AdminProperties]] object and the target [[Vault]].
     * @returns A boolean indicating if the properties were set or not
     */
    setAdminProperties(params: {
        adminProperties: AdminProperties;
        vault: Vault;
    }): Promise<boolean>;
    /**
     * Used to update the admin address of a vault
     * @param params An object that contains an address and the target [[Vault]].
     * @returns A boolean indicating if the address was updated.
     */
    updateAdminAddress(params: {
        address: string;
        vault: Vault;
    }): Promise<boolean>;
}
