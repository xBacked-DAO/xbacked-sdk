import { Vault, ReachUserVault } from '../Vault';
import VaultEvent from './VaultEvent';

/**
 * The type of transaction for a particular  [[VaultTransactionEvent]]
 */
enum TransactionType {
  DEPOSIT,
  MINT,
  REPAY,
  WITHDRAW,
  LIQUIDATE,
}

/**
 * Representation of a VaultTransaction event
 */
export default class VaultTransactionEvent extends VaultEvent {
  /** @property The type of transaction */
  type: string;
  /** @property The current state of the vault */
  vaultState: ReachUserVault;

  constructor(round: number, owner: string, type: string, vaulState: ReachUserVault) {
    super(round, owner);
    this.type = type;
    this.vaultState = vaulState;
  }

  /** Allows the instanstiation of the [[VaultTransactionEvent]] */
  static parseEvent(event: any, reachStdLib: any): VaultTransactionEvent {
    return new VaultTransactionEvent(
      reachStdLib.bigNumberToNumber(event.when),
      reachStdLib.formatAddress(event.what[0]),
      TransactionType[reachStdLib.bigNumberToNumber(event.what[1])],
      Vault.parseUserInfo(event.what[2]),
    );
  }
}
