import Api from './Api';

class Liquidator extends Api {
  constructor() {
    super({ name: 'Liquidtor' });
  }

  liquidateVault(params: { vault: Vault }): boolean {
    return false;
  }
}
