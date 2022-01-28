
export default class VaultEvent {
  round: number;
  owner: string;

  constructor(round: number, owner: string) {
    this.round = round;
    this.owner = owner;
  }

  static parseEvent: (event: any, reachStdLib: any) => VaultEvent;
}
