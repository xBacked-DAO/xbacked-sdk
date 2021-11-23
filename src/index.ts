import Account from './Account';
import Minter from './interacts/Minter';
import Vault from './Vault';
const xbacked = (client: string) => {
  return client;
};

export = { xbacked, Account, Minter, Vault };
