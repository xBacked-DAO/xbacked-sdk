'reach 0.1';
'use strict';

// All calculations in this file are and should be based on the whitepaper.
import { tryDiv, trySub, tryMul } from '@xBacked-DAO/reach-safe-math';

// Margin of safety for minting / before liquidation.
export const LIQUIDATION_THRESHOLD = 80;

// A minter may not mint new stablecoin when their vault's collateral ratio is
// below 110%.
export const MINIMUM_COLLATERAL_RATIO = 110;

// Vaults must be above this limit when created and for withdrawals or minting
// actions Collateral limit = 120%.
export const COLLATERAL_LIMIT = 120;

// Minimum vault health.
export const MINIMUM_HEALTH_FACTOR = 1;

// Utility function to convert constants back to normal values.
const mult = (v, constantMultiplied) => (v * constantMultiplied) / 100;

// NOTE:
// collateral must be the dollar value, not coin value
// outstandingDebt must also be the dollar value
export const MICRO_UNITS = 1000000;

// Adding the MICRO_ALGOS causes a bug for the mint amount?!
// Tom: What bug? explain!
export const convertFromMicroUnits = (amt) => tryDiv(amt, MICRO_UNITS);
export const convertToMicroUnits = (amt) => amt * MICRO_UNITS;

// Collateral ratio of a vault.
export const calcCollateralRatio = (collateral, outstandingDebt) =>
  tryDiv(tryMul(collateral, 100), outstandingDebt);

// Minting capacity of a vault this is the total limit up to a safe level.
export const mintingCapacity = (collateral) =>
  mult(collateral, LIQUIDATION_THRESHOLD);

// The maximum amount a minter can mint.
export const maximumMint = (collateral, outstandingDebt) => {
  const bc = mintingCapacity(collateral);
  // If negative number, return 0 to prevent bigNumberify out of range errors.
  return trySub(bc, outstandingDebt);
};

// The health factor of a vault when below MINIMUM_HEALTH_FACTOR the vault is
// available for liquidation.
export const healthFactor = (collateral, outstandingDebt) => {
  const bc = mintingCapacity(collateral);
  return tryDiv(bc, outstandingDebt);
};

// The maximum withdrawal of collateral a minter can make when returning
// stablecoin to the vault.
export const calcMaximumWithdrawal = (collateral, outstandingDebt) => {
  // NOTE: unsure if scaling this is the correct thing to do, but it seems to work
  const scaledCollateralLimit = tryDiv(COLLATERAL_LIMIT, 10);
  const debtFloor = tryMul(outstandingDebt, scaledCollateralLimit);
  const scaledDebtFloor = tryDiv(debtFloor, 100);
  return trySub(collateral, scaledDebtFloor);
};

// What happens when both the number of coins and the current coin price are
// < 1?
// Returns the dollar amount of the supplied coin.
export const tokenDollarValue = (coins, coinPrice) =>
  (coins * coinPrice) / MICRO_UNITS;

// NOTE: this does not currently work, but it is close
// Inspired by: https://ethereum.stackexchange.com/questions/15090/cant-do-any-integer-division/15091#15091
export const dollarTokenValue = (dollars, coinPrice) => {
  const quotient = dollars / coinPrice;
  const remainder = trySub(dollars, coinPrice) * quotient;
  return quotient + remainder;
};

// WARN: UNTESTED
export const valueOfLiquidatedCollateral = (
  outstandingDebt,
  liquidatorDiscount
) => outstandingDebt * (100 - liquidatorDiscount);

export const calculateMintingFee = (mintAmount) =>
  tryDiv(tryMul(5, mintAmount), 1000);

export const calculateLiquidationFee = (debt) => tryDiv(tryMul(25, debt), 1000);

export const calculateRedemptionFee = (amountOfXusdToRedeem) =>
  mult(2, amountOfXusdToRedeem);