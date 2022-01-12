import Account from '../Account';
import Vault from '../Vault';
class MockAccount extends Account {
  async deployVault(): Promise<Vault> {
    return new Vault({ id: 1 });
  }

 

  async updatePrice(params: { price: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async liquidateVault(params: { vault: Vault, address: string }): Promise<boolean> {
    return true;
  }

  async toggleRecoveryMode(params: { vault: Vault; mode: boolean }): Promise<boolean> {
    return true;
  }

  async redeemVault(params: { vault: Vault; amount: number }): Promise<boolean> {
    return true;
  }

  async returnVaultDebt(params: { amount: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async withdrawCollateral(params: { vault: Vault; amount: number }): Promise<boolean> {
    return true;
  }
}
export default MockAccount;
