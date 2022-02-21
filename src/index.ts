/* tslint:disable no-var-requires */
import { Account } from './Account'
import { Vault } from './Vault'
import * as VaultDiscovery from './vaultDiscovery';
import * as Utils from './utils';

module.exports = { Account, Vault, ...VaultDiscovery, ...Utils };
