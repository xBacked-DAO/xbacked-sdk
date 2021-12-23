import { Account, Vault } from '@xbacked-dao/xbacked-sdk';
import { VAULT_ID, TOKEN_ID } from './constants';

(async () => {
  const acc = new Account({ signer: 'MyAlgoConnect', network: 'TestNet' });
  const isLiquidated = await acc.liquidateVault({
    vault: new Vault({ id: VAULT_ID }),
    tokenId: TOKEN_ID,
  });
  console.log('isLiquidated', isLiquidated);
})();
