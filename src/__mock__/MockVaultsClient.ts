import { VaultsClient } from '../VaultsClient';
class MockVaultsClient extends VaultsClient {
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
                  LIQUIDATION_COLLATERAL_RATIO: bigNumberMock(1),
                  MINIMUM_COLLATERAL_RATIO: bigNumberMock(1),
                  VAULT_INTEREST_RATE: bigNumberMock(1),

                  hotState: {
                    accruedInterest: bigNumberMock(1),
                    totalVaultDebt: bigNumberMock(1),
                  },
                  coldState: {
                    accruedFees: bigNumberMock(1),
                    collateralPrice: bigNumberMock(1),
                    deprecated: false,
                    redeemableVaults: [],
                    proposalTime: bigNumberMock(1),
                    contractState: bigNumberMock(0),
                    feeStructure: [bigNumberMock(1), bigNumberMock(5), bigNumberMock(50), bigNumberMock(50)],
                    minimumDebtAmount: bigNumberMock(10),
                    maximumCollateralValue: bigNumberMock(10000),
                  },
                  addresses: {
                    govStakersAddress: '0x128a983f12324311e7f85264e9d92e5d02cf9cc87e3cc2ae13095673bd0e05f7',
                    stabilityPoolAddress: '0x128a983f12324311e7f85264e9d92e5d02cf9cc87e3cc2ae13095673bd0e05f7',
                    oracleAddress: '0x128a983f12324311e7f85264e9d92e5d02cf9cc87e3cc2ae13095673bd0e05f7',
                    adminAddress: '0x128a983f12324311e7f85264e9d92e5d02cf9cc87e3cc2ae13095673bd0e05f7',
                    treasuryAddress: '0x128a983f12324311e7f85264e9d92e5d02cf9cc87e3cc2ae13095673bd0e05f7',
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
          AdminAPI: {
            replenishSupply: trueFunc,
            setAdminProperties: trueFunc,
            updateAdminAddress: trueFunc,
          },
        },
      };
    });
  }
}
export default MockVaultsClient;
