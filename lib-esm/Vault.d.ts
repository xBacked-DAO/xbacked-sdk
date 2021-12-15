import Account from './Account';
interface VaultReturnParams {
    collateralRatio: number;
    collateral: number;
    vaultDebt: number;
    healthFactor: number;
    collateralValue: number;
}
interface VaultParameters {
    id: number;
    acc?: any;
}
declare class Vault {
    readonly id: number | undefined;
    acc?: any;
    constructor(params: VaultParameters);
    getState(params: {
        account: Account;
    }): Promise<VaultReturnParams>;
}
export = Vault;
