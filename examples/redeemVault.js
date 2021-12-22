import {Account, Vault} from 'xbacked-sdk';
(async () =>{
  const acc = new Account({signer: 'MyAlgoConnect',
    network: 'TestNet'});
  // eslint-disable-next-line max-len
  const isVaultRedeemed = await acc.redeemVault({vault: new Vault({id: VAULT_ID}), amount: 1});
  console.log('isVaultRedeemed', isVaultRedeemed);
})();
