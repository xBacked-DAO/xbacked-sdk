import { VaultClient } from '../VaultClient';
class MockVaultClient extends VaultClient {
  async initialiseReachAccount(): Promise<void> {
    const bigNumberMock = jest.fn((val) => {
      return {
        toNumber: () => val,
      };
    });
    await super.initialiseReachAccount();
    const trueFunc = async () => {
      return true;
    };

    this.reachStdLib.setWalletFallback = jest.fn(() => true);

    this.reachAccount.contract = jest.fn(() => {
      return {
        v: {
          State: {
            read: async () => {
              return [
                'Some',
                {
                  constants: {
                    INTEREST_RATE_PER_SECOND: bigNumberMock(1),
                    LIQUIDATION_COLLATERAL_RATIO: bigNumberMock(1),
                    MINIMUM_COLLATERAL_RATIO: bigNumberMock(1),
                    VAULT_INTEREST_RATE: bigNumberMock(1),
                  },
                  hotState: {
                    accruedInterest: bigNumberMock(1),
                    totalVaultDebt: bigNumberMock(1),
                  },
                  coldState: {
                    accruedFees: bigNumberMock(1),
                    collateralPrice: bigNumberMock(1),
                    deprecated: false,
                    redeemableVaults: [],
                    govStakersAddress: '',
                    liquidationStakersAddress: '',
                    oracleAddress: '',
                    adminAddress: '',
                    daoAddress: '',
                    proposalTime: bigNumberMock(1),
                  },
                },
              ];
            },
            readVault: async () => {
              return [
                [],
                [
                  'Some',
                  {
                    collateral: bigNumberMock(100),
                    liquidating: false,
                    vaultDebt: bigNumberMock(40),
                    redeemable: false,
                    vaultFound: true,
                    lastAccruedInterestTime: bigNumberMock(10000),
                  },
                ],
              ];
            },
          },
        },
        a: {
          Oracle: {
            updatePrice: trueFunc,
          },
          Liquidator: {
            liquidateVault: trueFunc,
          },
          VaultRedeemer: {
            redeemVault: trueFunc,
          },
          FeeCollector: {
            dripInterest: trueFunc,
          },
          VaultOwner: {
            returnVaultDebt: trueFunc,
            withdrawCollateral: trueFunc,
            depositCollateral: trueFunc,
            mintToken: trueFunc,
            createVault: trueFunc,
          },
        },
      };
    });
  }
}
export default MockVaultClient;
