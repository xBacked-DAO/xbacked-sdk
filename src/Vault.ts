import { Account } from './Account';
import { vault as vaultBackend, vaultAsa } from '@xbacked-dao/xbacked-contracts';
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
  backend: any;
  constructor(params: VaultParameters) {
    this.id = params.id;
    params?.asaVault?.decimals ? (this.backend = vaultAsa) : (this.backend = vaultBackend);
  }

  /**
   * Used to get the state of the contract
   * @param params Contains key account of type [[Account]] that will be used to read state from the contract
   * @returns State information of type [[VaultReturnParams]]
   */
  async getState(params: { account: Account }): Promise<VaultReturnParams> {
    const ctc = params.account.reachAccount.contract(this.backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.read();
    if (stateView[0] === 'None') {
      throw new Error('the view returned none');
    }
    const vaultState = stateView[1];
    return {
      LIQUIDATION_COLLATERAL_RATIO: vaultState.LIQUIDATION_COLLATERAL_RATIO.toNumber(),
      MINIMUM_COLLATERAL_RATIO: vaultState.MINIMUM_COLLATERAL_RATIO.toNumber(),
      VAULT_INTEREST_RATE: vaultState.VAULT_INTEREST_RATE.toNumber(),
      hotState: {
        accruedInterest: vaultState.hotState.accruedInterest.toNumber(),
        totalVaultDebt: vaultState.hotState.totalVaultDebt.toNumber(),
      },
      coldState: {
        accruedFees: vaultState.coldState.accruedFees.toNumber(),
        collateralPrice: vaultState.coldState.collateralPrice.toNumber(),
        deprecated: vaultState.coldState.deprecated,
        redeemableVaults: vaultState.coldState.redeemableVaults.map((v: any[]) => v[1]),
        proposalTime: vaultState.coldState.proposalTime.toNumber(),
        contractState: vaultState.coldState.contractState.toNumber(),
      },
      addresses: {
        govStakersAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.govStakersAddress),
        liquidationStakersAddress: params.account.reachStdLib.formatAddress(
          vaultState.addresses.liquidationStakersAddress,
        ),
        oracleAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.oracleAddress),
        adminAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.adminAddress),
        daoAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.daoAddress),
      },
    };
  }
  /**
   *
   * @param params Contains keys account that indicates the account that will be used to read the information from the contract and address that indicates the address of the contract to be read from
   * @returns User information of type [[UserVaultReturnParams]]
   */
  async getUserInfo(params: { account: Account; address: string }): Promise<UserVaultReturnParams> {
    const ctc = params.account.reachAccount.contract(this.backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.readVault(params.address);
    if (stateView[1][0] === 'None') {
      return {
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
      collateral: vaultState.collateral.toNumber(),
      liquidating: vaultState.liquidating,
      vaultDebt: vaultState.vaultDebt.toNumber(),
      redeemable: vaultState.redeemable,
      lastAccruedInterestTime: vaultState.lastAccruedInterestTime.toNumber(),
    };
  }
}
