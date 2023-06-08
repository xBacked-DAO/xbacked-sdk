// @ts-ignore
import { vault as vaultBackend, stabilityPool } from '@xbacked-dao/xbacked-contracts';
import { decodeAddress, encodeAddress } from 'algosdk';

const AMOUNT_OF_SECONDS_IN_YEAR = 31536000;
const INTEREST_RATE_DENOMINATOR = 100000000000;

// The contract will round up to the next integer so 119.x will give 120%
// This is the closest we can get without having problems from
// float conversion. (CONTRACT MINIMUM - 1)
const MINIMUM_COLLATERAL_RATIO = 1.2;

export const VAULTS = {
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
      assetDecimals: 6
    },
  },
};

/**
 * Converts number to microunits
 * @param val Number to be converted to microunits
 * @returns Number that has been converted to microunits
 */
export const convertToMicroUnits = (val: number, decimals = 6): number => {
  if (Number.isNaN(val) || !val) throw Error('Invalid input given');
  return Math.abs(Math.floor(val * 10 ** decimals));
};
/**
 * Converts number from microunits
 * @param val Number to be converted from microunits
 * @returns Number that has been converted from microunits
 */
export const convertFromMicroUnits = (val: number, decimals = 6): number => {
  return val / 10 ** decimals;
};

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
export const calcMaxDebtPayout = (
  collateral: number,
  collateralPrice: number,
  vaultDebt: number,
  decimals: number,
  minimumCollateralRatio: number,
  discountRate: number,
) => {
  minimumCollateralRatio = minimumCollateralRatio / 10 ** 6;
  const discountAmt = Math.floor(collateralPrice * discountRate);
  const discountPrice = collateralPrice - discountAmt;
  const discountedCollateralValue = (collateral * discountPrice) / 10 ** decimals;

  const maxDebtPayout = Math.abs(
    Math.floor(
      (discountedCollateralValue -
        minimumCollateralRatio * vaultDebt +
        minimumCollateralRatio * discountRate * vaultDebt) /
        (-minimumCollateralRatio + minimumCollateralRatio * discountRate + 1),
    ),
  );

  return maxDebtPayout;
};

/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param vaultDebt Vault debt in micro units
 * @returns The vaults current collateral ratio in decimal form (1 = 100%)
 */
export const calcCollateralRatio = (
  collateral: number,
  collateralPrice: number,
  vaultDebt: number,
  decimals: number,
): number => {
  const MICRO_UNITS = 10 ** decimals;
  return (collateral * collateralPrice) / MICRO_UNITS / vaultDebt;
};

/**
 *
 * @param collateralPrice Collateral price in micro units
 * @returns The discount price for a liquidation in micro units
 */
export const calcDiscountPrice = (collateralPrice: number, DISCOUNT_RATE: number): number => {
  return collateralPrice - collateralPrice * DISCOUNT_RATE;
};
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param debtPayout Debt Payout in micro units
 * @param vaultDebt Vault Debt in micro units
 * @returns Collateral ratio in decimal form (1 = 100%)
 */
export const calcCollateralRatioAfterLiquidation = (
  collateral: number,
  collateralPrice: number,
  debtPayout: number,
  vaultDebt: number,
  decimals: number,
  DISCOUNT_RATE: number,
): number => {
  const MICRO_UNITS = 10 ** decimals;
  const discountPrice = calcDiscountPrice(collateralPrice, DISCOUNT_RATE);
  const collateralAfterLiquidation = collateral - convertToMicroUnits(debtPayout / discountPrice, decimals);
  const collateralValueAfterLiquidation = collateralAfterLiquidation * collateralPrice;
  const crAfterLiq = ((collateralValueAfterLiquidation / MICRO_UNITS) * 100) / (vaultDebt - debtPayout);
  return crAfterLiq;
};

/**
 * Recursive function to collect all accounts opted into a given application id
 * @param indexer The algosdk indexer client
 * @param accounts Current accounts collected
 * @param nextToken Next token to use with paginaiton
 * @returns Array of all accounts opted into a vault applicaiton
 */

export const getAllAccounts = async (
  applicationId: number,
  indexer: any,
  accounts: any[],
  nextToken: string,
): Promise<any[]> => {
  if (accounts.length > 0 && nextToken) {
    const retrievedVaults = await indexer.searchForApplicationBoxes(applicationId).nextToken(nextToken).do();
    const updatedAccounts = accounts.concat(retrievedVaults.accounts);
    return getAllAccounts(applicationId, indexer, updatedAccounts, retrievedVaults['next-token']);
    // eslint-disable-next-line
  } else if (accounts.length > 0 && !nextToken) {
    return Promise.resolve(accounts);
  }
  const initialVaults = await indexer.searchForApplicationBoxes(applicationId).do();
  return getAllAccounts(applicationId, indexer, initialVaults.boxes, initialVaults['next-token']);
};

export const calculateInterestAccrued = (
  now: number,
  lastAccruedInterestTime: number,
  vaultDebt: number,
  VAULT_INTEREST_RATE: number,
) => {
  const amountOfTimePassed = now - lastAccruedInterestTime;
  const interestRatePerSecond = VAULT_INTEREST_RATE / AMOUNT_OF_SECONDS_IN_YEAR;
  const interestRateOverTimePassed = interestRatePerSecond * amountOfTimePassed;
  const interestAccrued = (interestRateOverTimePassed * vaultDebt) / INTEREST_RATE_DENOMINATOR;
  return interestAccrued;
};

// Reach encodes box names following this method: https://docs.reach.sh/networks/#p_8
export const addrFromBox = (box: any) => {
  // need to deep copy because otherwise the origial box will be mutated, which the user may not expect
  const deepCopy = new Uint8Array(box.name.toString().split(','));
  // reverse the bytes so the MapIndex is the last byte
  deepCopy.reverse();
  // remove the last byte in the array
  const addrBytes = deepCopy.slice(0, -1);
  // reverse back to original order
  addrBytes.reverse();
  return encodeAddress(addrBytes);
};

export const addrToBox = (addr: string) => {
  const addrBytes = decodeAddress(addr).publicKey;
  // add a byte to the first position of the array indicating the MapIndex
  // Reach encodes box names following this method: https://docs.reach.sh/networks/#p_8
  const boxBytes = new Uint8Array([0, ...addrBytes]);
  return Buffer.from(boxBytes).toString('base64');
};

export const backends = {
  vault: vaultBackend,
  stabilityPool,
};
