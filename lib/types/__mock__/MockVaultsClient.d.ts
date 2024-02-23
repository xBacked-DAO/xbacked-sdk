import { VaultsClient } from '../VaultsClient';
declare class MockVaultsClient extends VaultsClient {
    initialiseReachAccount(): Promise<void>;
}
export default MockVaultsClient;
