import Vault, { ReachUserVault } from '../Vault';
import VaultEvent from './VaultEvent';

enum TransactionType {
  DEPOSIT,
  MINT,
  REPAY,
  WITHDRAW,
  LIQUIDATE,
}

export default class VaultTransactionEvent extends VaultEvent {
  type: string;
  vaultState: ReachUserVault;

  constructor(round: number, owner: string, type: string, vaulState: ReachUserVault) {
    super(round, owner);
    this.type = type;
    this.vaultState = vaulState;
  }

  static parseEvent(event: any, reachStdLib: any): VaultTransactionEvent {
    return new VaultTransactionEvent(
      reachStdLib.bigNumberToNumber(event.when),
      reachStdLib.addressFromHex(event.what[0]),
      TransactionType[reachStdLib.bigNumberToNumber(event.what[1])],
      Vault.parseVaultState(event.what[2])
    );
  }
}
