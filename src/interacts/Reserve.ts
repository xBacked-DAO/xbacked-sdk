import { num } from '@reach-sh/stdlib/dist/types/shared_backend';
import Interact from './Interact';

interface PriceParams {
  price: number;
}
class Reserve extends Interact {
  price: number;
  parent: Reserve;
  constructor(params: PriceParams) {
    super({ name: 'Reserve' });
    this.price = params.price;
    this.getCollateralPrice = this.getCollateralPrice;
    this.parent = this;
  }

  async getCollateralPrice(): Promise<number> {
    const price = await new Promise((resolve, reject) => {
      if (this.listeners('getCollateralPrice').length === 0) {
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
}
