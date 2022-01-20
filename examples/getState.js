/* eslint-disable no-unused-vars */
import {Account, Vault} from 'xbacked-sdk';
(async () => {
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  // eslint-disable-next-line max-len
  const userInfo = await acc.getUserInfo({vault: new Vault({id: 146}), address: ''});
  const vaultState = await acc.getVaultState({vault: new Vault({id: 146})});
})();
