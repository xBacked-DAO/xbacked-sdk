import { Vault, ReachUserVault } from '../Vault';
import VaultEvent from './VaultEvent';

/** Representation of the Created Vault Events */
export default class VaultCreatedEvent extends VaultEvent {
  /** @property the current state of the vault */
  vaultState: ReachUserVault;

  constructor(round: number, owner: string, vaulState: ReachUserVault) {
    super(round, owner);
    this.vaultState = vaulState;
  }
  /** Allows the instanstiation of the [[VaultCreatedEvents]] */
  static parseEvent(event: any, reachStdLib: any): VaultCreatedEvent {
    return new VaultCreatedEvent(
      reachStdLib.bigNumberToNumber(event.when),
      reachStdLib.formatAddress(event.what[0]),
      Vault.parseUserInfo(event.what[1]),
    );
  }
}
