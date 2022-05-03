// @ts-ignore
import { liquidationStaking as backend } from '@xbacked-dao/xbacked-contracts';
import { Account } from './Account';
import { AccountInterface, StakeGlobalView, StakeLocalView } from './interfaces';

export class StakingClient extends Account {
  /** @property Unique identifier for the contract */
  readonly id: number | undefined;

  constructor(params: AccountInterface, contractId: number) {
    super(params);
    this.id = contractId;
  }

  /**
   * @description Get global state of contract
   * @param params account object that contains the reach account
   * @returns StakeGlobalView
   */
  async getState(params: { account: Account }): Promise<StakeGlobalView> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.read();
    if (stateView[0] === 'None') {
      throw new Error('The view is null');
    }
    const stakeState = stateView[1];
    return {
      stakingAssetID: stakeState.stakingAsset.toNumber(),
      policy: {
        applicationType: stakeState.policy.applicationType.toNumber(),
        status: stakeState.policy.status.toNumber(),
        time: stakeState.policy.time.toNumber(),
        rewardMethod: stakeState.policy.rewardMethod.toNumber(),
        rewardRate: stakeState.policy.rewardRate.toNumber(),
      },
      totalStake: stakeState.totalStake.toNumber(),
      totalUsers: stakeState.totalUsers.toNumber(),
      totalRewards: stakeState.totalRewards.toNumber(),
    };
  }

  /**
   * @description Get local state of user
   * @param params account object that contains the reach account, address for the look up
   * @returns StakeLocalView
   */
  async getUserInfo(params: { account: Account; address: string }): Promise<StakeLocalView> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.readUserAccount(params.address);
    if (stateView[1][0] === 'None') {
      return {
        amountStaked: stateView.amountStaked.toNumber(),
        rewardsClaimed: stateView.rewardsClaimed.toNumber(),
        lastClaim: stateView.lastClaim.toNumber(),
        found: false,
      };
    }
    const stakingState = stateView[1][1];
    return { ...StakingClient.parseUserInfo(stakingState), found: true };
  }

  /**
   * @description stake assets to the contract
   * @param amount amount to be staked
   * @returns boolean
   */
  async stakeAsset(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.stakeAsset(amount);
  }

  /**
   * @description unstake assets from the contract
   * @param amount amount to be unstaked
   * @returns boolean
   */
  async unstakeAsset(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.unstakeAsset(amount);
  }

  /**
   * @description exchange accrued points for rewards in the contract
   * @param amount amount of points to exchange for rewards
   * @returns Boolean
   */
  async exchangePoints(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.exchangePoints(amount);
  }
  /**
   * @description withdraw accrued rewards from liquidations
   * @param amount amount of liquidation rewards to withdraw
   * @returns
   */
  async withdrawRewards(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.withdrawRewards(amount);
  }

  /**
   * @description update accrued points for an account
   * @param address address of the user to accrue points for
   * @returns boolean
   */
  async cachePoints(address: string): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.cachePoints(address);
  }

  /**
   * @description Use staked xUSD in a liquidation of a vault
   * @param stakerAddress address of the staked xUSD
   * @param liquidateAddress address to liquidate
   * @param amount amount of xUSD to use in liquidation
   * @returns boolean
   */
  async liquidateVault(stakerAddress: string, liquidateAddress: string, amount: string): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidatorAPI;
    return put.liquidateVault(stakerAddress, liquidateAddress, amount);
  }

  // -------------
  /**
   * @description Used for internal formatting of BigNumbers
   * @param stakingState StakeLocalView type
   * @returns StakeLocalView
   */
  static parseUserInfo(stakingState: any): StakeLocalView {
    return {
      amountStaked: stakingState.amountStaked.toNumber(),
      rewardsClaimed: stakingState.rewardsClaimed.toNumber(),
      lastClaim: stakingState.lastClaim.toNumber(),
      found: stakingState.found,
    };
  }
}
