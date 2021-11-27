import Account from './Account';
import Minter from './interacts/Minter';
import Reserve from './interacts/Reserve';
import Vault from './Vault';
import FeeCollector from './interacts/FeeCollector';
const xbacked = (client: string) => {
  return client;
};

export = { xbacked, Account, Minter, Vault, Reserve, FeeCollector };
