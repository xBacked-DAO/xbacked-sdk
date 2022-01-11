import Account from './Account';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
interface VaultReturnParams {
  totalVaultDebt: number,
  totalVaultCollateral: number,
  accruedFees: number,
  collateralPrice: number,
  deprecated: boolean
}

interface UserVaultReturnParams{
  collateralRatio: number;
  collateral: number;
  vaultDebt: number;
  hf: number;
  redeemable: boolean; 
}

interface VaultParameters {
  id: number;
  acc?: any;
}
class Vault {
  readonly id: number | undefined;
  acc?: any;

  constructor(params: VaultParameters) {
    this.id = params.id;
    if (params.acc !== undefined) {
      this.acc = params.acc;
    }
  }


  //TODO
  async getState(params: { account: Account }): Promise<VaultReturnParams> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.read();
    if (stateView[0] === 'None') {
      throw new Error('the view returned none');
    }
    const vaultState = stateView[1];
    return {
      totalVaultDebt: vaultState.totalVaultDebt.toNumber(),
      totalVaultCollateral: vaultState.totalVaultCollateral.toNumber(),
      accruedFees: vaultState.accruedFees.toNumber(),
      collateralPrice: vaultState.collateralPrice.toNumber(),
      deprecated: vaultState.deprecated
    };
  }

  async getUserInfo(params: { account: Account, address: string }): Promise<UserVaultReturnParams>{
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.readVault('CKFJQPYSGJBRDZ7YKJSOTWJOLUBM7HGIPY6MFLQTBFLHHPIOAX3VEZQP44');
    if (stateView[0] === 'None') {
      throw new Error('the view returned none');
    }
    const vaultState = stateView[1][1];
    return {
      collateralRatio: vaultState.collateralRatio.toNumber(),
      collateral: vaultState.collateral.toNumber(),
      vaultDebt: vaultState.vaultDebt.toNumber(),
      hf: vaultState.hf.toNumber(),
      redeemable: vaultState.redeemable
    };
  }
}

export default Vault;
