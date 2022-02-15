import { Account } from './Account';
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
/**
 * The Parameters returned from the staate of a contract
 */
export interface VaultReturnParams {
  /** @property Fees that have accrued in the contract */
  accruedFees: number;
  /** @property The present collateral price in the contract */
  collateralPrice: number;
  /** @property Indicator that signifies if the contract is deprecated or not */
  deprecated: boolean;
  /** @property The percentage of the accruedFees, sent to the FeeCollector as a reward for distributing fees */
  feeCollectorFee: number;
  /** @property Minimum collateral ratio for a vault to be liquidated in micro units */
  liquidationCollateralRatio: number;
  /** @property The percentage of the amount liquidated, taken by the contract as fees during liquidation */
  liquidationFee: number;
  /** @property The minimum collateral ratio allowed for vault creation, minting, withdrawal in the contract */
  minimumCollateralRatio: number;
  /** @property The percentage of the amount minted charged by the protocol in the form of collateral. For exmaple, mitning 100 xUSD would charge $0.5 USD in the form of the collateral type */
  mintingFee: number;
  /** @property The total amount of debt in the contract */
  totalVaultDebt: number;
  /** @property An array of addresses for redeemable vaults */
  redeemableVaults: any[];
}

export interface ReachUserVault {
  /** @property The collateral ratio for a vault */
  collateralRatio: number;
  /** @property The amount of collateral in a vault */
  collateral: number;
  /** @property Indicator that signifies if a vault can be liquidated */
  liquidating: boolean;
  /** @property The debt in a vault */
  vaultDebt: number;
  /** @property Inidicator that signifies if a vault can be redeemed */
  redeemable: boolean;
}

export interface UserVaultReturnParams extends ReachUserVault {
  /** @property Indicator that signifies that a vault exists for a particular address */
  vaultFound: boolean;
}
/**
 * parameters used to instantiate the Contract constructor
 */
export interface VaultParameters {
  /**  @property Unique identifier for the contract */
  id: number;
  acc?: any;
}
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
      feeCollectorFee: vaultState.feeCollectorFee.toNumber(),
      liquidationCollateralRatio: vaultState.liquidationCollateralRatio.toNumber(),
      liquidationFee: vaultState.liquidationFee.toNumber(),
      minimumCollateralRatio: vaultState.minimumCollateralRatio.toNumber(),
      mintingFee: vaultState.mintingFee.toNumber(),
      totalVaultDebt: vaultState.totalVaultDebt.toNumber(),
      redeemableVaults: vaultState.redeemableVaults,
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
    };
  }
}
