import Interact from './Interact';
interface CreateVaultParams {
    collateral: number;
    mintAmount: number;
}
declare class Minter extends Interact {
    params: CreateVaultParams;
    parent: Minter;
    constructor(params: CreateVaultParams);
    createVault(initialCollateralPrice: any, stableCoin: any): Promise<number[]>;
    signalDone(SIGNAL_MINTER_FINISHED: number): Promise<void>;
}
export = Minter;
