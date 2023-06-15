export declare const VAULTS: {
    TestNet: {
        algo: {
            vaultId: number;
            liquidatorDiscount: number;
        };
        gAlgo: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
        };
        meldGold: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            z_p_f_vault_asa: boolean;
        };
        silver$: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            z_p_f_vault_asa: boolean;
        };
        goBtc: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            large_cp_vault_asa: boolean;
        };
        goEth: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            large_cp_vault_asa: boolean;
        };
    };
    MainNet: {
        algo: {
            vaultId: number;
            liquidatorDiscount: number;
        };
        gAlgo: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
        };
        meldGold: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            z_p_f_vault_asa: boolean;
        };
        silver$: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            z_p_f_vault_asa: boolean;
        };
        goBtc: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            large_cp_vault_asa: boolean;
        };
        goEth: {
            vaultId: number;
            liquidatorDiscount: number;
            assetId: number;
            assetDecimals: number;
            large_cp_vault_asa: boolean;
        };
    };
};
/**
 * Converts number to microunits
 * @param val Number to be converted to microunits
 * @returns Number that has been converted to microunits
 */
export declare const convertToMicroUnits: (val: number, decimals?: number) => number;
/**
 * Converts number from microunits
 * @param val Number to be converted from microunits
 * @returns Number that has been converted from microunits
 */
export declare const convertFromMicroUnits: (val: number, decimals?: number) => number;
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
export declare const calcMaxDebtPayout: (collateral: number, collateralPrice: number, vaultDebt: number, decimals: number, minimumCollateralRatio: number, discountRate: number) => number;
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param vaultDebt Vault debt in micro units
 * @returns The vaults current collateral ratio in decimal form (1 = 100%)
 */
export declare const calcCollateralRatio: (collateral: number, collateralPrice: number, vaultDebt: number, decimals: number) => number;
/**
 *
 * @param collateralPrice Collateral price in micro units
 * @returns The discount price for a liquidation in micro units
 */
export declare const calcDiscountPrice: (collateralPrice: number, DISCOUNT_RATE: number) => number;
/**
 *
 * @param collateral Collateral tokens in micro units
 * @param collateralPrice Collateral price in micro units
 * @param debtPayout Debt Payout in micro units
 * @param vaultDebt Vault Debt in micro units
 * @returns Collateral ratio in decimal form (1 = 100%)
 */
export declare const calcCollateralRatioAfterLiquidation: (collateral: number, collateralPrice: number, debtPayout: number, vaultDebt: number, decimals: number, DISCOUNT_RATE: number) => number;
/**
 * Recursive function to collect all accounts opted into a given application id
 * @param indexer The algosdk indexer client
 * @param accounts Current accounts collected
 * @param nextToken Next token to use with paginaiton
 * @returns Array of all accounts opted into a vault applicaiton
 */
export declare const getAllAccounts: (applicationId: number, indexer: any, accounts: any[], nextToken: string) => Promise<any[]>;
export declare const calculateInterestAccrued: (now: number, lastAccruedInterestTime: number, vaultDebt: number, VAULT_INTEREST_RATE: number) => number;
export declare const addrFromBox: (box: any) => string;
export declare const addrToBox: (addr: string) => string;
export declare const backends: {
    vault: any;
    stabilityPool: any;
};
