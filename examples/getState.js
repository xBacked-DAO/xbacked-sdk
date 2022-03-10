/* eslint-disable no-unused-vars */
const {Account, Vault} = require('..');
(async () => {
  const acc = new Account({
    mnemonic: 'lens sell....',
    network: 'LocalHost',
  });
  // eslint-disable-next-line max-len
  const userInfo = await acc.getUserInfo({vault: new Vault({id: 146}), address: ''});
  const vaultState = await acc.getVaultState({vault: new Vault({id: 146})});
})();
