export interface AbiInterface {
  sig: string[];
}

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
  /** @property providerEnv for indexer */
  providerEnv?: any;
  /** @property An optional instance of the reach standard library */
  reachStdLib?: any;
  /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
  networkAccount?: any;
  asaVault?: {
    decimals: number;
  };
}

export interface VaultReturnParams {
  LIQUIDATION_COLLATERAL_RATIO: number;
  MINIMUM_COLLATERAL_RATIO: number;
  VAULT_INTEREST_RATE: number;
  hotState: {
    accruedInterest: number;
    totalVaultDebt: number;
  };
  coldState: {
    accruedFees: number;
    collateralPrice: number;
    redeemableVaults: any[];
    proposalTime?: number;
    contractState?: number;
    feeStructure: number[];
    minimumDebtAmount: number;
  };
  addresses: {
    govStakersAddress: string;
    liquidationStakersAddress: string;
    oracleAddress: string;
    adminAddress: string;
    daoAddress: string;
  };
}

export interface ReachUserVault {
  /** @property The amount of collateral in a vault */
  collateral: number;
  /** @property Indicator that signifies if a vault can be liquidated */
  liquidating: boolean;
  /** @property The debt in a vault */
  vaultDebt: number;
  /** @property Indicator that signifies if a vault can be redeemed */
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
  asaVault?: {
    decimals: number;
  };
}

export interface MasterStakingColdState {
  stakingASA: number;
  stakingASADecimals: number;
  rewardASAs: number[];
  rewardASADecimals: number[];
}

export interface MasterStakingAdminParameters {
  adminAddress: string;
  deprecateTimeout: number;
  deprecateAt: number;
  rewardRatios: number[];
  rewardRate: number;
}

export interface MasterStakingHotState extends MasterStakingAdminParameters {
  remainingRewards: number[];
  totalRewards: number;
  totalDeposit: number;
  lastRewardBlock: number;
  rewardPerToken: number;
}

export interface MasterStakingGlobalView extends MasterStakingColdState, MasterStakingHotState {};

export interface MasterStakingLocalView {
  amountDeposited: number;
  rewardPerTokenPaid: number;
  rewards: number;
}
