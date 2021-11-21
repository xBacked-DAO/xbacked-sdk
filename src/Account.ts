// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
import Interact from './interacts/Interact';
// @ts-ignore
import * as backend from './build/vault.main.js';
import Vault from './Vault';
interface AccountInterface {
  mnemonic?: string;
  secretKey?: string;
  signer?: string;
  interact?: Interact;

  currentVault?: string;
}

class Account {
  mnemonic?: string;
  secretKey?: string;
  signer?: string;
  interact?: Interact;
  currentVault?: string;
  reachAccount: any;
  reachStdLib: any;

  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.interact = params.interact;
    this.currentVault = this.currentVault;
    this.reachStdLib = loadStdlib('ALGO');
    this.reachStdLib.setProviderByName('LocalHost');
  }
  async initialiseReachAccount() {
    this.reachAccount = await this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
  }

  async deployVault() {
    try {
      if (this.mnemonic != null) {
        await this.initialiseReachAccount();
        if (await this.reachStdLib.canFundFromFaucet()) {
          await this.reachStdLib.fundFromFaucet(this.reachAccount, this.reachStdLib.parseCurrency(100));
        }
      }
      const ctc = this.reachAccount.contract(backend);
      ctc.getInfo().then((info: number) => {
        this.interact?.emit('appId', { params: { appId: info } });
      });
      await backend.Minter(ctc, { ...this.interact, ...this.reachStdLib.hasConsoleLogger });
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  connectToVault(params: { id: number; interact: Interact }): Vault {
    return new Vault({ id: params.id });
  }

  async addListener(name: string, callBack: any) {
    this.interact?.addListener(name, async ({ resolve, params }) => {
      const returnValues = callBack(params);
      if (resolve !== undefined && resolve !== null) {
        resolve(returnValues);
      }
    });
  }

  async optIntoToken(tokenID: number) {
    await this.initialiseReachAccount();
    await this.reachAccount.tokenAccept(tokenID);
  }

  async liquidateVault(params: { vault: Vault; tokenId: number }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Liquidator;
    const xUsdBal = await this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
    const res = await put.liquidateVault(xUsdBal);
    return true;
  }
  updatePrice(params: { price: number; vault: Vault }): boolean {
    return false;
  }

  toggleRecoveryMode(param: { vault: Vault; mode: boolean }): boolean {
    return false;
  }
  mintToken(params: { amount: number; vault: Vault }): boolean {
    return false;
  }

  depositToken(param: { amount: number }): boolean {
    return false;
  }

  withdrawCollateral(param: { amount: number }): boolean {
    return false;
  }

  returnVaultDebt(param: { amount: number }): boolean {
    return false;
  }

  redeemVault(param: { amount: number; vault: Vault }): boolean {
    return false;
  }
}

export = Account;
