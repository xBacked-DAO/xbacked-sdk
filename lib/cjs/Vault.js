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
exports.Vault = void 0;
const xbacked_contracts_1 = require("@xbacked-dao/xbacked-contracts");
/**
 * The Parameters returned from the staate of a contract
 */
/**
 * An abstraction of an Xusd contract
 */
class Vault {
    constructor(params) {
        var _a, _b, _c, _d, _e;
        this.id = params.id;
        if (((_a = params === null || params === void 0 ? void 0 : params.asaVault) === null || _a === void 0 ? void 0 : _a.decimals) || ((_b = params === null || params === void 0 ? void 0 : params.asaVault) === null || _b === void 0 ? void 0 : _b.decimals) === 0) {
            if ((_c = params === null || params === void 0 ? void 0 : params.asaVault) === null || _c === void 0 ? void 0 : _c.z_p_f_vault_asa) {
                this.backend = xbacked_contracts_1.z_p_f_vaultAsa;
            }
            else if ((_d = params === null || params === void 0 ? void 0 : params.asaVault) === null || _d === void 0 ? void 0 : _d.large_cp_vault_asa) {
                this.backend = xbacked_contracts_1.large_cp_vault_asa;
            }
            else if ((_e = params === null || params === void 0 ? void 0 : params.asaVault) === null || _e === void 0 ? void 0 : _e.new_asa_vault) {
                this.backend = xbacked_contracts_1.new_asa_vault;
            }
            else {
                this.backend = xbacked_contracts_1.vaultAsa;
            }
        }
        else {
            if (!params.new_algo_vault) {
                this.backend = xbacked_contracts_1.vault;
            }
            else {
                this.backend = xbacked_contracts_1.new_algo_vault;
            }
        }
    }
    /**
     * Used to get the state of the contract
     * @param params Contains key account of type [[Account]] that will be used to read state from the contract
     * @returns State information of type [[VaultReturnParams]]
     */
    getState(params) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = params.account.reachAccount.contract(this.backend, this.id);
            const get = ctc.v.State;
            const stateView = yield get.read();
            if (stateView[0] === 'None') {
                throw new Error('the view returned none');
            }
            const vaultState = stateView[1];
            return {
                LIQUIDATION_COLLATERAL_RATIO: vaultState.LIQUIDATION_COLLATERAL_RATIO.toNumber(),
                MINIMUM_COLLATERAL_RATIO: vaultState.MINIMUM_COLLATERAL_RATIO.toNumber(),
                VAULT_INTEREST_RATE: (_a = vaultState === null || vaultState === void 0 ? void 0 : vaultState.VAULT_INTEREST_RATE) === null || _a === void 0 ? void 0 : _a.toNumber(),
                hotState: {
                    accruedInterest: vaultState.hotState.accruedInterest.toNumber(),
                    totalVaultDebt: vaultState.hotState.totalVaultDebt.toNumber(),
                },
                coldState: {
                    accruedFees: vaultState.coldState.accruedFees.toNumber(),
                    collateralPrice: vaultState.coldState.collateralPrice.toNumber(),
                    redeemableVaults: (_b = vaultState.coldState.redeemableVaults) === null || _b === void 0 ? void 0 : _b.map((v) => v[1]),
                    proposalTime: vaultState.coldState.proposalTime.toNumber(),
                    contractState: vaultState.coldState.contractState.toNumber(),
                    feeStructure: vaultState.coldState.feeStructure.map((feeSplit) => feeSplit.toNumber()),
                    minimumDebtAmount: vaultState.coldState.minimumDebtAmount.toNumber(),
                    maximumCollateralValue: vaultState.coldState.maximumCollateralValue.toNumber(),
                    vaultInterestRate: (_d = (_c = vaultState.coldState) === null || _c === void 0 ? void 0 : _c.vaultInterestRate) === null || _d === void 0 ? void 0 : _d.toNumber(),
                },
                addresses: {
                    govStakersAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.govStakersAddress),
                    liquidationStakersAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.stabilityPoolAddress),
                    oracleAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.oracleAddress),
                    adminAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.adminAddress),
                    daoAddress: params.account.reachStdLib.formatAddress(vaultState.addresses.treasuryAddress),
                },
            };
        });
    }
    /**
     *
     * @param params Contains keys account that indicates the account that will be used to read the information from the contract and address that indicates the address of the contract to be read from
     * @returns User information of type [[UserVaultReturnParams]]
     */
    getUserInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctc = params.account.reachAccount.contract(this.backend, this.id);
            const get = ctc.v.State;
            const stateView = yield get.readVault(params.address);
            if (!stateView[1] || stateView[1][0] === 'None') {
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
            return Object.assign(Object.assign({}, Vault.parseUserInfo(vaultState)), { vaultFound: true });
        });
    }
    /**
     *
     * @param vaultState type of [[UserVaultReturnParams]]
     * @returns type of [[ReachUserVault]]
     */
    static parseUserInfo(vaultState) {
        return {
            collateral: vaultState.collateral.toNumber(),
            liquidating: vaultState.liquidating,
            vaultDebt: vaultState.vaultDebt.toNumber(),
            redeemable: vaultState.redeemable,
            lastAccruedInterestTime: vaultState.lastAccruedInterestTime.toNumber(),
        };
    }
}
exports.Vault = Vault;
//# sourceMappingURL=Vault.js.map