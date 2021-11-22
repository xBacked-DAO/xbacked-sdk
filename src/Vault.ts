import Account from './Account';
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

  async getState(params: { account: Account }): Promise<any> {
    return {};
  }
}

export = Vault;
