// @ts-ignore
import { masterStaking as backend } from '@xbacked-dao/xbacked-contracts';
import { Account } from './Account';
import {
  AccountInterface,
  MasterStakingAdminParameters,
  MasterStakingColdState,
  MasterStakingHotState,
  MasterStakingGlobalView,
  MasterStakingLocalView
} from './interfaces';

export class MasterStakingClient extends Account {
  readonly id: number | undefined;

  constructor(params: AccountInterface, contractId: number) {
    super(params);
    this.id = contractId;
  }

  private parseColdState = (rawColdState: any): MasterStakingColdState => {
    return {
      stakingASA: rawColdState.stakingASA.toNumber(),
      stakingASADecimals: rawColdState.stakingASADecimals.toNumber(),
      rewardASAs: rawColdState.rewardASAs.map((asa: any) => asa.toNumber()),
      rewardASADecimals: rawColdState.rewardASADecimals.map((decimals: any) => decimals.toNumber()),
    }
  }

  private parseHotState = (rawHotState: any): MasterStakingHotState => {
    return {
      adminAddress: this.reachStdLib.formatAddress(rawHotState.adminAddress),
      deprecateTimeout: rawHotState.deprecateTimeout.toNumber(),
      deprecateAt: rawHotState.deprecateAt.toNumber(),
      rewardRatios: rawHotState.rewardRatios.map((ratios: any) => ratios.toNumber()),
      rewardRate: rawHotState.deprecateAt.toNumber(),
      remainingRewards: rawHotState.remainingRewards.map((rewards: any) => rewards.toNumber()),
      totalRewards: rawHotState.totalRewards.toNumber(),
      totalDeposit: rawHotState.totalDeposit.toNumber(),
      lastRewardBlock: rawHotState.lastRewardBlock.toNumber(),
      rewardPerToken: rawHotState.rewardPerToken.toNumber()
    }
  }

  private parseUserState = (rawUserState: any): MasterStakingLocalView => {
    return {
      amountDeposited: rawUserState.amountDeposited.toNumber(),
      rewardPerTokenPaid: rawUserState.rewardPerTokenPaid.toNumber(),
      rewards: rawUserState.rewards.toNumber(),
    }
  }

  /**
   * @description Get global state of contract
   * @param params account object that contains the reach account
   * @returns StakeGlobalView
   */
   getState = async (): Promise<MasterStakingGlobalView> => {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const rawColdState = await get.readColdState();
    const rawHotState = await get.readHotState();
    return {
      ...this.parseColdState(rawColdState[1]),
      ...this.parseHotState(rawHotState[1])
    }
  };

  /**
   * @description Get admin properties of contract
   * @param params account object that contains the reach account
   * @returns StakeGlobalView
   */
  getAdminProperties = async (): Promise<MasterStakingAdminParameters> => {
    const state = await this.getState();
    return {
      adminAddress: state.adminAddress,
      deprecateTimeout: state.deprecateTimeout,
      deprecateAt: state.deprecateAt,
      rewardRatios: state.rewardRatios,
      rewardRate: state.rewardRate
    };
  };

  /**
   * @description Get local state of user
   * @param params account object that contains the reach account, address for the look up
   * @returns StakeLocalView
   */
  getUserInfo = async (params: { address: string }): Promise<any> => {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const rawUserState = await get.readUser(params.address);
    return this.parseUserState(rawUserState[1]);
  };

   /**
   * @description update last consensus time of the contract
   * @returns boolean
   */
  private async updateLastConsensus(): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.AnyAPI;
    return put.updateLastConsensus();
  }

  /**
   * @description withdraw assets from the contract
   * @param amount amount to be staked
   * @returns boolean
   */
  async updateAdminParameters(adminProperties: any): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.AdminAPI;
    return put.updateAdminParameters({
      ...(await this.getAdminProperties()), ...adminProperties 
    });
  }
  
  /**
   * @description withdraw assets from the contract
   * @param amount amount to be staked
   * @returns boolean
   */
   async withdraw(amount: number): Promise<boolean> {
    await this.updateLastConsensus();
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    return put.withdraw(amount);
  }

  /**
   * @description withdraw assets from the contract
   * @param amount amount to be staked
   * @returns boolean
   */
   async withdrawRewards(amount: number): Promise<boolean> {
    await this.updateLastConsensus();
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    return put.withdrawRewards(amount);
  }
}
