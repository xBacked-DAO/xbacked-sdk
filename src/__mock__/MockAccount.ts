import { Account } from '../Account';
class MockAccount extends Account {
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
                  accruedFees: bigNumberMock(1),
                  collateralPrice: bigNumberMock(1),
                  deprecated: false,
                  feeCollectorFee: 0.005,
                  liquidationCollateralRatio: bigNumberMock(130),
                  liquidationFee: 0.1,
                  minimumCollateralRatio: bigNumberMock(110),
                  totalVaultDebt: bigNumberMock(10),
                  redeemableVaults: ['ad'],
                  accruedInterest: bigNumberMock(1),
                  interestRate: 2000000000,
                },
              ];
            },
            readVault: async () => {
              return [
                [],
                [
                  'Some',
                  {
                    collateralRatio: bigNumberMock(130),
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
export default MockAccount;
