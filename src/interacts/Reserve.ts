import { convertToMicroUnits } from '../utils';
import Interact from './Interact';

interface PriceParams {
  price: number;
  tokenId: number;
}
class Reserve extends Interact {
  price: number;
  tokenId: number;
  parent: Reserve;

  constructor(params: PriceParams) {
    super({ name: 'Reserve' });
    this.price = params.price;
    this.tokenId = params.tokenId;
    this.parent = this;
  }

  async getCollateralPrice(): Promise<number> {
    const price = await new Promise((resolve) => {
      if (this.parent.listeners('getCollateralPrice').length === 0) {
        resolve(this.price);
      }
      this.parent.emit('getCollateralPrice', { resolve });
    });
    if (typeof price === 'number') {
      return convertToMicroUnits(price);
    } else {
      return 0;
    }
  }

  async getToken(): Promise<number> {
    return this.tokenId;
  }
}

export default Reserve;
