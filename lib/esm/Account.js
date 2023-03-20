var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
/**
 * An abstraction of an account on the Algorand
 */
export class Account {
    constructor(params) {
        // console.log(backend);
        this.mnemonic = params.mnemonic;
        this.secretKey = params.secretKey;
        this.signer = params.signer;
        this.provider = params.provider;
        this.providerEnv = params.providerEnv;
        this.reachStdLib = params.reachStdLib || loadStdlib('ALGO');
        this.networkAccount = params.networkAccount;
        this.asaVault = params.asaVault;
        if (params.network) {
            this.network = params.network;
        }
        else {
            this.network = 'LocalHost';
        }
        if (this.signer == null && !params.reachStdLib && !params.providerEnv) {
            this.reachStdLib.setProviderByName(this.network);
        }
        else if (this.providerEnv && (this.mnemonic || this.secretKey)) {
            this.reachStdLib.setProviderByEnv(this.providerEnv);
        }
    }
    /**
     * Initialises the reachAccount property
     */
    initialiseReachAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mnemonic && !this.reachAccount) {
                this.reachAccount = yield this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
            }
            else if (this.secretKey && !this.reachAccount) {
                this.reachAccount = yield this.reachStdLib.newAccountFromSecret(this.secretKey);
            }
            else if (this.networkAccount &&
                this.signer &&
                this.reachAccount == null &&
                this.provider &&
                !this.mnemonic &&
                !this.secretKey) {
                yield this.reachStdLib.setWalletFallback(yield this.reachStdLib.walletFallback({
                    providerEnv: this.providerEnv ? this.providerEnv : this.network,
                    [this.signer]: this.provider,
                }));
                this.reachAccount = yield this.reachStdLib.connectAccount(this.networkAccount);
            }
            else if (this.signer && !this.reachAccount && this.provider && !this.mnemonic && !this.secretKey) {
                yield this.reachStdLib.setWalletFallback(yield this.reachStdLib.walletFallback({
                    providerEnv: this.providerEnv ? this.providerEnv : this.network,
                    [this.signer]: this.provider,
                }));
                this.reachAccount = yield this.reachStdLib.getDefaultAccount();
            }
            else if (!this.reachAccount) {
                throw new Error('Pass a mnemonic, a secret key or a provider to create an acccount');
            }
        });
    }
    /**
     * Allows an instance of the account class to opt into an Algorand standard Asset
     * @param tokenID The asa ID to opt into
     */
    optIntoToken(tokenID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            yield this.reachAccount.tokenAccept(tokenID);
        });
    }
    /**
     *
     * @returns A UInt8 array which is the secretKey of this Reach account
     */
    getSecret() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            return this.reachAccount.networkAccount.sk;
        });
    }
    /**
     * Allows you to fund this account from the faucet when on the Reach devnet
     * @returns A boolean indicating if this account was successfully funded or not
     */
    fundFromFaucet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            if ((yield this.reachStdLib.canFundFromFaucet()) && this.reachAccount != null) {
                yield this.reachStdLib.fundFromFaucet(this.reachAccount, this.reachStdLib.parseCurrency(100));
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     *
     * @returns The formatted adress of this account
     */
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            if (this.reachAccount != null) {
                return this.reachStdLib.formatAddress(this.reachAccount);
            }
            else {
                return false;
            }
        });
    }
    /**
     * Returns the contract address
     * @param params An object with key vault that indicates the contract whose address is to be retrieved, and the backend to use (see utils.ts for backend options)
     * @returns A formatted address of the specified contract as a string
     */
    getContractAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.backend, params.contractId);
            const contractAddress = yield ctc.getContractAddress();
            return this.reachStdLib.formatAddress(contractAddress);
        });
    }
    /**
     *
     * @param params contractId which indicates the contract we want to interact with, and the backend to use (see utils.ts for backend options)
     */
    getContractAbi(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialiseReachAccount();
            const ctc = this.reachAccount.contract(params.backend, params.contractId);
            return yield ctc.getABI();
        });
    }
    /**
     *
     * @param params An object with key tokenId that indicates the ASA id whose balance this function must return, this key's value should be set to zero for the native token balance
     * @returns The balance of the specified tokenId
     */
    getBalance(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // reach.formatCurrency(await reach.balanceOf(account), 4)
            yield this.initialiseReachAccount();
            if (this.reachAccount && params.tokenId !== 0 && params.tokenId !== null) {
                const balance = yield this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
                return balance.toNumber();
            }
            else {
                const balance = yield this.reachStdLib.balanceOf(this.reachAccount);
                return balance.toNumber();
            }
        });
    }
}
//# sourceMappingURL=Account.js.map