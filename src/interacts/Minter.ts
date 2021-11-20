import Interact from './Interact';
interface CreateVaulParams {
  collateral: number;
  mintAmount: number;
}
class Minter extends Interact {
   params: CreateVaulParams;
   parent: Minter;
  constructor(params: CreateVaulParams) {
    super({ name: 'VaultOwner' });
    this.params = params;
    this.createVault = this.createVault;
    this.parent = this;
  }

 async createVault(initialCollateralPrice: number): Promise<Array<number>> {
  const returnValues = await new Promise((resolve, reject) => {
    if( this.parent.listeners("createVault").length == 0){
      resolve([ this.parent.params.collateral,  this.parent.params.mintAmount])
    }
     this.parent.emit("createVault", {resolve, params: initialCollateralPrice});
  });
  console.log(returnValues,"rETURN VALUES");
  if (Array.isArray(returnValues)) {
    var valueIsNotNumber = false;
    returnValues.forEach(function(item){
       if(typeof item !== 'number'){
          valueIsNotNumber = true;
       }
    })
    if(valueIsNotNumber){
      return [this.parent.params.collateral,  this.parent.params.mintAmount]
    }else{
      return returnValues;
    }
  }else{
    return [0,0];
  }
}
  
}

export = Minter;