export interface AbiInterface {
  sig: string[];
};

/**
 * This is passed as an argument to the [[Account]] constructor
 */
 export interface AccountInterface {
  /** @property An optional string of 25 words seperated by spaces that can be used to recover an algorand account */
  mnemonic?: string;
  /** @property An optional array of numbers that can be used to recover an algorand account */
  secretKey?: number[];
  /** @property An optional name of a signer or wallet provider that can be used to sign transactions, should be set along with the provider property. Only required when not using a mnemonic or secretKey */
  signer?: string | 'MyAlgoConnect';
  /** @property The desired network to connect to, the default value is LocalHost */
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  /** @property An optional instance of the provider object for the signer specified */
  provider?: any;
  /** @property An optional instance of the reach standard library */
  reachStdLib?: any;
  /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
  networkAccount?: any;
}

export interface StakeGlobalView {
  stakingAssetID: number;
  policy: {
    status: number;
    rewardMethod: number;
    rewardRate: number;
    applicationType: number;
    time: number;
  };
  totalStake: number;
  totalRewards: number;
  totalUsers: number;
}

export interface StakeLocalView {
  amountStaked: number;
  rewardsClaimed: number;
  lastClaim: number;
  found: boolean;
}

export interface VaultReturnParams {
  // /** @property Fees that have accrued in the contract */
  // accruedFees: number;
  // /** @property The present collateral price in the contract */
  // collateralPrice: number;
  // /** @property Indicator that signifies if the contract is deprecated or not */
  // deprecated: boolean;
  // /** @property The percentage of the accruedFees, sent to the FeeCollector as a reward for distributing fees */
  // feeCollectorFee: number;
  // /** @property Minimum collateral ratio for a vault to be liquidated in micro units */
  // liquidationCollateralRatio: number;
  // /** @property The percentage of the amount liquidated, taken by the contract as fees during liquidation */
  // liquidationFee: number;
  // /** @property The minimum collateral ratio allowed for vault creation, minting, withdrawal in the contract */
  // minimumCollateralRatio: number;
  // /** @property The total amount of debt in the contract */
  // totalVaultDebt: number;
  // /** @property An array of addresses for redeemable vaults */
  // redeemableVaults: any[];
  // /** @property the accrued interest in a vault awaiting distribution via settleInterest */
  // accruedInterest: number;
  // /** @property the interest rate of a vault */
  // interestRate: number;

  constants: any;
  hotState: any;
  coldState: any;
}

export interface ReachUserVault {
  /** @property The amount of collateral in a vault */
  collateral: number;
  /** @property Indicator that signifies if a vault can be liquidated */
  liquidating: boolean;
  /** @property The debt in a vault */
  vaultDebt: number;
  /** @property Inidicator that signifies if a vault can be redeemed */
  redeemable: boolean;
  /** @property the timestamp of the last time interest accrued for a specific vault */
  lastAccruedInterestTime: number;
}

export interface UserVaultReturnParams extends ReachUserVault {
  /** @property Indicator that signifies that a vault exists for a particular address */
  vaultFound: boolean;
}
/**
 * parameters used to instantiate the Contract constructor
 */
export interface VaultParameters {
  /**  @property Unique identifier for the contract */
  id: number;
  acc?: any;
}
