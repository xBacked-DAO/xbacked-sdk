// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
import Api from './apis/Api';
import Interact from './interacts/Interact';
// @ts-ignore
import * as backend from './build/vault.main.js';
import { setMaxListeners } from 'process';

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
  reachStdLib: any;

  constructor(params: AccountInterface) {
    // console.log(backend);
    this.mnemonic = params.mnemonic;
    this.secretKey = params.secretKey;
    this.signer = params.signer;
    this.interact = params.interact;
    this.api = params.api;
    this.currentVault = this.currentVault;
    this.reachStdLib = loadStdlib('ALGO');
    this.reachStdLib.setProviderByName('LocalHost');
  }

  async deployVault() {
    try{
      if (this.mnemonic != null) {
        this.reachAccount = await this.reachStdLib.newAccountFromMnemonic(this.mnemonic);
        if (await this.reachStdLib .canFundFromFaucet()) {
          await this.reachStdLib .fundFromFaucet(this.reachAccount, this.reachStdLib .parseCurrency(100));
        }
      }
      let ctc = this.reachAccount.contract(backend);
      console.log(ctc.getInfo())
      ctc.getInfo().then( (info: number) => {
       console.log(info);
      });
      console.log({...this.interact},"interact")
      await backend.Minter(ctc, {...this.interact, ...this.reachStdLib.hasConsoleLogger});
    }catch(error){
      console.error(error)
      throw new Error(JSON.stringify(error));
    }
  }

  connectToVault(params: { id: number; interact: Interact }): Vault {
    return new Vault({ id: params.id });
  }

 async setListener(callBack: any){
    this.interact?.addListener('createVault', async ({resolve,params}) =>{
      var returnValues = callBack();
      resolve(returnValues);
    })
  }
}



export = Account;

