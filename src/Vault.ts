import { Account } from './Account';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
/**
 * The Parameters returned from the staate of a contract
 */
export interface VaultReturnParams {
  /** @property fees that have accrued in the contract */
  accruedFees: number;
  /** @property the present collateral price in the contract */
  collateralPrice: number;
  /** @property indicator that signifies if the contract is deprecated or not */
  deprecated: boolean;
  /** @property the percentage of the accruedFees, sent to the FeeCollector as a reward for distributing fees */
  feeCollectorFee: number;
  /** @property  minimum collateral ratio for a vault to be liquidated*/
  liquidationCollateralRatio: number;
  /** @property the percentage of the anount liquidated, taken by the contract as fees during liquidation */
  liquidationFee: number;
  /** @property the minimum collateral ratio allowed for vault creation, minting, withdrawal in the contract */
  minimumCollateralRatio: number;
  /** @property The percentage of the amount minted, taken by the contract as fees during minting*/
  mintingFee: number;
  /**@property the total amount of debt in the contract */
  totalVaultDebt: number;
}
/** The parameters returned from a vault in a contract  */
export interface UserVaultReturnParams {
  /** @property the collateral ratio for a vault */
  collateralRatio: number;
  /** @property the amount of collateral in a vault*/
  collateral: number;
  /** @property indicator that signifies if a vault can be liquidated */
  liquidating: boolean;
  /** @property the debt in a vault */
  vaultDebt: number;
  /** inidicator that signifies if a vault can be redeemed*/
  redeemable: boolean;
  /**indicator that signifies that a vault exists for a particular address */
  vaultFound: boolean;
}
/**
 * parameters used to instantiate the Contract constructor
 */
export interface VaultParameters {
  /**  @property  unique identifier for the contract */
  id: number;
  acc?: any;
}
/** 
 * An abstraction of an Xusd contract
 */
export class Vault {
  /** unique identifier for the contract */
  readonly id: number | undefined;
  acc?: any;

  constructor(params: VaultParameters) {
    this.id = params.id;
    if (params.acc !== undefined) {
      this.acc = params.acc;
    }
  }

  /**
   * Used to get the state of the contract
   * @param params contains key account of type [[Account]] that will be used to read state from the contract
   * @returns state information of tyoe [[VaultReturnParams]]
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
      feeCollectorFee: vaultState.feeCollectorFee.toNumber(),
      liquidationCollateralRatio: vaultState.liquidationCollateralRatio.toNumber(),
      liquidationFee: vaultState.liquidationFee.toNumber(),
      minimumCollateralRatio: vaultState.minimumCollateralRatio.toNumber(),
      mintingFee: vaultState.mintingFee.toNumber(),
      totalVaultDebt: vaultState.totalVaultDebt.toNumber(),
    };
  }
  /**
   *
   * @param params contains keys account that indicates the account that will be used to read the information from the contract and address that indicates the address of the contract to be read from
   * @returns user information of type [[UserVaultReturnParams]]
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


