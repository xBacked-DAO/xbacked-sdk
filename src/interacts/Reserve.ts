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
    this.price = convertToMicroUnits(params.price);
    this.tokenId = params.tokenId;
    this.getCollateralPrice = this.getCollateralPrice;
    this.getToken = this.getToken;
    this.parent = this;
  }

  async getCollateralPrice(): Promise<number> {
    const price = await new Promise((resolve, reject) => {
      if (this.parent.listeners('getCollateralPrice').length === 0) {
        resolve(this.price);
      }
      this.parent.emit('getCollateralPrice', { resolve });
    });
    if (typeof price === 'number') {
      return price;
    } else {
      return 0;
    }
  }

  async getToken(): Promise<number> {
    return this.tokenId;
  }
}

export = Reserve;
