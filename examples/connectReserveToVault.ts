import { Account, Reserve, Vault } from '@xbacked-dao/xbacked-sdk';
import { VAULT_ID } from './constants';

(async () => {
  const reserve = new Reserve({ price: 9 });
  const acc = new Account({
    signer: 'MyAlgoConnect',
    network: 'TestNet',
    interact: reserve,
  });
  acc.addListener('getCollateralPrice', async () => 2);
  await acc.connectToVault({ vault: new Vault({ id: VAULT_ID }) });
  console.log('connected successful');
})();
