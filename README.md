# xbacked-sdk
Official SDK for the xBacked Protocol
This allows third party software to communicate seamlessly with the xbacked protocol.

# Usage
## Deploy  A Vault
```js
import {Account, Minter}  from 'xbacked-sdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';


const minter = new Minter({collateral: 5, mintAmount: 2});

const acc = new Account({signer: 'MyAlgoConnect',
  network: 'TestNet', interact: minter});

await acc.deployVault();
```
