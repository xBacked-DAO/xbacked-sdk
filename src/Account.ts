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

  async connectAsReserveToVault(params: { vault: Vault }): Promise<Vault> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    await backend.Reserve(ctc, { ...this.interact, ...this.reachStdLib.hasConsoleLogger });
    return params.vault;
  }

  async connectAsFeeCollectorToVault(params: { vault: Vault }): Promise<Vault> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    await backend.FeeCollector(ctc, { ...this.interact, ...this.reachStdLib.hasConsoleLogger });
    return params.vault;
  }

  async addListener(name: string, callBack: any) {
    this.interact?.addListener(name, async ({ resolve, params }) => {
      const returnValues = params === null || params === undefined ? await callBack() : await callBack(params);
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
    const liquidationTokenBalance = await this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
    const res = await put.liquidateVault(liquidationTokenBalance);
    return res;
  }
  async updatePrice(params: { price: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Oracle;
    const res = await put.updatePrice((params.price));
    return res;
  }

  async toggleRecoveryMode(params: { vault: Vault; mode: boolean }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.RecoveryToggler;
    const res = await put.toggleRecoveryMode(params.mode);
    return res;
  }
  async mintToken(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.mintToken(params.amount);
    return res;
  }

  async depositToken(params: { amount: number, vault: Vault}): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.depositCollateral(params.amount);
    return res;
  }

  async withdrawCollateral(params: { amount: number, vault: Vault}): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.withdrawCollateral(params.amount);
    return res;
  }

  async returnVaultDebt(params: { amount: number, vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.returnVaultDebt(params.amount);
    return res;
  }

  async redeemVault(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res = await await put.redeemVault(params.amount);
    return res;
  }
}

export = Account;
