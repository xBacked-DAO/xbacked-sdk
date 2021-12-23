import { Account } from '@xbacked-dao/xbacked-sdk';
import { TOKEN_ID } from './constants';

(async () => {
  const acc = new Account({ signer: 'MyAlgoConnect', network: 'TestNet' });
  await acc.optIntoToken(TOKEN_ID);
  console.log('opted into token');
})();
