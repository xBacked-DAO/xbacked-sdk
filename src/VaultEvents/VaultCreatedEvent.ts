import Vault, { ReachUserVault } from '../Vault';
import VaultEvent from './VaultEvent';


export default class VaultCreatedEvent extends VaultEvent {
  vaultState: ReachUserVault;

  constructor(round: number, owner: string, vaulState: ReachUserVault) {
    super(round, owner);
    this.vaultState = vaulState;
  }

  static parseEvent(event: any, reachStdLib: any): VaultCreatedEvent {
    return new VaultCreatedEvent(
      reachStdLib.bigNumberToNumber(event.when),
      reachStdLib.addressFromHex(event.what[0]),
      Vault.parseVaultState(event.what[1])
    );
  }
}
