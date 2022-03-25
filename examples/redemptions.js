const { Account, Vault } = require('..');

(async () => {
  const account = new Account({
    mnemonic: 'lens sell....',
    network: 'LocalHost',
  });
  const vault = new Vault({ id: 123 });

  // receive 0.75% of the collateral of the vault, protocol takes 0.25%
  await account.proposeVaultForRedemption({ vault, address: 'wallet address of user vault' });

  // redeem 100 xUSD tokens & receive $100 worth of collateral
  await account.redeemVault({ vault, address: 'wallet address of user vault', amountToRedeem: 100 });
})();
