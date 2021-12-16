import Interact from './Interact';
import { convertToMicroUnits, convertFromMicroUnits } from '../utils';
interface CreateVaultParams {
  collateral: number;
  mintAmount: number;
}
class Minter extends Interact {
  params: CreateVaultParams;
  parent: Minter;
  constructor(params: CreateVaultParams) {
    super({ name: 'VaultOwner' });
    this.params = {
      collateral: convertToMicroUnits(params.collateral),
      mintAmount: convertToMicroUnits(params.mintAmount),
    };
    this.createVault = this.createVault;
    this.signalDone = this.signalDone;
    this.parent = this;
  }

  async createVault(initialCollateralPrice: any, stableCoin: any): Promise<number[]> {
    const returnValues = await new Promise((resolve, reject) => {
      if (this.parent.listeners('createVault').length === 0) {
        resolve([this.parent.params.collateral, this.parent.params.mintAmount]);
      }
      this.parent.emit('createVault', {
        resolve,
        params: { price: convertFromMicroUnits(initialCollateralPrice.toNumber()), token: stableCoin },
      });
    });
    if (Array.isArray(returnValues)) {
      let valueIsNotNumber = false;
      returnValues.forEach((item) => {
        if (typeof item !== 'number') {
          valueIsNotNumber = true;
        }
      });
      if (valueIsNotNumber) {
        return [this.parent.params.collateral, this.parent.params.mintAmount];
      } else {
        return returnValues.map((value) => {
          return convertToMicroUnits(value);
        });
      }
    } else {
      return [0, 0];
    }
  }

  async signalDone(SIGNAL_MINTER_FINISHED: number) {
    if (this.parent.listeners('signalDone').length !== 0) {
      this.parent.emit('signalDone', { params: { signalDone: SIGNAL_MINTER_FINISHED } });
    }
  }
}

export = Minter;
