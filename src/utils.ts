const MICRO_UNITS = 1000000;

export const DISCOUNT_RATE = 0.035;
export const LIQUIDATION_FEE = 0.025;

// The contract will round up to the next integer so 119.x will give 120%
// This is the closest we can get without having problems from
// float conversion. (CONTRACT MINIMUM - 1)
const MINIMUM_COLLATERAL_RATIO = 119;

export const convertToMicroUnits = (val: number): number => {
  if (Number.isNaN(val) || !val) throw Error('Invalid input given');
  return Math.abs(Math.floor(val * MICRO_UNITS))
};

export const convertFromMicroUnits = (val: number): number => {
  return val / MICRO_UNITS;
};

// Calculates the max amount of debt you can pay to drive the CR
// back to 120, considering collateral goes down on each liquidation.
// The formula solves for the max debt payout using the formula for calculating collateralRatio in the contract
// given that we know it needs to be 120 minimum. Where:
// m = masDebtPayout, c = collateral, p = collateralPrice, d = vaultDebt, r = MINIMUM_COLLATERAL_RATIO = 120, 0.035 = DISCOUNT_RATE
// https://www.symbolab.com/solver/equation-calculator/solve%20for%20m%2C%20r%20%3D%20%5Cfrac%7B%5Cleft(%5Cleft(c%20-%5Cleft(%5Cfrac%7Bm%7D%7B%5Cleft(p%20-%20%5Cleft(p%5Ccdot0.035%5Cright)%5Cright)%7D%20%5Cright)%5Cright)%5Ccdot%20p%5Ccdot100%5Cright)%7D%7Bd%20-%20m%7D?or=input
export const calcMaxDebtPayout = (collateral: number, collateralPrice: number, vaultDebt: number): number => {
  const discountRateInv = 1 - DISCOUNT_RATE;
  return Math.floor(
    ((discountRateInv * 100 * collateral * collateralPrice) / MICRO_UNITS -
      discountRateInv * MINIMUM_COLLATERAL_RATIO * vaultDebt) /
      (-discountRateInv * MINIMUM_COLLATERAL_RATIO + 100),
  );
};

export const calcCollateralRatio = (collateral: number, collateralPrice: number, vaultDebt: number): number => {
  return (((collateral * collateralPrice) / MICRO_UNITS)) / vaultDebt;
};

export const calcDiscountPrice = (collateralPrice: number): number => {
  return collateralPrice - collateralPrice * DISCOUNT_RATE;
};

export const calcCollateralRatioAfterLiquidation = (
  collateral: number,
  collateralPrice: number,
  debtPayout: number,
  vaultDebt: number,
): number => {
  const discountPrice = calcDiscountPrice(collateralPrice);
  return (
    ((((collateral - convertToMicroUnits(debtPayout / discountPrice)) * collateralPrice) / MICRO_UNITS) * 100) /
    (vaultDebt - debtPayout)
  );
};
