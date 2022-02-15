/** Representation of a VaultEvent */
export default class VaultEvent {
  /** @property the round that the vault event happened in  */
  round: number;
  /** @property the address of the user who triggered the vault event */
  owner: string;

  constructor(round: number, owner: string) {
    this.round = round;
    this.owner = owner;
  }

  /** Abstract method that allows the creation of objects of type [[VaultEvent]] */
  static parseEvent: (event: any, reachStdLib: any) => VaultEvent;
}
