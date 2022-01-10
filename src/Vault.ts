import Account from './Account';
import { vault as backend } from '@xbacked-dao/xbacked-contracts';
interface VaultReturnParams {
  collateralRatio: number;
  collateral: number;
  vaultDebt: number;
  healthFactor: number;
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


  //TODO
  async getState(params: { account: Account }): Promise<VaultReturnParams> {
    const ctc = params.account.reachAccount.contract(backend, this.id);
    const get = ctc.v.State;
    const stateView = await get.read();
    if (stateView[0] === 'None') {
      throw new Error('the view returned none');
    }
    const vaultState = stateView[1];
    return {
      collateralRatio: vaultState.collateralRatio.toNumber(),
      collateral: vaultState.collateral.toNumber(),
      vaultDebt: vaultState.vaultDebt.toNumber(),
      healthFactor: vaultState.hf.toNumber(),
    };
  }
}

export default Vault;
