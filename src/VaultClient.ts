// @ts-ignore
import { masterVault, masterVaultAsa } from '@xbacked-dao/xbacked-contracts';
import { Vault } from './Vault';
import { convertToMicroUnits, calculateInterestAccrued } from './utils';
import { Account } from './Account';
import { AbiInterface, AccountInterface, UserVaultReturnParams, VaultReturnParams } from './interfaces';

export class VaultClient extends Account {
  backend: any;
  constructor(params: AccountInterface) {
    super(params);
    if (params.asaVault) {
      this.backend = masterVaultAsa;
    } else {
      this.backend = masterVault;
    }
  }

  /**
   *
   * @param params Contains keys address, debtAmount, vault, dripInterest, minimumPrice allowed for this transaction
   * and maximumPrice allowed for this transaction. Include dripInterest if you would like the vault debt to be updated before liquidation
   * @returns A boolean indicating if the vault was liquidated or not
   */
  async liquidateVault(params: {
    address: string;
    debtAmount: number;
    vault: Vault;
    dripInterest: false;
    minimumPrice: number;
    maximumPrice: number;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.Liquidator;
    if (params.dripInterest) {
      await this.dripInterest({ vault: params.vault, address: params.address });
    }
    const res = await put.liquidateVault(
      params.address,
      convertToMicroUnits(params.debtAmount),
      convertToMicroUnits(params.minimumPrice),
      convertToMicroUnits(params.maximumPrice),
    );
    return res;
  }

  /**
   * Attempt to redeem some of the Vault asset against a redeemable vault, to
   * receive vault collateral.
   * @param params Contains the amount of xUSD to redeem, the vault to redeem it from, minimumPrice
   * that indicates the minimum price allowed for this transaction and maximumPrice that
   * indicates the maximum price allowed for this transaction
   * @returns A boolean indicating success of call.
   */
  async redeemVault(params: {
    amountToRedeem: number;
    vault: Vault;
    minimumPrice: number;
    maximumPrice: number;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultRedeemer;
    const res = await put.redeemVault(
      convertToMicroUnits(params.amountToRedeem),
      convertToMicroUnits(params.minimumPrice),
      convertToMicroUnits(params.maximumPrice),
    );
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
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
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
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.Oracle;
    const res = await put.updatePrice(convertToMicroUnits(params.price));
    return res;
  }

  /**
   *
   * @param params Contains the amount of xUsd tokens to be minted, the vault in which the token should be minted,
   * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
   * indicates the maximum price allowed for this transaction
   * @returns A boolean indicating if the xUsd tokens were successfully minted or not
   */
  async mintToken(params: {
    amount: number;
    vault: Vault;
    minimumPrice: number;
    maximumPrice: number;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.mintToken(
      convertToMicroUnits(params.amount),
      convertToMicroUnits(params.minimumPrice),
      convertToMicroUnits(params.maximumPrice),
    );
    return res;
  }

  /**
   *
   * @param params Contains the amount of tokens to be deposited as collateral as well as the vault
   * @returns A boolean indicating if the collateral was deposited successfully
   */
  async depositCollateral(params: { amount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.depositCollateral(
      convertToMicroUnits(params.amount, this.asaVault ? this.asaVault.decimals : undefined),
    );
    return res;
  }

  /**
   *
   * @param params Contains amount of collateral to be withdrawn, the vault they should be withdrawn from,
   * minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
   * indicates the maximum price allowed for this transaction
   * @returns A boolean indicating if the collaterals were successfully withdrawn or not
   */
  async withdrawCollateral(params: {
    amount: number;
    vault: Vault;
    minimumPrice: number;
    maximumPrice: number;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.withdrawCollateral(
      convertToMicroUnits(params.amount, this.asaVault ? this.asaVault.decimals : undefined),
      convertToMicroUnits(params.minimumPrice),
      convertToMicroUnits(params.maximumPrice),
    );
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
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.returnVaultDebt(
      params.close ? 0 : convertToMicroUnits(params.amount),
      params.close ? params.close : false,
    );
    return res;
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
   * @param params Contains keys collateral that indicates the amount of collateral that will be used to create the vault,
   * mintAmount that indicates the amount of xusd tokens to be minted, vault that indicates the contract we are
   * communicating with, minimumPrice that indicates the minimum price allowed for this transaction and maximumPrice that
   * indicates the maximum price allowed for this transaction
   * @returns A boolean indicating if the vault was created or not
   */
  async createVault(params: {
    collateral: number;
    mintAmount: number;
    vault: Vault;
    minimumPrice: number;
    maximumPrice: number;
  }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.createVault(
      convertToMicroUnits(params.collateral, this.asaVault ? this.asaVault.decimals : undefined),
      convertToMicroUnits(params.mintAmount),
      convertToMicroUnits(params.minimumPrice),
      convertToMicroUnits(params.maximumPrice),
    );
    return res;
  }

  /**
   * Used by an account to collect fees from the contract
   * @param params Contains key vault which indicates the contract this function should interact with
   * @returns A boolean indicating of fees were collected or not
   */
  async collectFees(params: { vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
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
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
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
    const ctc = this.reachAccount.contract(this.backend, params.vault.id);
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
    const VAULT_INTEREST_RATE = vaultState.constants?.VAULT_INTEREST_RATE;
    const now = await this.reachStdLib.getNetworkSecs();
    const interestAccrued = calculateInterestAccrued(
      now.toNumber(),
      userVault.lastAccruedInterestTime,
      userVault.vaultDebt,
      VAULT_INTEREST_RATE ? VAULT_INTEREST_RATE : 2000000000,
    );
    userVault.vaultDebt += interestAccrued;
    return userVault;
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
    updatePriceCallback: (address: string, newPrice: number) => void;
  }): Promise<void> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(this.backend, params.vaultId);
    const announcer = ctc.e.Announcer;
    if (params.createCallback !== undefined) {
      await announcer.vaultCreated.seekNow();
      announcer.vaultCreated.monitor((event: any) => {
        const address: string = this.reachStdLib.formatAddress(event.what[0]);
        const rawVaultState = event.what[1];
        const vaultState: UserVaultReturnParams = { vaultFound: true, ...Vault.parseUserInfo(rawVaultState) };
        params.createCallback(address, vaultState);
      });
    }

    if (params.transactionCallback) {
      await announcer.vaultTransaction.seekNow();
      announcer.vaultTransaction.monitor((event: any) => {
        const address: string = this.reachStdLib.formatAddress(event.what[0]);
        const rawVaultState = event.what[2];
        const vaultState: UserVaultReturnParams = { vaultFound: true, ...Vault.parseUserInfo(rawVaultState) };
        params.transactionCallback(address, vaultState);
      });
    }

    if (params.updatePriceCallback !== undefined) {
      await announcer.priceChange.seekNow();
      announcer.priceChange.monitor((event: any) => {
        const address: string = this.reachStdLib.formatAddress(event.what[0]);
        const newPrice = event.what[1];
        params.updatePriceCallback(address, newPrice);
      });
    }
  }
}
