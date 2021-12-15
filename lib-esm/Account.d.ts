import Interact from './interacts/Interact';
import Vault from './Vault';
interface AccountInterface {
    mnemonic?: string;
    secretKey?: string;
    signer?: string | 'MyAlgoConnect';
    interact?: Interact;
    network?: 'LocalHost' | 'MainNet' | 'TestNet';
    currentVault?: string;
    provider?: any;
}
declare class Account {
    mnemonic?: string;
    secretKey?: string;
    signer?: string;
    interact?: Interact;
    currentVault?: string;
    reachAccount: any;
    reachStdLib: any;
    network?: 'LocalHost' | 'MainNet' | 'TestNet';
    provider?: any;
    constructor(params: AccountInterface);
    initialiseReachAccount(): Promise<void>;
    deployVault(): Promise<void>;
    connectAsReserveToVault(params: {
        vault: Vault;
    }): Promise<Vault>;
    connectAsFeeCollectorToVault(params: {
        vault: Vault;
    }): Promise<Vault>;
    connectToVault(params: {
        vault: Vault;
    }): Promise<Vault>;
    addListener(name: string, callBack: any): Promise<void>;
    optIntoToken(tokenID: number): Promise<void>;
    liquidateVault(params: {
        vault: Vault;
        tokenId: number;
    }): Promise<boolean>;
    updatePrice(params: {
        price: number;
        vault: Vault;
    }): Promise<boolean>;
    toggleRecoveryMode(params: {
        vault: Vault;
        mode: boolean;
    }): Promise<boolean>;
    mintToken(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    depositToken(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    withdrawCollateral(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    returnVaultDebt(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    redeemVault(params: {
        amount: number;
        vault: Vault;
    }): Promise<boolean>;
    getBalance(params: {
        tokenId: number;
    }): Promise<number>;
    fundFromFaucet(): Promise<boolean>;
    getAddress(): Promise<any>;
}
export = Account;
