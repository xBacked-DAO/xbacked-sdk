// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';

import Interact from './interacts/Interact';
// @ts-ignore
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import Vault from './Vault';
import { convertToMicroUnits, convertFromMicroUnits } from './utils';

interface AccountInterface {
  mnemonic?: string;
  secretKey?: Array<number>;
  signer?: string | 'MyAlgoConnect';
  interact?: Interact;
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  currentVault?: string;
  provider?: any;
}

class Account {
  mnemonic?: string;
  secretKey?: Array<number>;
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
      throw new Error('Pass a mnemonic, a secret key or a provider to create an acccount');
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

  async liquidateVault(params: {address: string, vault: Vault}): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Liquidator;
    const res = await put.liquidateVault(params.address);
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

  async depositCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
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


  async redeemVault(params: { address: string, amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res =  await put.redeemVault(params.address, convertToMicroUnits(params.amount));
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

  async getSecret(): Promise<any> {
    await this.initialiseReachAccount();
    return this.reachAccount.networkAccount.sk;
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

  async getVaultState(params: { vault: Vault }): Promise<any> {
    await this.initialiseReachAccount();
    return await params.vault.getState({ account: this });
  }


  async createVault(params: {collateral: number, mintAmount: number, vault: Vault}): Promise<number>{
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res =  await put.createVault(convertToMicroUnits(params.collateral), convertToMicroUnits(params.mintAmount));
    return res;
  }


  async collectFees(params: {vault: Vault}): Promise<boolean>{
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.FeeCollector;
    const res =  await put.collectFees();
    return res;
  }


  async replenishSupply(params :{vault: Vault,  supply: number}): Promise<boolean>{
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.AdminAPI;
    const res =  await put.replenishSupply(params.supply);
    return res;
  }


  async deprecateVault(params: {shouldDeprecateVault: boolean, vault: Vault}): Promise<boolean>{
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.AdminAPI;
    const res =  await put.deprecateVault(params.shouldDeprecateVault);
    return res;
  }

  async getUserInfo(params: {address: string, vault: Vault}): Promise<any>{
    await this.initialiseReachAccount();
    return await params.vault.getUserInfo({ account: this, address: params.address});
  }

  //TODO: ADD listeners for events
}

export default Account;
