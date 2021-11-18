import Interact from './Interact';
interface CreateVaulParams {
  collateral: number;
  mintAmount: number;
}
class VaultOwner extends Interact {
  constructor() {
    super({ name: 'VaultOwner' });
  }

  createVault(params: CreateVaulParams): CreateVaulParams {
    return params;
  }
}
