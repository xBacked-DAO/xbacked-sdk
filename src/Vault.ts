import { Account } from './Account';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import { VaultReturnParams, ReachUserVault, UserVaultReturnParams, VaultParameters } from './interfaces';
/**
 * The Parameters returned from the staate of a contract
 */
/**
 * An abstraction of an Xusd contract
 */
export class Vault {
  /** @property Unique identifier for the contract */
  readonly id: number | undefined;

  constructor(params: VaultParameters) {
    this.id = params.id;
  }

  /**
   * Used to get the state of the contract
   * @param params Contains key account of type [[Account]] that will be used to read state from the contract
   * @returns State information of type [[VaultReturnParams]]
   */
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
      // Hard coded for now, since it is hard coded in contract
      feeCollectorFee: 0.005, // vaultState.feeCollectorFee.toNumber(),
      liquidationCollateralRatio: vaultState.liquidationCollateralRatio.toNumber(),
      // Hard coded for now, since it is hard coded in contract
      liquidationFee: 0.1, // vaultState.liquidationFee.toNumber(),
      minimumCollateralRatio: vaultState.minimumCollateralRatio.toNumber(),
      totalVaultDebt: vaultState.totalVaultDebt.toNumber(),
      // is a 2d array in the form ["Some", value] returned from reach
      redeemableVaults: vaultState.redeemableVaults.map((v: any[]) => v[1]),
      accruedInterest: vaultState.accruedInterest.toNumber(),
      // Opcode cost does not permit storing this in view
      interestRate: 2000000000, // vaultState.interestRate.toNumber(),
    };
  }
  /**
   *
   * @param params Contains keys account that indicates the account that will be used to read the information from the contract and address that indicates the address of the contract to be read from
   * @returns User information of type [[UserVaultReturnParams]]
   */
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
        lastAccruedInterestTime: 0,
      };
    }
    const vaultState = stateView[1][1];
    return { ...Vault.parseUserInfo(vaultState), vaultFound: true };
  }

  /**
   *
   * @param vaultState type of [[UserVaultReturnParams]]
   * @returns type of [[ReachUserVault]]
   */
  static parseUserInfo(vaultState: any): ReachUserVault {
    return {
      collateralRatio: vaultState.collateralRatio.toNumber(),
      collateral: vaultState.collateral.toNumber(),
      liquidating: vaultState.liquidating,
      vaultDebt: vaultState.vaultDebt.toNumber(),
      redeemable: vaultState.redeemable,
      lastAccruedInterestTime: vaultState.lastAccruedInterestTime.toNumber(),
    };
  }
}
