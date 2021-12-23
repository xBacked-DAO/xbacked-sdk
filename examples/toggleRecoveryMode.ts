import {Account, Vault}  from '@xbacked-dao/xbacked-sdk';
import { VAULT_ID } from './constants';

(async () =>{
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  // eslint-disable-next-line max-len
  const isRecoveryModeChanged = await acc.toggleRecoveryMode({vault: new Vault({id: VAULT_ID}), mode: true});
  console.log('isRecoveryModeChanged', isRecoveryModeChanged);
})();
