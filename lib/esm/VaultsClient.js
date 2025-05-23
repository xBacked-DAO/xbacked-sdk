var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import { Vault } from './Vault';
import { convertToMicroUnits, calculateInterestAccrued, VAULTS, getAllAccounts } from './utils';
import { Account } from './Account';
import algosdk from 'algosdk';
export class VaultsClient extends Account {
    constructor(params) {
        super(params);
    }
    /**
     *
     * @param params Contains keys address, debtAmount, vault, dripInterest, minimumPrice allowed for this transaction
     * and maximumPrice allowed for this transaction. Include dripInterest if you would like the vault debt to be updated before liquidation
     * @returns A boolean indicating if the vault was liquidated or not
     */
    liquidateVault(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.Liquidator;
            if (params.dripInterest) {
                yield this.dripInterest({ vault: params.vault, address: params.address });
            }
            const res = yield put.liquidateVault({
                vaultOwner: params.address,
                debtAmount: convertToMicroUnits(params.debtAmount),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
            });
            return res;
        });
    }
    /**
     *
     * @param params Contains keys address, debtAmount, vault, dripInterest, minimumPrice allowed for this transaction
     * and maximumPrice allowed for this transaction. Include dripInterest if you would like the vault debt to be updated before liquidation
     * @returns A boolean indicating if the vault was liquidated or not
     */
    liquidateDuringShutdown(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.Liquidator;
            if (params.dripInterest) {
                yield this.dripInterest({ vault: params.vault, address: params.address });
            }
            const res = yield put.liquidateDuringShutdown({
                vaultOwner: params.address,
                debtAmount: convertToMicroUnits(params.debtAmount),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
            });
            return res;
        });
    }
    /**
     * Attempt to redeem some of the Vault asset against a redeemable vault, to
     * receive vault collateral.
     * @param params Contains the amount of xUSD to redeem, the vault to redeem it from, minimumPrice
     * that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating success of call.
     */
    redeemVault(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultRedeemer;
            const res = yield put.redeemVault({
                amountToRedeem: convertToMicroUnits(params.amountToRedeem),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
                targetVault: params.targetVault,
            });
            return res;
        });
    }
    /**
     * Propose the address of a vault that could be redeemable, to qualify the
     * vault must be 'less healthy' than any of the other proposed vaults, or
     * there must be a free slot.
     * @param params Address of vault to propose, and target vault contract.
     * @returns A boolean indicating success of call.
     */
    proposeVaultForRedemption(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultRedeemer;
            const res = yield put.proposeVault(params.address);
            return res;
        });
    }
    /**
     *
     * @param params Contains the new price and the vault whose price should be updated
     * @returns A boolean indicating if the price was successfully updated or not
     */
    updatePrice(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.Oracle;
            const res = yield put.updatePrice(convertToMicroUnits(params.price));
            return res;
        });
    }
    /**
     *
     * @param params Contains the amount of xUsd tokens to be minted, the vault in which the token should be minted,
     * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the xUsd tokens were successfully minted or not
     */
    mintToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultOwner;
            const res = yield put.mintToken({
                newVaultDebt: convertToMicroUnits(params.amount),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
            });
            return res;
        });
    }
    /**
     *
     * @param params Contains the amount of tokens to be deposited as collateral as well as the vault
     * @returns A boolean indicating if the collateral was deposited successfully
     */
    depositCollateral(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultOwner;
            const res = yield put.depositCollateral(convertToMicroUnits(params.amount, params.vault.asaVault ? params.vault.asaVault.decimals : undefined));
            return res;
        });
    }
    /**
     *
     * @param params Contains amount of collateral to be withdrawn, the vault they should be withdrawn from,
     * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the collaterals were successfully withdrawn or not
     */
    withdrawCollateral(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultOwner;
            const res = yield put.withdrawCollateral({
                collateralToWithdraw: convertToMicroUnits(params.amount, params.vault.asaVault ? params.vault.asaVault.decimals : undefined),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
            });
            return res;
        });
    }
    /**
     *
     * @param params An object with key amount signifying the amount of debt tokens
     *  to return, key vault indicating the Contract and key close indicating if the vault should be closed
     * @returns A boolean indicating if the vault debt was returned or not
     */
    returnVaultDebt(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultOwner;
            const res = yield put.returnVaultDebt({
                amountToReturn: params.close ? 0 : convertToMicroUnits(params.amount),
                close: params.close ? params.close : false,
                address: params.address,
            });
            return res;
        });
    }
    /**
     * Used to get the state of the contract
     * @param params An object with key vault that indicates the contract whose state is to be retrieved
     * @returns The state of the vault of type [[VaultReturnParams]]
     */
    getVaultState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            return yield params.vault.getState({ account: this });
        });
    }
    getVaultAnalytics(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const globalState = yield params.vault.getState({ account: this });
            const { accruedFees, collateralPrice } = globalState.coldState;
            const { accruedInterest } = globalState.hotState;
            if (Object.keys(VAULTS[this.network]).includes(params.vault.name)) {
                const vaultDetails = VAULTS[this.network][params.vault.name];
                const collateralAssetId = vaultDetails.assetId ? vaultDetails.assetId : 0;
                const vaultAddress = algosdk.getApplicationAddress(vaultDetails.vaultId);
                const collateralBalance = yield this.getOtherBalance({ tokenId: collateralAssetId, address: vaultAddress });
                const debtBalance = yield this.getOtherBalance({ tokenId: params.stbl, address: vaultAddress });
                const totalValueLocked = (collateralBalance * collateralPrice) /
                    Math.pow(10, (vaultDetails.assetDecimals === undefined ? 6 : vaultDetails.assetDecimals));
                const accounts = yield getAllAccounts(
                // application ID
                vaultDetails.vaultId, params.indexer, [], '');
                // const vaultData = accounts.map((vaultAccount) => {
                //   try {
                //     return this.getUserInfo({ address: addrFromBox(vaultAccount), vault: params.vault });
                //   } catch (error) {
                //     return { error };
                //   }
                // });
                // const resolvedVaultData = await Promise.all(vaultData);
                const totalVaultDebt = globalState.hotState.totalVaultDebt;
                const totalVaultsGotten = accounts.length;
                const totalSystemCr = (totalValueLocked / totalVaultDebt) * 1000000;
                return {
                    totalValueLocked,
                    totalSystemCr,
                    accruedFees,
                    accruedInterest,
                    collateralPrice,
                    totalNumberOfVaults: totalVaultsGotten,
                    stableSupplyRemaining: debtBalance,
                    totalVaultDebt,
                    isDeprecated: globalState.coldState.contractState === 1,
                };
            }
            else {
                throw Error('not a valid vault');
            }
        });
    }
    /**
     * Used to create a vault in the contract
     * @param params Contains keys collateral that indicates the amount of collateral that will be used to create the vault,
     * mintAmount that indicates the amount of xusd tokens to be minted, vault that indicates the contract we are
     * communicating with, minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
     * indicates the maximum price allowed for this transaction
     * @returns A boolean indicating if the vault was created or not
     */
    createVault(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.VaultOwner;
            const res = yield put.createVault({
                initialCollateral: convertToMicroUnits(params.collateral, params.vault.asaVault ? params.vault.asaVault.decimals : undefined),
                initialVaultDebt: convertToMicroUnits(params.mintAmount),
                minPrice: convertToMicroUnits(params.minimumPrice),
                maxPrice: convertToMicroUnits(params.maximumPrice),
            });
            return res;
        });
    }
    halt(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.Any;
            const res = yield put.halt();
            return res;
        });
    }
    /**
     * Used by an account to collect fees from the contract
     * @param params Contains key vault which indicates the contract this function should interact with
     * @returns A boolean indicating of fees were collected or not
     */
    collectFees(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.FeeCollector;
            const res = yield put.collectFees();
            return res;
        });
    }
    /**
     * Will trigger interest to accrue on a specific user vault
     * @param params Contains address of vault to accrue interest for. Also includes vault which indicates the contract this function should interact with.
     * @returns A boolean indicating of fees were collected or not
     */
    dripInterest(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.FeeCollector;
            const res = yield put.dripInterest(params.address);
            return res;
        });
    }
    /**
     *
     * @param params Contains key address which indicates the vault we want to retrieve the info of as well as key vault that indicates the contract we want to interact with
     * @returns the information for the specified vault
     */
    getUserInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const userVault = yield params.vault.getUserInfo({ account: this, address: params.address });
            // NOTE: does not account for leap year
            const vaultState = yield this.getVaultState({ vault: params.vault });
            const VAULT_INTEREST_RATE = vaultState.VAULT_INTEREST_RATE;
            const now = yield this.reachStdLib.getNetworkSecs();
            const interestAccrued = calculateInterestAccrued(now.toNumber(), userVault.lastAccruedInterestTime, userVault.vaultDebt, VAULT_INTEREST_RATE ? VAULT_INTEREST_RATE : 2000000000);
            userVault.vaultDebt += interestAccrued;
            return userVault;
        });
    }
    /**
     * Subscribes to all vault events and calls the provided callbacks when the event is fired
     * @param params An object that contains key vaultId, key createCallback and key transactionCallback
     */
    subscribeToEvents(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const announcer = ctc.e.Announcer;
            if (params.createCallback !== undefined) {
                yield announcer.vaultCreated.seekNow();
                announcer.vaultCreated.monitor((event) => {
                    const address = this.reachStdLib.formatAddress(event.what[0]);
                    const rawVaultState = event.what[1];
                    const vaultState = Object.assign({ vaultFound: true }, Vault.parseUserInfo(rawVaultState));
                    params.createCallback(address, vaultState);
                });
            }
            if (params.transactionCallback) {
                yield announcer.vaultTransaction.seekNow();
                announcer.vaultTransaction.monitor((event) => {
                    const address = this.reachStdLib.formatAddress(event.what[0]);
                    const rawVaultState = event.what[2];
                    const vaultState = Object.assign({ vaultFound: true }, Vault.parseUserInfo(rawVaultState));
                    params.transactionCallback(address, vaultState);
                });
            }
        });
    }
    /**
     * Used to relplenish the supply on the treasury address
     * @param params An object that contains the supply amount and the target [[Vault]].
     * @returns A boolean indicating if the supply was replenished or not
     */
    replenishSupply(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.AdminAPI;
            const res = yield put.replenishSupply(convertToMicroUnits(params.supplyAmt));
            return res;
        });
    }
    /**
     * Used to set the admin properties of a vault
     * @param params An object that contains an [[AdminProperties]] object and the target [[Vault]].
     * @returns A boolean indicating if the properties were set or not
     */
    setAdminProperties(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.AdminAPI;
            params.adminProperties.minimumDebtAmount = convertToMicroUnits(params.adminProperties.minimumDebtAmount);
            params.adminProperties.maximumCollateralValue = convertToMicroUnits(params.adminProperties.maximumCollateralValue);
            const res = yield put.setAdminProperties(params.adminProperties);
            return res;
        });
    }
    /**
     * Used to update the admin address of a vault
     * @param params An object that contains an address and the target [[Vault]].
     * @returns A boolean indicating if the address was updated.
     */
    updateAdminAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.vault.backend, params.vault.id);
            const put = ctc.a.AdminAPI;
            const res = yield put.updateAdminAddress(params.address);
            return res;
        });
    }
}
//# sourceMappingURL=VaultsClient.js.map