/* eslint-disable max-len */
import pkg from 'xbacked-sdk';
(async () =>{
  const {Account, Vault} = pkg;
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  const isLiquidated = await acc.liquidateVault({vault: new Vault({id: VAULT_ID}),
    tokenId: TOKEN_ID});
  console.log('isLiquidated', isLiquidated);
})();
