import Interact from './Interact';
import {setOracleAddress, setDaoAddress, setGovStakersAddress, setCollateralType, setStablecoin, depositInitialSupply} from "../listeners"
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
    initialSuply?: number;
    parent: Admin;
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
      this.parent = this;
    }

    async setOracleAddress(): Promise<string>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(setOracleAddress).length === 0){
               resolve(this.parent.oracleAddress)
            };
            this.parent.emit(setOracleAddress, {resolve})
        });
        if(typeof returnValue == 'string'  ){
            return returnValue;
        }
        return this.parent.oracleAddress? this.parent.oracleAddress: "";
    }

    async setDaoAddress(): Promise<string>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(setDaoAddress).length === 0){
               resolve(this.parent.daoAddress)
            };
            this.parent.emit(setDaoAddress, {resolve})
        });
        if(typeof returnValue == 'string'  ){
            return returnValue;
        }
        return this.parent.daoAddress? this.parent.daoAddress: "";
    }
    async setGovStakersAddress(): Promise<string>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(setGovStakersAddress).length === 0){
               resolve(this.parent.govStakersAddress);
            };
            this.parent.emit(setGovStakersAddress, {resolve})
        });
        if(typeof returnValue == 'string'  ){
            return returnValue;
        }
        return this.parent.govStakersAddress? this.parent.govStakersAddress: ""
    }
    async setCollateralType(): Promise<number>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(setCollateralType).length === 0){
               resolve(this.parent.collateralType);
            };
            this.parent.emit(setCollateralType, {resolve})
        });
        if(typeof returnValue == 'number'  ){
            return returnValue;
        }
        return this.parent.collateralType? this.parent.collateralType: 0
    }
 
    async setStablecoin(): Promise<number>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(setCollateralType).length === 0){
               resolve(this.parent.collateralType);
            };
            this.parent.emit(setCollateralType, {resolve})
        });
        if(typeof returnValue == 'number'  ){
            return returnValue;
        }
        return this.stableCoin? this.stableCoin: 0;
    }
 
    async depositInitialSupply(): Promise<number>{
        const returnValue = await new Promise((resolve, reject) => {
            if(this.parent.listeners(depositInitialSupply).length === 0){
               resolve(this.parent.initialSuply);
            };
            this.parent.emit(depositInitialSupply, {resolve})
        });
        if(typeof returnValue == 'number'  ){
            return returnValue;
        }
        return this.parent.initialSuply? this.parent.initialSuply: 0;
    }

  }
  
  export default Admin;
  
//   setOracleAddress: Fun([], Address),
//   setDaoAddress: Fun([], Address),
//   setGovStakersAddress: Fun([], Address),
//   setCollateralType: Fun([], Token),
//   setStablecoin: Fun([], Token),
//   depositInitialSupply: Fun([], UInt)