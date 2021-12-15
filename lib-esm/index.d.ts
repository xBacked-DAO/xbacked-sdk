import Account from './Account';
import Minter from './interacts/Minter';
import Reserve from './interacts/Reserve';
import Vault from './Vault';
import FeeCollector from './interacts/FeeCollector';
declare const _default: {
    xbacked: (client: string) => string;
    Account: typeof Account;
    Minter: typeof Minter;
    Vault: typeof Vault;
    Reserve: typeof Reserve;
    FeeCollector: typeof FeeCollector;
};
export = _default;
