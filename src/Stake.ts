import Account from './Account';
import { stake as backend } from '@xbacked-dao/xbacked-contracts';

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
}

interface StakeParameters {
  id: number;
  acc?: any;
}

class Stake {
  readonly id: number | undefined;

  constructor(params: StakeParameters) {
    this.id = params.id;
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
    const stateView = await get.readVault(params.address);
    if (stateView[1][0] === 'None') {
      return {
        amountStaked: stateView.amountStaked.toNumber(),
        rewardsClaimed: stateView.rewardsClaimed.toNumber(),
        lastClaim: stateView.lastClaim.toNumber()
      };
    }
    const vaultState = stateView[1][1];
    return { ...Vault.parseUserInfo(vaultState), vaultFound: true };
  }

  static parseUserInfo(stakingState: any): StakeLocalView {
    return {
      amountStaked: stakingState.amountStaked.toNumber(),
      rewardsClaimed: stakingState.rewardsClaimed.toNumber(),
      lastClaim: stakingState.lastClaim.toNumber()
    };
  }
}

export default Stake;
