// @ts-ignore
import { masterStaking as backend } from '@xbacked-dao/xbacked-contracts';

import { Account } from './Account';
import {
  AccountInterface,
  StabilityPoolAdminParameters,
  StabilityPoolGlobalView,
  StabilityPoolUserState,
} from './interfaces';

export class StabilityPoolClient extends Account {
  readonly id: number | undefined;

  constructor(params: AccountInterface, contractId: number) {
    super(params);
    this.id = contractId;
  }

  private static parseColdState = ({
    stakingASA,
    stakingASADecimals,
    rewardASAs,
    rewardASADecimals,
    assetScaleInfos,
  }: any): MasterStakingColdState => {
    return {
      stakingASA: stakingASA.toNumber(),
      stakingASADecimals: stakingASADecimals.toNumber(),
      rewardASAs: rewardASAs.map((asa: any) => asa.toNumber()),
      rewardASADecimals: rewardASADecimals.map((decimals: any) => decimals.toNumber()),
      assetScaleInfos: assetScaleInfos.map(({ sign, scaleFactor }: any) => [sign, scaleFactor.toNumber()]),
    };
  };

  private static parseHotState = (
    reachStdlib: any,
    {
      adminAddress,
      deprecateTimeout,
      deprecateAt,
      rewardRatios,
      rewardRate,
      remainingRewards,
      totalRewards,
      totalDeposit,
      lastRewardBlock,
      rewardPerToken,
    }: any,
  ): MasterStakingHotState => {
    return {
      adminAddress: reachStdlib.formatAddress(adminAddress),
      deprecateTimeout: deprecateTimeout.toNumber(),
      deprecateAt: deprecateAt.toNumber(),
      rewardRatios: rewardRatios.map((ratios: any) => ratios.toNumber()),
      rewardRate: rewardRate.toNumber(),
      remainingRewards: remainingRewards.map((rewards: any) => rewards.toNumber()),
      totalRewards: totalRewards.toNumber(),
      totalDeposit: totalDeposit.toNumber(),
      lastRewardBlock: lastRewardBlock.toNumber(),
      rewardPerToken: rewardPerToken.toNumber(),
    };
  };

  private static parseUserState = ({
    amountDeposited,
    rewardPerTokenPaid,
    stakingRewards,
    liquidationRewards,
  }: any): StabilityPoolUserState => {
    return {
      amountDeposited: amountDeposited.toNumber(),
      rewardPerTokenPaid: rewardPerTokenPaid.toNumber(),
      stakingRewards: stakingRewards.toNumber(),
      liquidationRewards: liquidationRewards.toNumber(),
    };
  };

  /**
   * @description Get global state of contract
   * @returns StabilityPoolGlobalView
   */
  public getState = async (): Promise<StabilityPoolGlobalView> => {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const rawColdState = await get.readColdState();
    const rawHotState = await get.readHotState();
    return {
      ...StabilityPoolClient.parseColdState(rawColdState[1]),
      ...StabilityPoolClient.parseHotState(this.reachStdLib, rawHotState[1]),
    };
  };

  /**
   * @description Get admin properties of contract
   * @returns StabilityPoolAdminParameters
   */
  public getAdminProperties = async (): Promise<StabilityPoolAdminParameters> => {
    const state = await this.getState();
    return {
      adminAddress: state.adminAddress,
      deprecateTimeout: state.deprecateTimeout,
      deprecateAt: state.deprecateAt,
      rewardRatios: state.rewardRatios,
      rewardRate: state.rewardRate,
    };
  };

  /**
   * @description Get local state of user
   * @param params address for the look up
   * @returns StabilityPoolUserState
   */
  public getUserState = async (params: { address: string }): Promise<StabilityPoolUserState> => {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const rawUserState = await get.readUser(params.address);
    return StabilityPoolClient.parseUserState(rawUserState[1]);
  };

  /**
   * @description update admin parameters
   * @param adminProperties StabilityPoolAdminParameters
   * @returns boolean
   */
  public async updateAdminParameters(adminParameters: StabilityPoolAdminParameters): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.AdminAPI;
    return put.updateAdminParameters({
      ...(await this.getAdminProperties()),
      ...adminParameters,
    });
  }

  /**
   * @description deposit assets into the contract
   * @param amount amount to be staked
   * @returns boolean
   */
  public async stake(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    // TODO: change this when we rename it to stake.
    return put.deposit(amount);
  }

  /**
   * @description unstake assets from the contract
   * @param amount amount to be unstaked
   * @returns boolean
   */
  public async unstake(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    // TODO: change this when we rename it to unstake.
    return put.withdraw(amount);
  }

  /**
   * @description cache rewards for the signer
   * @returns boolean
   */
  public async cacheRewards(): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    return put.cacheRewards(amount);
  }

  /**
   * @description withdraw rewards from the contract
   * @param amount amount to be withdrawn
   * @returns boolean
   */
  public async withdrawRewards(amount: number): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.StakingUserAPI;
    return put.withdrawRewards(amount);
  }

  /**
   * @description withdraw rewards from the contract
   * @param amount amount to be withdrawn
   * @returns boolean
   */
  public async liquidateVault(
    liquidatorVault: string,
    targetVault: string,
    liquidationAmount: number,
    minimumPrice: number,
    maximumPrice: number,
  ): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, this.id);
    const put = ctc.a.LiquidatorAPI;
    return put.liquidateVault(liquidatorVault, targetVault, liquidationAmount, minimumPrice, maximumPrice);
  }
}
