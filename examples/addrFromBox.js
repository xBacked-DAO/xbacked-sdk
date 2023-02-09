const {addrFromBox, addrToBox} = require('..');
const {decodeAddress} = require('algosdk');

const addr = 'CMEZSPYD56SL4MFVWUXKV5E27FIQ6RQJB5VNOEZOKBRQZ2S7D46XS6PZ3Y';

console.log(`Address: ${addr}`);
const boxName = addrToBox(addr);
console.log(`Box name: ${boxName}`);

const boxNameBytes = new Uint8Array([0, ...decodeAddress(addr).publicKey]);

// eslint-disable-next-line max-len
const expectedBytes = new Uint8Array([0, 19, 9, 153, 63, 3, 239, 164, 190, 48, 181, 181, 46, 170, 244, 154, 249, 81, 15, 70, 9, 15, 106, 215, 19, 46, 80, 99, 12, 234, 95, 31, 61]);

const box = {name: boxNameBytes};

const derivedAddr = addrFromBox(box);
console.log(`Address from box: ${derivedAddr}`);
console.log(`Address from box matches orinal: ${derivedAddr === addr}`);
// eslint-disable-next-line max-len
console.log(`Expected bytes match result: ${expectedBytes.toString() === boxNameBytes.toString()}`);
