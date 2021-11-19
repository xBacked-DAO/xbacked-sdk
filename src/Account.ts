// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
import Api from './apis/Api';
import Interact from './interacts/Interact';
// @ts-ignore
import * as backend from './build/vault.main.mjs';

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
  reachAccount: any;

  constructor(params: AccountInterface) {
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.interact = params.interact;
    this.api = params.api;
    this.currentVault = this.currentVault;
    const reachStdLib = loadStdlib('ALGO');
    if (this.mnemonic != null) {
      this.reachAccount = reachStdLib.newAccountFromMnemonic(this.mnemonic);
    }
  }

  deployVault(): Vault {
    return new Vault({ id: 0 });
  }

  connectToVault(params: { id: number; interact: Interact }): Vault {
    return new Vault({ id: params.id });
  }
}

export = Account;