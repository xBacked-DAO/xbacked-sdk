/* tslint:disable no-var-requires */
const Account = require('./Account').default;
const Vault = require('./Vault').default;
const EventFetcher = require('./EventFetcher').default;
const xbacked = (client: string) => {
  return client;
};

module.exports = { Account, Vault, EventFetcher };
