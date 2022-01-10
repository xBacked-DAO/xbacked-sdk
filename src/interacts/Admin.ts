import Interact from './Interact';
interface AdminParams {
    oracleAddress?: string,
    daoAddress?: string,
    govStakersAddress?: string,
    collateralType?: number,
    stableCoin?: number,
    initialSuply?: number
  }
class Admin extends Interact {
    oracleAddress?: string;
    daoAddress?: string;
    govStakersAddress?: string;
    collateralType?: number;
    stableCoin?: number;
    initialSuply?: number
    constructor(params: AdminParams) {
      super({ name: 'Admin' });
      this.oracleAddress = params.oracleAddress;
      this.daoAddress = params.daoAddress;
      this.govStakersAddress = params.govStakersAddress;
      this.collateralType = params.collateralType;
      this.stableCoin = params.stableCoin;
      this.initialSuply = params.initialSuply;

      this.depositInitialSupply = this.depositInitialSupply;
      this.setOracleAddress = this.setOracleAddress;
      this.setGovStakersAddress = this.setGovStakersAddress;
      this.setCollateralType = this.setCollateralType;
      this.setStablecoin = this.setStablecoin
    }

    //TODO 
    async setOracleAddress(): Promise<string>{
        return this.oracleAddress? this.oracleAddress: "";
    }

    //TODO 
    async setDaoAddress(): Promise<string>{
        return this.daoAddress? this.daoAddress: "";
    }
    //TODO 
    async setGovStakersAddress(): Promise<string>{
        return this.govStakersAddress? this.govStakersAddress: ""
    }
    //TODO 
    async setCollateralType(): Promise<number>{
        return this.collateralType? this.collateralType: 0;
    }
    //TODO 
    async setStablecoin(): Promise<number>{
        return this.stableCoin? this.stableCoin: 0;
    }
    //TODO 
    async depositInitialSupply(): Promise<number>{
        return this.initialSuply? this.initialSuply: 0;
    }

  }
  
  export default Admin;
  
//   setOracleAddress: Fun([], Address),
//   setDaoAddress: Fun([], Address),
//   setGovStakersAddress: Fun([], Address),
//   setCollateralType: Fun([], Token),
//   setStablecoin: Fun([], Token),
//   depositInitialSupply: Fun([], UInt)