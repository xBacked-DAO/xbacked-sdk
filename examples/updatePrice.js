import {Account, Vault} from 'xbacked-sdk';
(async () => {
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  // eslint-disable-next-line max-len
  const isPriceUpdated = await acc.updatePrice({price: 0.2, vault: new Vault({id: VAULT_ID}), tokenId: TOKEN_ID});
  console.log('isPriceUpdated', isPriceUpdated);
})();
