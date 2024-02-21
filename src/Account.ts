// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
import { Vault } from './Vault';
import { convertToMicroUnits, calculateInterestAccrued } from './utils';
import { AccountInterface, AbiInterface } from './interfaces';

/**
 * An abstraction of an account on the Algorand
 */
export class Account {
  /** @property An optional string of 25 words seperated by spaces that can be used to recover an algorand account */
  mnemonic?: string;
  /** @property An optional array of numbers that can be used to recover an algorand account */
  secretKey?: number[];
  /** @propertyAn optional name of a signer or wallet provider that can be used to sign transactions, should be set along with the provider property. Only required when not using a mnemonic or secretKey */
  signer?: string;
  /** @property An account created from the reach sdk */
  reachAccount: any;
  /** @property An instance of the reach standard library */
  reachStdLib: any;
  /** @property The desired network to connect to, the default value is LocalHost */
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  /** @property An instance of the provider object for the signer specified */
  provider?: any;
  /** @property providerEnv for indexer */
  providerEnv?: any;
  /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
  networkAccount?: any;


  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.provider = params.provider;
    this.providerEnv = params.providerEnv;
    this.reachStdLib = params.reachStdLib || loadStdlib('ALGO');
    this.networkAccount = params.networkAccount;

    if (params.network) {
      this.network = params.network;
    } else {
      this.network = 'LocalHost';
    }

    if (this.signer == null && !params.reachStdLib && !params.providerEnv) {
      this.reachStdLib.setProviderByName(this.network);
    } else if (this.providerEnv && (this.mnemonic || this.secretKey)) {
      this.reachStdLib.setProviderByEnv(this.providerEnv);
    }
  }

  /**
   * Initialises the reachAccount property
   */
  async initialiseReachAccount() {
    if (this.mnemonic && !this.reachAccount) {
      this.reachAccount = await this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
    } else if (this.secretKey && !this.reachAccount) {
      this.reachAccount = await this.reachStdLib.newAccountFromSecret(this.secretKey);
    } else if (
      this.networkAccount &&
      this.signer &&
      this.reachAccount == null &&
      this.provider &&
      !this.mnemonic &&
      !this.secretKey
    ) {
      await this.reachStdLib.setWalletFallback(
        await this.reachStdLib.walletFallback({
          providerEnv: this.providerEnv ? this.providerEnv : this.network,
          [this.signer]: this.provider,
        }),
      );
      this.reachAccount = await this.reachStdLib.connectAccount(this.networkAccount);
    } else if (this.signer && !this.reachAccount && this.provider && !this.mnemonic && !this.secretKey) {
      await this.reachStdLib.setWalletFallback(
        await this.reachStdLib.walletFallback({
          providerEnv: this.providerEnv ? this.providerEnv : this.network,
          [this.signer]: this.provider,
        }),
      );
      this.reachAccount = await this.reachStdLib.getDefaultAccount();
    } else if (!this.reachAccount) {
      throw new Error('Pass a mnemonic, a secret key or a provider to create an acccount');
    }
  }

  /**
   * Allows an instance of the account class to opt into an Algorand standard Asset
   * @param tokenID The asa ID to opt into
   */
  async optIntoToken(tokenID: number) {
    await this.initialiseReachAccount();
    await this.reachAccount.tokenAccept(tokenID);
  }

  /**
   *
   * @returns A UInt8 array which is the secretKey of this Reach account
   */
  async getSecret(): Promise<any> {
    await this.initialiseReachAccount();
    return this.reachAccount.networkAccount.sk;
  }

  /**
   * Allows you to fund this account from the faucet when on the Reach devnet
   * @returns A boolean indicating if this account was successfully funded or not
   */
  async fundFromFaucet(): Promise<boolean> {
    await this.initialiseReachAccount();
    if ((await this.reachStdLib.canFundFromFaucet()) && this.reachAccount != null) {
      await this.reachStdLib.fundFromFaucet(this.reachAccount, this.reachStdLib.parseCurrency(100));
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @returns The formatted adress of this account
   */
  async getAddress(): Promise<any> {
    await this.initialiseReachAccount();
    if (this.reachAccount != null) {
      return this.reachStdLib.formatAddress(this.reachAccount);
    } else {
      return false;
    }
  }

  /**
   * Returns the contract address
   * @param params An object with key vault that indicates the contract whose address is to be retrieved, and the backend to use (see utils.ts for backend options)
   * @returns A formatted address of the specified contract as a string
   */
  async getContractAddress(params: { contractId: number; backend: any }): Promise<string> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(params.backend, params.contractId);
    const contractAddress = await ctc.getContractAddress();
    return this.reachStdLib.formatAddress(contractAddress);
  }

  /**
   *
   * @param params contractId which indicates the contract we want to interact with, and the backend to use (see utils.ts for backend options)
   */
  async getContractAbi(params: { contractId: number; backend: any }): Promise<AbiInterface> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(params.backend, params.contractId);
    return await ctc.getABI();
  }

  /**
   *
   * @param params An object with key tokenId that indicates the ASA id whose balance this function must return, this key's value should be set to zero for the native token balance
   * @returns The balance of the specified tokenId
   */
  async getBalance(params: { tokenId: number }): Promise<number> {
    // reach.formatCurrency(await reach.balanceOf(account), 4)
    await this.initialiseReachAccount();
    if (this.reachAccount && params.tokenId !== 0 && params.tokenId !== null) {
      const balance = await this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
      return balance.toNumber();
    } else {
      const balance = await this.reachStdLib.balanceOf(this.reachAccount);
      return balance.toNumber();
    }
  }


}
