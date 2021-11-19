import Api from './Api';

class VaultRedeemer extends Api {
  constructor() {
    super({ name: 'VaultRedeemer' });
  }

  redeemVault(param: { amount: number; vault: Vault }): boolean {
    return false;
  }
}
