// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
import Api from './apis/Api';
import Interact from './interacts/Interact';

interface AccountInterface {
  mnemonic?: string;
  secretKey?: string;
  signer?: string;
  interact?: Interact;
  api?: Api;
  currentVault?: string;
}

class Account {
  mnemonic?: string;
  secretKey?: string;
  signer?: string;
  interact?: Interact;
  api?: Api;
  currentVault?: string;

  constructor(params: AccountInterface) {
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.interact = params.interact;
    this.api = params.api;
    this.currentVault = this.currentVault;
  }

  deployVault(): Vault {
    return new Vault({ id: 0 });
  }

  connectToVault(params: { id: number; interact: Interact }): Vault {
    return new Vault({ id: params.id });
  }
}
