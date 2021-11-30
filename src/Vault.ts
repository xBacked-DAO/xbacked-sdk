import Account from './Account';
import * as backend from './build/vault.main.js';

interface VaultReturnParams {
  collateralRatio: number;
  collateral: number;
  vaultDebt: number;
  healthFactor: number;
  collateralValue: number;
}

interface VaultParameters {
  id: number;
  acc?: any;
}
class Vault {
  readonly id: number | undefined;
  acc?: any;

  constructor(params: VaultParameters) {
    this.id = params.id;
    if (params.acc !== undefined) {
      this.acc = params.acc;
    }
  }

  async getState(params: { account: Account }): Promise<VaultReturnParams> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateViewBefore = await get.read();
    const vaultStateBefore = stateViewBefore[1];
    return {
      collateralRatio: vaultStateBefore.collateralRatio.toNumber(),
      collateral: vaultStateBefore.collateral.toNumber(),
      vaultDebt: vaultStateBefore.vaultDebt.toNumber(),
      healthFactor: vaultStateBefore.hf.toNumber(),
      collateralValue: vaultStateBefore.collateralValue.toNumber(),
    };
  }
}

export = Vault;
