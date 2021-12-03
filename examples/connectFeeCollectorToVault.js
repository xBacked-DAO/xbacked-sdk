import pkg from 'xbacked-sdk'
const{FeeCollector, Account} = pkg
const feeCollector = new FeeCollector({name: "FeeCollector"});
const acc = new Account({mnemonic:  "minimum melody hollow balance cheap door gloom script mix violin tenant ceiling field skate fork room gather degree police swap airport stove conduct able dolphin",
    interact: feeCollector});
await acc.connectAsFeeCollectorToVault({vault: new Vault({id: 186})});
console.log("opt in successful");
"minimum melody hollow balance cheap door gloom script mix violin tenant ceiling field skate fork room gather degree police swap airport stove conduct able dolphin"

