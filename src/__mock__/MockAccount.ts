import { Account } from '../Account';
import { Vault } from '../Vault';
class MockAccount extends Account {
  async updatePrice(params: { price: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async liquidateVault(params: { vault: Vault; address: string }): Promise<boolean> {
    return true;
  }

  async toggleRecoveryMode(params: { vault: Vault; mode: boolean }): Promise<boolean> {
    return true;
  }

  async returnVaultDebt(params: { amount: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async withdrawCollateral(params: { vault: Vault; amount: number }): Promise<boolean> {
    return true;
  }

  async getVaultState(params: { vault: Vault }): Promise<any> {
    return true;
  }

  async getUserInfo(params: { address: string; vault: Vault }): Promise<any> {
    return true;
  }

  async depositCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async mintToken(params: { amount: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async createVault(params: { collateral: number; mintAmount: number; vault: Vault }): Promise<boolean> {
    return true;
  }

  async dripInterest(params: { address: string; vault: Vault; }): Promise<boolean> {
    return true;
  }
}
export default MockAccount;
