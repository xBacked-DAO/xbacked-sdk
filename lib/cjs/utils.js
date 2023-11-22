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
exports.backends = exports.addrToBox = exports.addrFromBox = exports.calculateInterestAccrued = exports.getAllAccounts = exports.calcCollateralRatioAfterLiquidation = exports.calcDiscountPrice = exports.calcCollateralRatio = exports.calcMaxDebtPayout = exports.convertFromMicroUnits = exports.convertToMicroUnits = exports.VAULTS = void 0;
// @ts-ignore
const xbacked_contracts_1 = require("@xbacked-dao/xbacked-contracts");
const algosdk_1 = require("algosdk");
const AMOUNT_OF_SECONDS_IN_YEAR = 31536000;
const INTEREST_RATE_DENOMINATOR = 100000000000;
// The contract will round up to the next integer so 119.x will give 120%
// This is the closest we can get without having problems from
// float conversion. (CONTRACT MINIMUM - 1)
const MINIMUM_COLLATERAL_RATIO = 1.2;
exports.VAULTS = {
    TestNet: {
        // default decimals are 6 -> which scales to 1e6 (1e6 microAlgos = 1 Algo)
        algo: {
            vaultId: 152242747,
            liquidatorDiscount: 0.045,
        },
        gAlgo: {
            vaultId: 159615312,
            liquidatorDiscount: 0.1,
            assetId: 159613406,
            assetDecimals: 6,
        },
        meldGold: {
            vaultId: 228836290,
            liquidatorDiscount: 0.1,
            assetId: 228836101,
            assetDecimals: 6,
            z_p_f_vault_asa: true,
        },
        silver$: {
            vaultId: 230690513,
            liquidatorDiscount: 0.01,
            assetId: 230686227,
            assetDecimals: 6,
            z_p_f_vault_asa: true,
        },
        goBtc: {
            vaultId: 240036244,
            liquidatorDiscount: 0.05,
            assetId: 239570832,
            assetDecimals: 8,
            large_cp_vault_asa: true,
        },
        goEth: {
            vaultId: 240034480,
            liquidatorDiscount: 0.05,
            assetId: 239571365,
            assetDecimals: 8,
            large_cp_vault_asa: true,
        },
        newAlgo: {
            vaultId: 481069338,
            liquidatorDiscount: 0.05,
            new_algo_vault: true,
        },
        newGAlgo: {
            vaultId: 481065403,
            liquidatorDiscount: 0.1,
            assetId: 159613406,
            assetDecimals: 6,
        },
        newMeldGold: {
            vaultId: 481066526,
            liquidatorDiscount: 0.1,
            assetId: 228836101,
            assetDecimals: 6,
            new_asa_vault: true,
        },
        newSilver$: {
            vaultId: 481069084,
            liquidatorDiscount: 0.01,
            assetId: 230686227,
            assetDecimals: 6,
            new_asa_vault: true,
        },
        newGoBtc: {
            vaultId: 481065574,
            liquidatorDiscount: 0.05,
            assetId: 239570832,
            assetDecimals: 8,
            new_asa_vault: true,
        },
        newGoEth: {
            vaultId: 481065791,
            liquidatorDiscount: 0.05,
            assetId: 239571365,
            assetDecimals: 8,
            new_asa_vault: true,
        },
    },
    MainNet: {
        algo: {
            vaultId: 1012903350,
            liquidatorDiscount: 0.05,
        },
        gAlgo: {
            vaultId: 1065042555,
            liquidatorDiscount: 0.1,
            assetId: 793124631,
            assetDecimals: 6,
        },
        meldGold: {
            vaultId: 1119611603,
            liquidatorDiscount: 0.05,
            assetId: 246516580,
            assetDecimals: 6,
            z_p_f_vault_asa: true,
        },
        silver$: {
            vaultId: 1120776512,
            liquidatorDiscount: 0.05,
            assetId: 246519683,
            assetDecimals: 6,
            z_p_f_vault_asa: true,
        },
        goBtc: {
            vaultId: 1127025818,
            liquidatorDiscount: 0.05,
            assetId: 386192725,
            assetDecimals: 8,
            large_cp_vault_asa: true,
        },
        goEth: {
            vaultId: 1127031775,
            liquidatorDiscount: 0.05,
            assetId: 386195940,
            assetDecimals: 8,
            large_cp_vault_asa: true,
        },
    },
};
/**
 * Converts number to microunits
 * @param val Number to be converted to microunits
 * @returns Number that has been converted to microunits
 */
const convertToMicroUnits = (val, decimals = 6) => {
    if (Number.isNaN(val) || !val)
        throw Error('Invalid input given');
    return Math.abs(Math.floor(val * Math.pow(10, decimals)));
};
exports.convertToMicroUnits = convertToMicroUnits;
/**
 * Converts number from microunits
 * @param val Number to be converted from microunits
 * @returns Number that has been converted from microunits
 */
const convertFromMicroUnits = (val, decimals = 6) => {
    return val / Math.pow(10, decimals);
};
exports.convertFromMicroUnits = convertFromMicroUnits;
// Calculates the max amount of debt you can pay to drive the CR
// back to 120, considering collateral goes down on each liquidation.
// The formula solves for the max debt payout using the formula for calculating collateralRatio in the contract
// given that we know it needs to be 120 minimum. Where:
// m = masDebtPayout, c = collateral, p = collateralPrice, d = vaultDebt, r = MINIMUM_COLLATERAL_RATIO = 120, 0.035 = DISCOUNT_RATE
// https://www.symbolab.com/solver/equation-calculator/solve%20for%20m%2C%20r%20%3D%20%5Cfrac%7B%5Cleft(%5Cleft(c%20-%5Cleft(%5Cfrac%7Bm%7D%7B%5Cleft(p%20-%20%5Cleft(p%5Ccdot0.035%5Cright)%5Cright)%7D%20%5Cright)%5Cright)%5Ccdot%20p%5Ccdot100%5Cright)%7D%7Bd%20-%20m%7D?or=input
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Current collateral price in micro units
 * @param vaultDebt Vault debt in micro units
 * @param decimals the amount of decimals the ASA has, default is 6
 * @param minimumCollateralRatio the maximum CR liquidations can take a vault to
 * @param discountRate the vault discount rate
 * @returns The maximum amount of debt you can pay to drive the CR back to 120%, considering collateral goes down on each liquidation.
 */
const calcMaxDebtPayout = (collateral, collateralPrice, vaultDebt, decimals, minimumCollateralRatio, discountRate) => {
    minimumCollateralRatio = minimumCollateralRatio / Math.pow(10, 6);
    const discountAmt = Math.floor(collateralPrice * discountRate);
    const discountPrice = collateralPrice - discountAmt;
    const discountedCollateralValue = (collateral * discountPrice) / Math.pow(10, decimals);
    const maxDebtPayout = Math.abs(Math.floor((discountedCollateralValue -
        minimumCollateralRatio * vaultDebt +
        minimumCollateralRatio * discountRate * vaultDebt) /
        (-minimumCollateralRatio + minimumCollateralRatio * discountRate + 1)));
    return maxDebtPayout;
};
exports.calcMaxDebtPayout = calcMaxDebtPayout;
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param vaultDebt Vault debt in micro units
 * @returns The vaults current collateral ratio in decimal form (1 = 100%)
 */
const calcCollateralRatio = (collateral, collateralPrice, vaultDebt, decimals) => {
    const MICRO_UNITS = Math.pow(10, decimals);
    return (collateral * collateralPrice) / MICRO_UNITS / vaultDebt;
};
exports.calcCollateralRatio = calcCollateralRatio;
/**
 *
 * @param collateralPrice Collateral price in micro units
 * @returns The discount price for a liquidation in micro units
 */
const calcDiscountPrice = (collateralPrice, DISCOUNT_RATE) => {
    return collateralPrice - collateralPrice * DISCOUNT_RATE;
};
exports.calcDiscountPrice = calcDiscountPrice;
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param debtPayout Debt Payout in micro units
 * @param vaultDebt Vault Debt in micro units
 * @returns Collateral ratio in decimal form (1 = 100%)
 */
const calcCollateralRatioAfterLiquidation = (collateral, collateralPrice, debtPayout, vaultDebt, decimals, DISCOUNT_RATE) => {
    const MICRO_UNITS = Math.pow(10, decimals);
    const discountPrice = (0, exports.calcDiscountPrice)(collateralPrice, DISCOUNT_RATE);
    const collateralAfterLiquidation = collateral - (0, exports.convertToMicroUnits)(debtPayout / discountPrice, decimals);
    const collateralValueAfterLiquidation = collateralAfterLiquidation * collateralPrice;
    const crAfterLiq = ((collateralValueAfterLiquidation / MICRO_UNITS) * 100) / (vaultDebt - debtPayout);
    return crAfterLiq;
};
exports.calcCollateralRatioAfterLiquidation = calcCollateralRatioAfterLiquidation;
/**
 * Recursive function to collect all accounts opted into a given application id
 * @param indexer The algosdk indexer client
 * @param accounts Current accounts collected
 * @param nextToken Next token to use with paginaiton
 * @returns Array of all accounts opted into a vault applicaiton
 */
const getAllAccounts = (applicationId, indexer, accounts, nextToken) => __awaiter(void 0, void 0, void 0, function* () {
    if (accounts.length > 0 && nextToken) {
        const retrievedVaults = yield indexer.searchForApplicationBoxes(applicationId).nextToken(nextToken).do();
        const updatedAccounts = accounts.concat(retrievedVaults.accounts);
        return (0, exports.getAllAccounts)(applicationId, indexer, updatedAccounts, retrievedVaults['next-token']);
        // eslint-disable-next-line
    }
    else if (accounts.length > 0 && !nextToken) {
        return Promise.resolve(accounts);
    }
    const initialVaults = yield indexer.searchForApplicationBoxes(applicationId).do();
    return (0, exports.getAllAccounts)(applicationId, indexer, initialVaults.boxes, initialVaults['next-token']);
});
exports.getAllAccounts = getAllAccounts;
const calculateInterestAccrued = (now, lastAccruedInterestTime, vaultDebt, VAULT_INTEREST_RATE) => {
    const amountOfTimePassed = now - lastAccruedInterestTime;
    const interestRatePerSecond = VAULT_INTEREST_RATE / AMOUNT_OF_SECONDS_IN_YEAR;
    const interestRateOverTimePassed = interestRatePerSecond * amountOfTimePassed;
    const interestAccrued = (interestRateOverTimePassed * vaultDebt) / INTEREST_RATE_DENOMINATOR;
    return interestAccrued;
};
exports.calculateInterestAccrued = calculateInterestAccrued;
// Reach encodes box names following this method: https://docs.reach.sh/networks/#p_8
const addrFromBox = (box) => {
    // need to deep copy because otherwise the origial box will be mutated, which the user may not expect
    const deepCopy = new Uint8Array(box.name.toString().split(','));
    // reverse the bytes so the MapIndex is the last byte
    deepCopy.reverse();
    // remove the last byte in the array
    const addrBytes = deepCopy.slice(0, -1);
    // reverse back to original order
    addrBytes.reverse();
    return (0, algosdk_1.encodeAddress)(addrBytes);
};
exports.addrFromBox = addrFromBox;
const addrToBox = (addr) => {
    const addrBytes = (0, algosdk_1.decodeAddress)(addr).publicKey;
    // add a byte to the first position of the array indicating the MapIndex
    // Reach encodes box names following this method: https://docs.reach.sh/networks/#p_8
    const boxBytes = new Uint8Array([0, ...addrBytes]);
    return Buffer.from(boxBytes).toString('base64');
};
exports.addrToBox = addrToBox;
exports.backends = {
    vault: xbacked_contracts_1.vault,
    stabilityPool: xbacked_contracts_1.stabilityPool,
};
//# sourceMappingURL=utils.js.map