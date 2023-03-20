import { VaultClient } from '../VaultClient';
declare class MockVaultClient extends VaultClient {
    initialiseReachAccount(): Promise<void>;
}
export default MockVaultClient;
