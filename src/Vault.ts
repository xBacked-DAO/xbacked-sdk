import Account from './Account';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
interface VaultReturnParams {
  accruedFees: number;
  collateralPrice: number;
  deprecated: boolean;
  feeCollectorFee: number;
  liquidationCollateralRatio: number;
  liquidationFee: number;
  minimumCollateralRatio: number;
  mintingFee: number;
  totalVaultDebt: number;
}

interface UserVaultReturnParams {
  collateralRatio: number;
  collateral: number;
  liquidating: boolean;
  vaultDebt: number;
  redeemable: boolean;
  vaultFound: boolean;
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


  async getState(params: { account: Account }): Promise<VaultReturnParams> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.read();
    if (stateView[0] === 'None') {
      throw new Error('the view returned none');
    }
    const vaultState = stateView[1];
    return {
      accruedFees: vaultState.accruedFees.toNumber(),
      collateralPrice: vaultState.collateralPrice.toNumber(),
      deprecated: vaultState.deprecated,
      feeCollectorFee: vaultState.feeCollectorFee.toNumber(),
      liquidationCollateralRatio: vaultState.liquidationCollateralRatio.toNumber(),
      liquidationFee: vaultState.liquidationFee.toNumber(),
      minimumCollateralRatio: vaultState.minimumCollateralRatio.toNumber(),
      mintingFee: vaultState.mintingFee.toNumber(),
      totalVaultDebt: vaultState.totalVaultDebt.toNumber(),
    };
  }

  async getUserInfo(params: { account: Account; address: string }): Promise<UserVaultReturnParams> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.readVault(params.address);
    if (stateView[1][0] === 'None') {
      return {
        collateralRatio: 0,
        collateral: 0,
        liquidating: false,
        vaultDebt: 0,
        redeemable: false,
        vaultFound: false,
      };
    }
    const vaultState = stateView[1][1];
    return {
      collateralRatio: vaultState.collateralRatio.toNumber(),
      collateral: vaultState.collateral.toNumber(),
      liquidating: vaultState.liquidating,
      vaultDebt: vaultState.vaultDebt.toNumber(),
      redeemable: vaultState.redeemable,
      vaultFound: true,
    };
  }
}

export default Vault;
