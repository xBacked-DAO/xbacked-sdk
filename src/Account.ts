// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';

import Interact from './interacts/Interact';
// @ts-ignore
import { vault as backend } from '@xbacked-dao/xbacked-contracts';
import Vault from './Vault';
import Reserve from './interacts/Reserve';
import { convertToMicroUnits, convertFromMicroUnits } from './utils';

interface AccountInterface {
  mnemonic?: string;
  secretKey?: string;
  signer?: string | 'MyAlgoConnect';
  interact?: Interact;
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  currentVault?: string;
  provider?: any;
}

class Account {
  mnemonic?: string;
  secretKey?: string;
  signer?: string;
  interact?: Interact;
  currentVault?: string;
  reachAccount: any;
  reachStdLib: any;
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  provider?: any;

  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.interact = params.interact;
    this.currentVault = params.currentVault;
    this.provider = params.provider;
    this.reachStdLib = loadStdlib('ALGO');

    if (params.network) {
      this.network = params.network;
    } else {
      this.network = 'LocalHost';
    }

    if (this.signer == null) {
      this.reachStdLib.setProviderByName(this.network);
    }
  }
  async initialiseReachAccount() {
    if (this.mnemonic != null && this.reachAccount == null) {
      this.reachAccount = await this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
    } else if (this.secretKey != null && this.reachAccount == null) {
      this.reachAccount = await this.reachStdLib.newAccountFromSecret(this.secretKey);
    } else if (this.signer != null && this.reachAccount == null && this.provider != null) {
      await this.reachStdLib.setWalletFallback(
        await this.reachStdLib.walletFallback({
          providerEnv: this.network,
          [this.signer]: this.provider,
        }),
      );
      this.reachAccount = await this.reachStdLib.getDefaultAccount();
    } else if (!this.reachAccount) {
      throw Error('Provide  a signer, a mnemonic or a secretKey');
    }
  }

  async deployVault(): Promise<Vault> {
    if (this.mnemonic != null) {
      await this.initialiseReachAccount();
    }
    const ctc = this.reachAccount.contract(backend);
    let appId = 0;
    ctc.getInfo().then((info: number) => {
      appId = info;
      this.interact?.emit('appId', { params: { appId: info } });
    });
    await backend.Minter(ctc, { ...this.interact, ...this.reachStdLib.hasConsoleLogger });

    return new Vault({ id: appId });
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
    await backend.FeeCollector(ctc, { ...this.reachStdLib.hasConsoleLogger });
    return params.vault;
  }

  async connectToVault(params: { vault: Vault }): Promise<Vault> {
    if (!this.interact) {
      throw Error('An interact has not yet been defined');
    }
    if (this.interact instanceof Reserve) {
      return await this.connectAsReserveToVault(params);
    } else {
      return await this.connectAsFeeCollectorToVault(params);
    }
  }

  async addListener(name: string, callBack: any) {
    this.interact?.addListener(name, async ({ resolve, params }) => {
      let returnValues;
      if (params === null || params === undefined) {
        returnValues = await callBack();
      } else {
        returnValues = await callBack(params);
      }
      if (resolve) {
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
    const res = await put.updatePrice(convertToMicroUnits(params.price));
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
    const res = await put.mintToken(convertToMicroUnits(params.amount));
    return res;
  }

  async depositToken(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.depositCollateral(convertToMicroUnits(params.amount));
    return res;
  }

  async withdrawCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.withdrawCollateral(convertToMicroUnits(params.amount));
    return res;
  }

  async returnVaultDebt(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.returnVaultDebt(convertToMicroUnits(params.amount));
    return res;
  }

  async redeemVault(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res = await await put.redeemVault(convertToMicroUnits(params.amount));
    return res;
  }

  async getBalance(params: { tokenId: number }): Promise<number> {
    await this.initialiseReachAccount();
    if (this.reachAccount && params.tokenId !== 0 && params.tokenId !== null) {
      const balance = this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
      return balance;
    } else {
      const balance = await this.reachStdLib.balanceOf(this.reachAccount);
      return balance.toNumber();
    }
  }

  async fundFromFaucet(): Promise<boolean> {
    await this.initialiseReachAccount();
    if ((await this.reachStdLib.canFundFromFaucet()) && this.reachAccount != null) {
      await this.reachStdLib.fundFromFaucet(this.reachAccount, this.reachStdLib.parseCurrency(100));
      return true;
    } else {
      return false;
    }
  }

  async getAddress(): Promise<any> {
    await this.initialiseReachAccount();
    if (this.reachAccount != null) {
      return this.reachStdLib.formatAddress(this.reachAccount);
    } else {
      return false;
    }
  }
}

export = Account;
