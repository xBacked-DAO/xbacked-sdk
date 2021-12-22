/* tslint:disable no-var-requires */
const Account = require('./Account').default;
const Minter = require('./interacts/Minter').default;
const Reserve = require('./interacts/Reserve').default;
const Vault = require('./Vault').default;
const FeeCollector = require('./interacts/FeeCollector').default;
const xbacked = (client: string) => {
  return client;
};

module.exports = { Account, Minter, Reserve, Vault, FeeCollector };
