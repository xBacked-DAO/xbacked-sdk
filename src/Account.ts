// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-ignore
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import { Vault, UserVaultReturnParams, VaultReturnParams } from './Vault';
import { convertToMicroUnits, calculateInterestAccrued } from './utils';

/**
 * This is passed as an argument to the [[Account]] constructor
 */
export interface AccountInterface {
  /** @property An optional string of 25 words seperated by spaces that can be used to recover an algorand account */
  mnemonic?: string;
  /** @property An optional array of numbers that can be used to recover an algorand account */
  secretKey?: number[];
  /** @property An optional name of a signer or wallet provider that can be used to sign transactions, should be set along with the provider property. Only required when not using a mnemonic or secretKey */
  signer?: string | 'MyAlgoConnect';
  /** @property The desired network to connect to, the default value is LocalHost */
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  /** @property An optional instance of the provider object for the signer specified */
  provider?: any;
  /** @property An optional instance of the reach standard library */
  reachStdLib?: any;
  /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
  networkAccount?: any;
}

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
  /** @property An optional instance of an account from the reach standard library. Used to reconnect via a frontend */
  networkAccount?: any;

  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.provider = params.provider;
    this.reachStdLib = params.reachStdLib || loadStdlib('ALGO');
    this.networkAccount = params.networkAccount;
    if (params.network) {
      this.network = params.network;
    } else {
      this.network = 'LocalHost';
    }

    if (this.signer == null && !params.reachStdLib) {
      this.reachStdLib.setProviderByName(this.network);
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
    } else if (this.networkAccount && !this.reachAccount) {
      this.reachAccount = await this.reachStdLib.connectAccount(this.networkAccount);
    } else if (this.signer && !this.reachAccount && this.provider) {
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
   * @param params Contains keys address, debtAmount, vault, and dripInterest. Include dripInterest if you would like the vault debt to be updated before liquidation
   * @returns A boolean indicating if the vault was liquidated or not
   */
  async liquidateVault(params: {
    address: string;
    debtAmount: number;
    vault: Vault;
    dripInterest: false;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Liquidator;
    if (params.dripInterest) {
      await this.dripInterest({ vault: params.vault, address: params.address });
    }
    const res = await put.liquidateVault(params.address, convertToMicroUnits(params.debtAmount));
    return res;
  }

  /**
   * Attempt to redeem some of the Vault asset against a redeemable vault, to
   * receive vault collateral.
   * @param params Contains the amount of xUSD to redeem
   * @returns A boolean indicating success of call.
   */
  async redeemVault(params: { amountToRedeem: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res = await put.redeemVault(convertToMicroUnits(params.amountToRedeem));
    return res;
  }

  /**
   * Propose the address of a vault that could be redeemable, to qualify the
   * vault must be 'less healthy' than any of the other proposed vaults, or
   * there must be a free slot.
   * @param params Address of vault to propose, and target vault contract.
   * @returns A boolean indicating success of call.
   */
  async proposeVaultForRedemption(params: { address: string; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res = await put.proposeVault(params.address);
    return res;
  }

  /**
   *
   * @param params Contains the new price and the vault whose price should be updated
   * @returns A boolean indicating if the price was successfully updated or not
   */
  async updatePrice(params: { price: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Oracle;
    const res = await put.updatePrice(convertToMicroUnits(params.price));
    return res;
  }

  /**
   *
   * @param params Contains the amount of xUsd tokens to be minted as well as the vault in which the token should be minted
   * @returns A boolean indicating if the xUsd tokens were successfully minted or not
   */
  async mintToken(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.mintToken(convertToMicroUnits(params.amount));
    return res;
  }

  /**
   *
   * @param params Contains the amount of tokens to be deposited as collateral as well as the vault
   * @returns A boolean indicating if the collateral was deposited successfully
   */
  async depositCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.depositCollateral(convertToMicroUnits(params.amount));
    return res;
  }

  /**
   *
   * @param params Contains amount of collateral to be withdrawn as well as the vault they should be withdrawn from
   * @returns A boolean indicating if the collaterals were successfully withdrawn or not
   */
  async withdrawCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.withdrawCollateral(convertToMicroUnits(params.amount));
    return res;
  }

  /**
   *
   * @param params An object with key amount signifying the amount of debt tokens
   *  to return, key vault indicating the Contract and key close indicating if the vault should be closed
   * @returns A boolean indicating if the vault debt was returned or not
   */
  async returnVaultDebt(params: { amount: number; vault: Vault; close?: boolean }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.returnVaultDebt(convertToMicroUnits(params.amount), params.close ? params.close : false);
    return res;
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
   * Used to get the state of the contract
   * @param params An object with key vault that indicates the contract whose state is to be retrieved
   * @returns The state of the vault of type [[VaultReturnParams]]
   */
  async getVaultState(params: { vault: Vault }): Promise<VaultReturnParams> {
    await this.initialiseReachAccount();
    return await params.vault.getState({ account: this });
  }

  /**
   * Used to create a vault in the contract
   * @param params Contains keys collateral that indicates the amount of collateral that will be used to create the vault, mintAmount that indicates the amount of xusd tokens to be minted and vault that indicates the contract we are communicating with
   * @returns A boolean indicating if the vault was created or not
   */
  async createVault(params: { collateral: number; mintAmount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.createVault(convertToMicroUnits(params.collateral), convertToMicroUnits(params.mintAmount));
    return res;
  }

  /**
   * Used by an account to collect fees from the contract
   * @param params Contains key vault which indicates the contract this function should interact with
   * @returns A boolean indicating of fees were collected or not
   */
  async collectFees(params: { vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.FeeCollector;
    const res = await put.collectFees();
    return res;
  }

  /**
   * Used by an account to settle accrued interest in a vault
   * @param params Contains key vault which indicates the contract this function should interact with
   * @returns A boolean indicating of fees were collected or not
   */
  async settleInterest(params: { vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.FeeCollector;
    const res = await put.settleInterest();
    return res;
  }

  /**
   * Will trigger interest to accrue on a specific user vault
   * @param params Contains address of vault to accrue interest for. Also includes vault which indicates the contract this function should interact with.
   * @returns A boolean indicating of fees were collected or not
   */
  async dripInterest(params: { address: string; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.FeeCollector;
    const res = await put.dripInterest(params.address);
    return res;
  }

  /**
   *
   * @param params Contains key address which indicates the vault we want to retrieve the info of as well as key vault that indicates the contract we want to interact with
   * @returns the information for the specified vault
   */

  async getUserInfo(params: { address: string; vault: Vault }): Promise<UserVaultReturnParams> {
    await this.initialiseReachAccount();

    const userVault = await params.vault.getUserInfo({ account: this, address: params.address });
    // NOTE: does not account for leap year
    const vaultState = await this.getVaultState({ vault: params.vault });
    const VAULT_INTEREST_RATE = vaultState.interestRate;
    const now = await this.reachStdLib.getNetworkSecs();
    const interestAccrued = calculateInterestAccrued(
      now.toNumber(),
      userVault.lastAccruedInterestTime,
      userVault.vaultDebt,
      VAULT_INTEREST_RATE,
    );
    userVault.vaultDebt += interestAccrued;
    return userVault;
  }

  /**
   * Returns the contract address
   * @param params An object with key vault that indicates the contract whose address is to be retrieved
   * @returns A formatted address of the specified contract as a string
   */
  async getContractAddress(params: { vaultId: number }): Promise<string> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vaultId);
    const contractAddress = await ctc.getContractAddress();
    return this.reachStdLib.formatAddress(contractAddress);
  }

  /**
   * Subscribes to all vault events and calls the provided callbacks when the event is fired
   * @param params An object that contains key vaultId, key createCallback and key transactionCallback
   */
  async subscribeToEvents(params: {
    /** @property a uint that uniquely identifies the contract */
    vaultId: number;
    /** @property callback that is called when a vault is created, it is called with the address that created the vault as well as its user vault state */
    createCallback: (address: string, state: UserVaultReturnParams) => void;
    /** @property callback that is called when a transaction is made in any vault in the contract, it is called  with the address that made the transaction as well as its uservault state  */
    transactionCallback: (address: string, state: UserVaultReturnParams) => void;
  }): Promise<void> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vaultId);
    const announcer = ctc.e.Announcer;

    if (params.createCallback !== undefined) {
      announcer.vaultCreated.monitor((event: any) => {
        const address: string = this.reachStdLib.formatAddress(event.what[0]);
        const rawVaultState = event.what[1];
        const vaultState: UserVaultReturnParams = { vaultFound: true, ...Vault.parseUserInfo(rawVaultState) };
        params.createCallback(address, vaultState);
      });
    }

    if (params.transactionCallback) {
      announcer.vaultTransaction.monitor((event: any) => {
        const address: string = this.reachStdLib.formatAddress(event.what[0]);
        const rawVaultState = event.what[1];
        const vaultState: UserVaultReturnParams = { vaultFound: true, ...Vault.parseUserInfo(rawVaultState) };
        params.transactionCallback(address, vaultState);
      });
    }
  }
}
