// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-ignore
import { liquidationStaking as backend } from '@xbacked-dao/xbacked-contracts';
import { Account } from './Account';
import { AbiInterface, AccountInterface } from './interfaces';

export class StakingClient extends Account {
 
  constructor(params: AccountInterface) {
    super(params);
  }

  /**
   * Returns the contract address
   * @param params An object with key vault that indicates the contract whose address is to be retrieved
   * @returns A formatted address of the specified contract as a string
   */
   async getContractAddress(params: { contractId: number }): Promise<string> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.contractId);
    const contractAddress = await ctc.getContractAddress();
    return this.reachStdLib.formatAddress(contractAddress);
  }

  /**
   * 
   * @param params contractId which indicates the contract we want to interact with
   */
  async getContractAbi(params: { contractId: number }): Promise<AbiInterface> {
    await this.initialiseReachAccount();
    const ctc = this.reachAccount.contract(backend, params.contractId);
    return await ctc.getABI();
  }

}
