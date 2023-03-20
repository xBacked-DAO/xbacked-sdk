import { Account } from './Account';
import { AccountInterface, StakeGlobalView, StakeLocalView } from './interfaces';
export declare class StakingClient extends Account {
    /** @property Unique identifier for the contract */
    readonly id: number | undefined;
    constructor(params: AccountInterface, contractId: number);
    /**
     * @description Get global state of contract
     * @param params account object that contains the reach account
     * @returns StakeGlobalView
     */
    getState(params: {
        account: Account;
    }): Promise<StakeGlobalView>;
    /**
     * @description Get local state of user
     * @param params account object that contains the reach account, address for the look up
     * @returns StakeLocalView
     */
    getUserInfo(params: {
        account: Account;
        address: string;
    }): Promise<StakeLocalView>;
    /**
     * @description stake assets to the contract
     * @param amount amount to be staked
     * @returns boolean
     */
    stakeAsset(amount: number): Promise<boolean>;
    /**
     * @description unstake assets from the contract
     * @param amount amount to be unstaked
     * @returns boolean
     */
    unstakeAsset(amount: number): Promise<boolean>;
    /**
     * @description exchange accrued points for rewards in the contract
     * @param amount amount of points to exchange for rewards
     * @returns Boolean
     */
    exchangePoints(amount: number): Promise<boolean>;
    /**
     * @description withdraw accrued rewards from liquidations
     * @param amount amount of liquidation rewards to withdraw
     * @returns
     */
    withdrawRewards(amount: number): Promise<boolean>;
    /**
     * @description update accrued points for an account
     * @param address address of the user to accrue points for
     * @returns boolean
     */
    cachePoints(address: string): Promise<boolean>;
    /**
     * @description Use staked xUSD in a liquidation of a vault
     * @param stakerAddress address of the staked xUSD
     * @param liquidateAddress address to liquidate
     * @param amount amount of xUSD to use in liquidation
     * @returns boolean
     */
    liquidateVault(stakerAddress: string, liquidateAddress: string, amount: string): Promise<boolean>;
    /**
     * @description Used for internal formatting of BigNumbers
     * @param stakingState StakeLocalView type
     * @returns StakeLocalView
     */
    static parseUserInfo(stakingState: any): StakeLocalView;
}
