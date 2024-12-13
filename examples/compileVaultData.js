const goBtcVaultData = require('./data/mAlgo.json');


// console.log({goBtcVaultData});

const newStructure = {};
goBtcVaultData.forEach((el, i) =>{
  if (el.length != 0) {
    if (newStructure[el[0].time.slice(0, 10)]) {
      const newStructureItem = newStructure[el[0].time.slice(0, 10)];
      newStructureItem.push(el);
      newStructure[el[0].time.slice(0, 10)] = newStructureItem;
    } else {
      newStructure[el[0].time.slice(0, 10)] = [el];
    }
  }
});


const finalStructure = {};
Object.entries(newStructure).map(([a, b])=>{
  console.log(a);
  let activeVaultPerDay = b[0];
  if (b.length > 1) {
    activeVaultPerDay = b[0].filter((el)=> b[b.length - 1]
        .find((item)=> item.vaultOwner == el.vaultOwner) != undefined);
  }
  //   console.log({activeVaultPerDay});
  finalStructure[a] = activeVaultPerDay;
});

console.log({finalStructure});
console.log(finalStructure['2024-10-20']);
// console.log(newStructure);
