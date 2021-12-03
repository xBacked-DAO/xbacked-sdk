import pkg from 'xbacked-sdk'
const {Account, Reserve, Vault} = pkg;

const reserve = new Reserve({price: 9})
const acc = new Account({mnemonic:  "sniff soap champion basic agree electric silly reject idle decorate transfer calm harbor pretty universe orbit deny just silly enter lunar ball spot abandon ice",
interact: reserve});
acc.addListener("getCollateralPrice", async() => {
    console.log("Get collateral listener called");
    return 2000000;
    })
await acc.connectAsReserveToVault({vault: new Vault({id: 186 })});
console.log("connected successful");

"sniff soap champion basic agree electric silly reject idle decorate transfer calm harbor pretty universe orbit deny just silly enter lunar ball spot abandon ice"