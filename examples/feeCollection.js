const {Account, Vault} = require('..');

(async () => {
  const account = new Account({
    mnemonic: 'lens sell....',
    network: 'LocalHost',
  });
  const vault = new Vault({id: 123});

  // distribute collateral fees to xUSD stakers and DAO
  // Receive 0.5% of the accured fees
  await account.collectFees({vault});
  // Settle accrued interest & distribute to DAO & Governance token stakers
  await account.settleInterest({vault});
  // Drip interest for specific vault. This is helpful when liquidating
  await account.dripInterest({address: 'wallet address of user vault', vault});
})();
