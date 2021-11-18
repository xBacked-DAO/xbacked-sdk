import Api from './Api';

class Oracle extends Api {
  constructor() {
    super({ name: 'Oracle' });
  }

  updatePrice(params: { price: number; vault: Vault }): boolean {
    return false;
  }
}
