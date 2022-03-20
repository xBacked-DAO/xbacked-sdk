# xbacked-sdk
Official SDK for the xBacked Protocol
This allows third party software & bots to communicate seamlessly with the xBacked protocol.

# Installation
```
yarn install @xbacked-dao/xbacked-sdk
```
# Usage
```js
import { Account, Vault, convertFromMicroUnits } from '@xbacked-dao/xbacked-sdk';

const acc = new Account({
  network: 'LocalHost | TestNet | MainNet',
  mnemonic: process.env.SEED_PHRASE
});
//should be specific to vault id depending on which Net you're using
const vault = new Vault({ id: 123456 });

await acc.createVault({
  collateral: 100,
  mintAmount: 50,
  vault,
});

// global vault state
const vaultState = await acc.getVaultState({ vault });
// data for a specific vault
const myVault = await vault.getUserInfo({ account, address: await acc.getAddress() });
const friendsVault = await vault.getUserInfo({ account, address: friendsAddress });

if (
  // might want to calculate this off chain for latest CR
  (friendsVault.collateralRatio < vaultState.liquidationCollateralRatio) ||
  // partial liquidations are available
  friendsVault.liquidating
) {
  await acc.liquidateVault({
    address: friendsAddress,
    debtAmount: 500,
    vault
  }
}

```
