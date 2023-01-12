const {addrFromBox} = require('..');

const box = {
  // eslint-disable-next-line max-len
  name: new Uint8Array([0, 19, 9, 153, 63, 3, 239, 164, 190, 48, 181, 181, 46, 170, 244, 154, 249, 81, 15, 70, 9, 15, 106, 215, 19, 46, 80, 99, 12, 234, 95, 31, 61]),
};

console.log(addrFromBox(box));
