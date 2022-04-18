// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-ignore
import { liquidationStaking as backend } from '@xbacked-dao/xbacked-contracts';
import { Account } from './Account';
import { AbiInterface, AccountInterface } from './interfaces';

export interface StakeGlobalView {
  stakingAssetID: number;
  policy: {
    status: number;
    rewardMethod: number;
    rewardRate: number;
    applicationType: number;
    time: number;
  };
  totalStake: number;
  totalRewards: number;
  totalUsers: number;
}

export interface StakeLocalView {
  amountStaked: number;
  rewardsClaimed: number;
  lastClaim: number;
  found: boolean;
}
export class StakingClient extends Account {
  /** @property Unique identifier for the contract */
  readonly id: number | undefined;
 
  constructor(params: AccountInterface, contractId: number) {
    super(params);
    this.id = contractId;
  }

  /**
   * Returns the contract address
   * @param params An object with key vault that indicates the contract whose address is to be retrieved
   * @returns A formatted address of the specified contract as a string
   */
   async getContractAddress(params: { contractId: number }): Promise<string> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.contractId);
    const contractAddress = await ctc.getContractAddress();
    return this.reachStdLib.formatAddress(contractAddress);
  }

  /**
   * 
   * @param params contractId which indicates the contract we want to interact with
   */
  async getContractAbi(params: { contractId: number }): Promise<AbiInterface> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.contractId);
    return await ctc.getABI();
  }
  
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
        rewardRate: stakeState.policy.rewardRate.toNumber()
      },
      totalStake: stakeState.totalStake.toNumber(),
      totalUsers: stakeState.totalUsers.toNumber(),
      totalRewards: stakeState.totalRewards.toNumber()
    };
  }

  async getUserInfo(params: { account: Account; address: string }): Promise<StakeLocalView> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.readUserAccount(params.address);
    if (stateView[1][0] === 'None') {
      return {
        amountStaked: stateView.amountStaked.toNumber(),
        rewardsClaimed: stateView.rewardsClaimed.toNumber(),
        lastClaim: stateView.lastClaim.toNumber(),
        found: false
      };
    }
    const stakingState = stateView[1][1];
    return { ...StakingClient.parseUserInfo(stakingState), found: true };
  }


  LiquidationVaultAPI
  async stakeAsset(amount: number): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.stakeAsset(amount);
  }
  
  async unstakeAsset(amount: number): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.unstakeAsset(amount);
  }

  async exchangePoints(amount: number): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.exchangePoints(amount);
  }

  async withdrawRewards(amount: number): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.withdrawRewards(amount);
  }
  
  async cachePoints(address: string): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidationVaultAPI;
    return put.cachePoints(address);
  }

  // Endpoint to use liquidation vault assets for liquidations.
  async liquidateVault(stakerAddress: string, liquidateAddress: string, amount: string): Promise<Bool> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.LiquidatorAPI;
    return put.liquidateVault(stakerAddress, liquidateAddress, amount);
  }

  // -------------
  static parseUserInfo(stakingState: any): StakeLocalView {
    return {
      amountStaked: stakingState.amountStaked.toNumber(),
      rewardsClaimed: stakingState.rewardsClaimed.toNumber(),
      lastClaim: stakingState.lastClaim.toNumber(),
      found: stakingState.found,
    };
  }

}
