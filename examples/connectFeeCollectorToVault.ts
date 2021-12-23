import { FeeCollector, Account, Vault } from '@xbacked-dao/xbacked-sdk';
import { VAULT_ID } from './constants';

(async () => {
  const feeCollector = new FeeCollector();
  const acc = new Account({
    signer: 'MyAlgoConnect',
    network: 'TestNet',
    interact: feeCollector,
  });

  await acc.connectToVault({ vault: new Vault({ id: VAULT_ID }) });
  console.log('opt in successful');
})();
