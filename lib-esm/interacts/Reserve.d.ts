import Interact from './Interact';
interface PriceParams {
    price: number;
    tokenId: number;
}
declare class Reserve extends Interact {
    price: number;
    tokenId: number;
    parent: Reserve;
    constructor(params: PriceParams);
    getCollateralPrice(): Promise<number>;
    getToken(): Promise<number>;
}
export = Reserve;
