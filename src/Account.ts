// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-ignore
import { masterVault as backend } from '@xbacked-dao/xbacked-contracts';
import Vault from './Vault';
import { convertToMicroUnits, convertFromMicroUnits } from './utils';
import Stake from './Stake';

interface AccountInterface {
  mnemonic?: string;
  secretKey?: number[];
  signer?: string | 'MyAlgoConnect';
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  currentVault?: string;
  currentStake?: string;
  provider?: any;
  reachStdLib?: any,
  networkAccount?: boolean
}

class Account {
  mnemonic?: string;
  secretKey?: number[];
  signer?: string;
  currentVault?: string;
  currentStake?: string;
  reachAccount: any;
  reachStdLib: any;
  network?: 'LocalHost' | 'MainNet' | 'TestNet';
  provider?: any;
  networkAccount?: boolean 

  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.currentVault = params.currentVault;
    this.currentStake = params.currentStake;
    this.provider = params.provider;
    this.reachStdLib = params.reachStdLib || loadStdlib('ALGO');
    this.networkAccount = params.networkAccount
    if (params.network) {
      this.network = params.network;
    } else {
      this.network = 'LocalHost';
    }

    if (this.signer == null && !params.reachStdLib) {
      this.reachStdLib.setProviderByName(this.network);
    }
  }

  // Helper functions.
  async initialiseReachAccount() {
    if (this.mnemonic != null && this.reachAccount == null) {
      this.reachAccount = await this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
    } else if (this.secretKey != null && this.reachAccount == null) {
      this.reachAccount = await this.reachStdLib.newAccountFromSecret(this.secretKey);
    }else if(this.networkAccount && this.signer != null && this.reachAccount == null && this.provider != null){
      await this.reachStdLib.setWalletFallback(
        await this.reachStdLib.walletFallback({
          providerEnv: this.network,
          [this.signer]: this.provider,
        }),
      );
      this.reachAccount = await this.reachStdLib.connectAccount(this.networkAccount);
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

  async optIntoToken(tokenID: number) {
    await this.initialiseReachAccount();
    await this.reachAccount.tokenAccept(tokenID);
  }

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

  async getContractAddress(params: { vaultId: number }): Promise<string> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vaultId);
    const contractAddress = await ctc.getContractAddress();
    return this.reachStdLib.formatAddress(contractAddress);
  }

  // Vault interactions.
  async liquidateVault(params: { address: string; debtAmount: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Liquidator;
    const res = await put.liquidateVault(params.address, convertToMicroUnits(params.debtAmount));
    return res;
  }

  async updatePrice(params: { price: number; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.Oracle;
    const res = await put.updatePrice(convertToMicroUnits(params.price));
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

  async getVaultState(params: { vault: Vault }): Promise<any> {
    await this.initialiseReachAccount();
    return await params.vault.getState({ account: this });
  }

  async createVault(params: { collateral: number; mintAmount: number; vault: Vault }): Promise<number> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.VaultOwner;
    const res = await put.createVault(convertToMicroUnits(params.collateral), convertToMicroUnits(params.mintAmount));
    return res;
  }

  async collectFees(params: { vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.FeeCollector;
    const res = await put.collectFees();
    return res;
  }

  async replenishSupply(params: { vault: Vault; supply: number }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.AdminAPI;
    const res = await put.replenishSupply(params.supply);
    return res;
  }

  async deprecateVault(params: { shouldDeprecateVault: boolean; vault: Vault }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.vault.id);
    const put = ctc.a.AdminAPI;
    const res = await put.deprecateVault(params.shouldDeprecateVault);
    return res;
  }

  async getUserInfo(params: { address: string; vault: Vault }): Promise<any> {
    await this.initialiseReachAccount();
    return await params.vault.getUserInfo({ account: this, address: params.address });
  }

  // TODO: ADD listeners for 
  
  // Staking interactions.
  // This function does nothing to the important state of the contract, but
  // updates its state and therefore the lastConsensusTime.
  async updateLastConsensus(params: { stake: Stake }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.stake.id);
    const api = ctc.a.StakingAPI;
    const res = await api.updateLastConsensus();
    return res;
  }

  async stakeAsset(params: { amount: number; stake: Stake }): Promise<number> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.stake.id);
    const api = ctc.a.StakingAPI;
    const res = await api.stakeAsset(convertToMicroUnits(params.amount));
    return res;
  }

  async unstakeAsset(params: { amount: number; stake: Stake }): Promise<number> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.stake.id);
    const api = ctc.a.StakingAPI;
    const res = await api.unstakeAsset(convertToMicroUnits(params.amount));
    return res;
  }

  async claimStakeRewards(params: { stake: Stake }): Promise<number> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.stake.id);
    const api = ctc.a.StakingAPI;
    const res = await api.claimRewards();
    return res;
  }

  async updateStakePolicy(params: { rewardMethod: number, rewardRate: number, status: number, stake: Stake }): Promise<boolean> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.stake.id);
    const api = ctc.a.InitializerAPI;
    const res = await api.updatePolicy({
      rewardMethod: params.rewardMethod,
      rewardRate: params.rewardRate,
      status: params.status
    });
    return res;
  }

}

export default Account;
