// @ts-ignore
import { vault as vaultBackend, stabilityPool } from '@xbacked-dao/xbacked-contracts';
import { decodeAddress, encodeAddress } from 'algosdk';
import { deprecate } from 'node:util';

const AMOUNT_OF_SECONDS_IN_YEAR = 31536000;
const INTEREST_RATE_DENOMINATOR = 100000000000;

// The contract will round up to the next integer so 119.x will give 120%
// This is the closest we can get without having problems from
// float conversion. (CONTRACT MINIMUM - 1)
const MINIMUM_COLLATERAL_RATIO = 1.2;

export const VAULTS = {
  TestNet: {
    oldAlgo: {
      vaultId: 152242747,
      liquidatorDiscount: 0.045,
      new_algo_vault: true,
      new_asa_vault: false,
      assetDecimals: undefined,
      new_sdc_vault: false,
    },
    // default decimals are 6 -> which scales to 1e6 (1e6 microAlgos = 1 Algo)
    algo: {
      vaultId: 481069338,
      liquidatorDiscount: 0.05,
      new_algo_vault: true,
      new_asa_vault: false,
      assetDecimals: undefined,
      new_sdc_vault: false,
    },
    gAlgo: {
      vaultId: 481065403,
      liquidatorDiscount: 0.1,
      assetId: 159613406,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    meldGold: {
      vaultId: 481066526,
      liquidatorDiscount: 0.1,
      assetId: 228836101,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    silver$: {
      vaultId: 481069084,
      liquidatorDiscount: 0.1,
      assetId: 230686227,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    goBtc: {
      vaultId: 481065574,
      liquidatorDiscount: 0.05,
      assetId: 239570832,
      assetDecimals: 8,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    goEth: {
      vaultId: 481065791,
      liquidatorDiscount: 0.05,
      assetId: 239571365,
      assetDecimals: 8,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    wrappedSol: {
      vaultId: 494111992,
      assetId: 494098494,
      assetDecimals: 8,
      new_asa_vault: true,
      liquidatorDiscount: 0.05,
      new_sdc_vault: false,
    },
    wrappedAvax: {
      vaultId: 503183655,
      assetId: 503109996,
      assetDecimals: 8,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    mAlgo: {
      vaultId: 576268296,
      liquidatorDiscount: 0.1,
      assetId: 576151225,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },

    link: {
      assetId: 586271698,
      assetDecimals: 8,
      deprecated: true,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      vaultId: 586275700,
      new_sdc_vault: false,
    },
    coop: {
      assetId: 592331972,
      vaultId: 592332280,
      assetDecimals: 6,
      liquidatorDiscount: 0.3,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    finite: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 8,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    fAlgo: {
      vaultId: 2286490147,
      assetId: 760037151,
      assetDecimals: 6,
      liquidatorDiscount: 0.1,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    lfty0314: {
      // vaultId: 724068982,
      // assetId: 282176294,
      vaultId: 724638429,
      assetId: 723056963,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    xAlgo: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      liquidatorDiscount: 0.1,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    lfty0305: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    compx: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      liquidatorDiscount: 0.15,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    ora: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 8,
      liquidatorDiscount: 0.15,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    akita: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    pepe: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 4,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    defly: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.3,
      new_sdc_vault: false,
    },
    gora: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 9,
      new_asa_vault: true,
      liquidatorDiscount: 0.3,
      new_sdc_vault: false,
    },
    tAlgo: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      new_asa_vault: true,
      liquidatorDiscount: 0,
      new_sdc_vault: false,
    },
    tiny: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      new_asa_vault: true,
      liquidatorDiscount: 0,
      new_sdc_vault: false,
    },
    cAlgo: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      new_asa_vault: true,
      liquidatorDiscount: 0,
      new_sdc_vault: false,
    },
    lfty0419: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    monkoALGO: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    alphaALGO: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    oraALGO: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    coopALGO: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
     lfty0432: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0411: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0433: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0443: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    pow: {
      vaultId: 0,
      assetId: 0,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    }

  },
  MainNet: {
    oldAlgo: {
      vaultId: 1012903350,
      liquidatorDiscount: 0.05,
      deprecated: true,
      new_asa_vault: false,
      assetDecimals: undefined,
      new_sdc_vault: false,
    },
    algo: {
      vaultId: 1256063618,
      liquidatorDiscount: 0.05,
      new_algo_vault: true,
      new_asa_vault: false,
      assetDecimals: undefined,
      new_sdc_vault: false,
    },
    gAlgo: {
      vaultId: 1256065446,
      liquidatorDiscount: 0.1,
      assetId: 793124631,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    meldGold: {
      vaultId: 1256066865,
      liquidatorDiscount: 0.05,
      assetId: 246516580,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    silver$: {
      vaultId: 1256070920,
      liquidatorDiscount: 0.05,
      assetId: 246519683,
      assetDecimals: 6,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    goBtc: {
      vaultId: 1256072093,
      liquidatorDiscount: 0.05,
      assetId: 386192725,
      assetDecimals: 8,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    goEth: {
      vaultId: 1256073191,
      liquidatorDiscount: 0.05,
      assetId: 386195940,
      assetDecimals: 8,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    wrappedSol: {
      vaultId: 1265849839,
      assetId: 887648583,
      assetDecimals: 8,
      new_asa_vault: true,
      liquidatorDiscount: 0.05,
      new_sdc_vault: false,
    },
    wrappedAvax: {
      vaultId: 1273568518,
      assetId: 893309613,
      assetDecimals: 8,
      new_asa_vault: true,
      liquidatorDiscount: 0.05,
      new_sdc_vault: false,
    },
    mAlgo: {
      vaultId: 1403586486,
      assetId: 1185173782,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    link: {
      vaultId: 1421760711,
      assetId: 1200094857,
      assetDecimals: 8,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    coop: {
      vaultId: 1519754904,
      assetId: 796425061,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.3,
      new_sdc_vault: false,
    },
    finite: {
      vaultId: 2270204323,
      assetId: 400593267,
      assetDecimals: 8,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    fAlgo: {
      vaultId: 2286490147,
      assetId: 971381860,
      assetDecimals: 6,
      liquidatorDiscount: 0.1,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    lfty0314: {
      vaultId: 2382404781,
      assetId: 1283150379,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    xAlgo: {
      vaultId: 2423920940,
      assetId: 1134696561,
      assetDecimals: 6,
      liquidatorDiscount: 0.1,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    lfty0305: {
      vaultId: 2470490520,
      assetId: 1718202069,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    compx: {
      vaultId: 2507754965,
      assetId: 1732165149,
      assetDecimals: 6,
      liquidatorDiscount: 0.15,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    ora: {
      vaultId: 2537481274,
      assetId: 1284444444,
      assetDecimals: 8,
      liquidatorDiscount: 0.15,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    akita: {
      vaultId: 2558726173,
      assetId: 523683256,
      assetDecimals: 6,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    pepe: {
      vaultId: 2584022835,
      assetId: 1096015467,
      assetDecimals: 4,
      liquidatorDiscount: 0.2,
      new_asa_vault: true,
      new_sdc_vault: false,
    },
    defly: {
      vaultId: 2606853130,
      assetId: 470842789,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.3,
      new_sdc_vault: false,
    },
    gora: {
      vaultId: 2629560528,
      assetId: 1138500612,
      assetDecimals: 9,
      new_asa_vault: true,
      liquidatorDiscount: 0.3,
      new_sdc_vault: false,
    },
    tAlgo: {
      vaultId: 2685858209,
      assetId: 2537013734,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    tiny: {
      vaultId: 2685874070,
      assetId: 2200000000,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.2,
      new_sdc_vault: false,
    },
    cAlgo: {
      vaultId: 2703258182,
      assetId: 2400334372,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.05,
      new_sdc_vault: false,
    },
    lfty0419: {
      vaultId: 2952861029,
      assetId: 2688844808,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    monkoALGO: {
      vaultId: 2965407087,
      assetId: 2946655000,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    alphaALGO: {
      vaultId: 2965407870,
      assetId: 2944427000,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    oraALGO: {
      vaultId: 2965408647,
      assetId: 2933559000,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    coopALGO: {
      vaultId: 2965409356,
      assetId: 2933499000,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.1,
      new_sdc_vault: false,
    },
    lfty0432: {
      vaultId: 3111963052,
      assetId: 2669995238,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0411: {
      vaultId: 3111965339,
      assetId: 1909383343,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0433: {
      vaultId: 3111966764,
      assetId: 2589142195,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    lfty0443: {
      vaultId: 3111968276,
      assetId: 2688848184,
      assetDecimals: 0,
      liquidatorDiscount: 0.1,
      new_sdc_vault: true,
      new_asa_vault: false,
    },
    pow: {
      vaultId: 3121140699,
      assetId: 2994233666,
      assetDecimals: 6,
      new_asa_vault: true,
      liquidatorDiscount: 0.05,
      new_sdc_vault: false,
    }
  },
};

export const deprecatedVaults = {
  MainNet: {
    algo: {
      vaultId: 1012903350,
      liquidatorDiscount: 0.05,
      deprecated: true,
    },
    gAlgo: {
      vaultId: 1065042555,
      liquidatorDiscount: 0.1,
      assetId: 793124631,
      assetDecimals: 6,
      deprecated: true,
    },
    meldGold: {
      vaultId: 1119611603,
      liquidatorDiscount: 0.05,
      assetId: 246516580,
      assetDecimals: 6,
      z_p_f_vault_asa: true,
      deprecated: true,
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
      deprecated: true,
    },
    goEth: {
      vaultId: 1127031775,
      liquidatorDiscount: 0.05,
      assetId: 386195940,
      assetDecimals: 8,
      large_cp_vault_asa: true,
      deprecated: true,
    },
    chips: {
      vaultId: 645031001,
      liquidatorDiscount: 0.05,
      assetId: 388592191,
      assetDecimals: 6,
      large_cp_vault_asa: true,
      deprecated: true,
    },
    eurs: {
      assetId: 227855942,
      vaultId: 2213720271,
      assetDecimals: 6,
      liquidatorDiscount: 0.05,
      deprecated: true,
    },
    link: {
      assetId: 586271698,
      assetDecimals: 8,
      liquidatorDiscount: 0.1,
      vaultId: 586275700,
      deprecated: true,
    },
  },
  TestNet: {
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
      liquidatorDiscount: 0.1,
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
  if (initialVaults.boxes.length === 0 && accounts.length === 0) {
    return Promise.resolve(initialVaults.boxes);
  }
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
