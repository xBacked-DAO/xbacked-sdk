# xbacked-sdk
Official SDK for the xBacked Protocol
This allows third party software & bots to communicate seamlessly with the xBacked protocol.

# Installation
```
yarn install @xbacked-dao/xbacked-sdk
```
# Usage
```js
import { VaultsClient, Vault, convertFromMicroUnits } from '@xbacked-dao/xbacked-sdk';

const acc = new VaultsClient({
  network: 'LocalHost | TestNet | MainNet',
  mnemonic: process.env.SEED_PHRASE
});

//current value is placeholder, vault id changes depending on which Net you use
const vault = new Vault({ name: "algo", network: acc.network });

// global vault state
const vaultState = await acc.getVaultState({ vault });

const price = convertFromMicroUnits(vaultState.collateralPrice)
await acc.createVault({
  collateral: 100,
  mintAmount: 50,
  vault,
  minimumPrice: price - price * 0.02,
  maximumPrice: price + price * 0.02
})

// data for a specific vault
const myVault = await acc.getUserInfo({vault, address: await acc.getAddress()});
const friendsVault =  await acc.getUserInfo({vault, address: friendsAddress});  

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
  })
}

```
