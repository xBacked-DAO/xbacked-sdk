import Api from './Api';

class Minter extends Api {
  constructor() {
    super({ name: 'minter' });
  }

  mintToken(params: { amount: number; vault: Vault }): boolean {
    return false;
  }

  depositToken(param: { amount: number }): boolean {
    return false;
  }

  withdrawCollateral(param: { amount: number }): boolean {
    return false;
  }

  returnVaultDebt(param: { amount: number }): boolean {
    return false;
  }
}
