"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingClient = void 0;
// @ts-ignore
const xbacked_contracts_1 = require("@xbacked-dao/xbacked-contracts");
const Account_1 = require("./Account");
class StakingClient extends Account_1.Account {
    constructor(params, contractId) {
        super(params);
        this.id = contractId;
    }
    /**
     * @description Get global state of contract
     * @param params account object that contains the reach account
     * @returns StakeGlobalView
     */
    getState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = params.account.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const get = ctc.v.State;
            const stateView = yield get.read();
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
        });
    }
    /**
     * @description Get local state of user
     * @param params account object that contains the reach account, address for the look up
     * @returns StakeLocalView
     */
    getUserInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = params.account.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const get = ctc.v.State;
            const stateView = yield get.readUserAccount(params.address);
            if (stateView[1][0] === 'None') {
                return {
                    amountStaked: stateView.amountStaked.toNumber(),
                    rewardsClaimed: stateView.rewardsClaimed.toNumber(),
                    lastClaim: stateView.lastClaim.toNumber(),
                    found: false,
                };
            }
            const stakingState = stateView[1][1];
            return Object.assign(Object.assign({}, StakingClient.parseUserInfo(stakingState)), { found: true });
        });
    }
    /**
     * @description stake assets to the contract
     * @param amount amount to be staked
     * @returns boolean
     */
    stakeAsset(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidationVaultAPI;
            return put.stakeAsset(amount);
        });
    }
    /**
     * @description unstake assets from the contract
     * @param amount amount to be unstaked
     * @returns boolean
     */
    unstakeAsset(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidationVaultAPI;
            return put.unstakeAsset(amount);
        });
    }
    /**
     * @description exchange accrued points for rewards in the contract
     * @param amount amount of points to exchange for rewards
     * @returns Boolean
     */
    exchangePoints(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidationVaultAPI;
            return put.exchangePoints(amount);
        });
    }
    /**
     * @description withdraw accrued rewards from liquidations
     * @param amount amount of liquidation rewards to withdraw
     * @returns
     */
    withdrawRewards(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidationVaultAPI;
            return put.withdrawRewards(amount);
        });
    }
    /**
     * @description update accrued points for an account
     * @param address address of the user to accrue points for
     * @returns boolean
     */
    cachePoints(address) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidationVaultAPI;
            return put.cachePoints(address);
        });
    }
    /**
     * @description Use staked xUSD in a liquidation of a vault
     * @param stakerAddress address of the staked xUSD
     * @param liquidateAddress address to liquidate
     * @param amount amount of xUSD to use in liquidation
     * @returns boolean
     */
    liquidateVault(stakerAddress, liquidateAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(xbacked_contracts_1.stabilityPool, this.id);
            const put = ctc.a.LiquidatorAPI;
            return put.liquidateVault(stakerAddress, liquidateAddress, amount);
        });
    }
    // -------------
    /**
     * @description Used for internal formatting of BigNumbers
     * @param stakingState StakeLocalView type
     * @returns StakeLocalView
     */
    static parseUserInfo(stakingState) {
        return {
            amountStaked: stakingState.amountStaked.toNumber(),
            rewardsClaimed: stakingState.rewardsClaimed.toNumber(),
            lastClaim: stakingState.lastClaim.toNumber(),
            found: stakingState.found,
        };
    }
}
exports.StakingClient = StakingClient;
//# sourceMappingURL=StakingClient.js.map