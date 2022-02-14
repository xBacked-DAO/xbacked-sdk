/* tslint:disable no-var-requires */
const { Account } = require('./Account');
const { Vault } = require('./Vault').default;
import * as VaultDiscovery from './vaultDiscovery';
import * as Utils  from './utils';

module.exports = { Account, Vault, ...VaultDiscovery, ...Utils };
