import { AccountInterface, AbiInterface } from './interfaces';
/**
 * An abstraction of an account on the Algorand
 */
export declare class Account {
    /** @property An optional string of 25 words seperated by spaces that can be used to recover an algorand account */
    mnemonic?: string;
    /** @property An optional array of numbers that can be used to recover an algorand account */
    secretKey?: number[];
    /** @propertyAn optional name of a signer or wallet provider that can be used to sign transactions, should be set along with the provider property. Only required when not using a mnemonic or secretKey */
    signer?: string;
    /** @property An account created from the reach sdk */
    reachAccount: any;
    /** @property An instance of the reach standard library */
    reachStdLib: any;
    /** @property The desired network to connect to, the default value is LocalHost */
    network?: 'LocalHost' | 'MainNet' | 'TestNet';
    /** @property An instance of the provider object for the signer specified */
    provider?: any;
    /** @property providerEnv for indexer */
    providerEnv?: any;
    /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
    networkAccount?: any;
    constructor(params: AccountInterface);
    /**
     * Initialises the reachAccount property
     */
    initialiseReachAccount(): Promise<void>;
    /**
     * Allows an instance of the account class to opt into an Algorand standard Asset
     * @param tokenID The asa ID to opt into
     */
    optIntoToken(tokenID: number): Promise<void>;
    /**
     *
     * @returns A UInt8 array which is the secretKey of this Reach account
     */
    getSecret(): Promise<any>;
    /**
     * Allows you to fund this account from the faucet when on the Reach devnet
     * @returns A boolean indicating if this account was successfully funded or not
     */
    fundFromFaucet(): Promise<boolean>;
    /**
     *
     * @returns The formatted adress of this account
     */
    getAddress(): Promise<any>;
    /**
     * Returns the contract address
     * @param params An object with key vault that indicates the contract whose address is to be retrieved, and the backend to use (see utils.ts for backend options)
     * @returns A formatted address of the specified contract as a string
     */
    getContractAddress(params: {
        contractId: number;
        backend: any;
    }): Promise<string>;
    /**
     *
     * @param params contractId which indicates the contract we want to interact with, and the backend to use (see utils.ts for backend options)
     */
    getContractAbi(params: {
        contractId: number;
        backend: any;
    }): Promise<AbiInterface>;
    /**
     *
     * @param params An object with key tokenId that indicates the ASA id whose balance this function must return, this key's value should be set to zero for the native token balance
     * @returns The balance of the specified tokenId
     */
    getBalance(params: {
        tokenId: number;
    }): Promise<number>;
    /**
     *
     * @param params An object with key tokenId that indicates the ASA id whose balance this function must return, this key's value should be set to zero for the native token balance
     * @returns The balance of the specified tokenId
     */
    getOtherBalance(params: {
        tokenId: number;
        address: string;
    }): Promise<number>;
}
