import Interact from './Interact';

interface PriceParams {
  price: number;
}
class Reserve extends Interact {
  constructor() {
    super({ name: 'Reserve' });
  }

  getCollateralPrice(params: PriceParams): PriceParams {
    return params;
  }
}
