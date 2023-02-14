export function getExports(s: any): {};
export function _getEvents(s: any): {
    Announcer: {
        vaultCreated: any[];
        vaultTransaction: any[];
    };
};
export function _getViews(s: any, viewlib: any): {
    infos: {
        State: {
            read: {
                decode: (i: any, svs: any, args: any) => Promise<{
                    LIQUIDATION_COLLATERAL_RATIO: any;
                    MINIMUM_COLLATERAL_RATIO: any;
                    VAULT_INTEREST_RATE: any;
                    addresses: any;
                    coldState: any;
                    companions: any;
                    hotState: any;
                } | undefined>;
                dom: never[];
                rng: any;
            };
            readVault: {
                decode: (i: any, svs: any, args: any) => Promise<any>;
                dom: any[];
                rng: any;
            };
        };
    };
    views: {
        1: any[];
        2: any[];
        3: any[];
        5: any[];
        7: any[];
    };
};
export function _getMaps(s: any): {
    mapDataTy: any;
};
export function Admin(ctcTop: any, interact: any): Promise<undefined>;
export function _AdminAPI_replenishSupply7(ctcTop: any, interact: any): Promise<undefined>;
export function _AdminAPI_setAdminProperties7(ctcTop: any, interact: any): Promise<undefined>;
export function _AdminAPI_updateAdminAddress7(ctcTop: any, interact: any): Promise<undefined>;
export function _Any_halt5(ctcTop: any, interact: any): Promise<undefined>;
export function _FeeCollector_collectFees7(ctcTop: any, interact: any): Promise<undefined>;
export function _FeeCollector_dripInterest7(ctcTop: any, interact: any): Promise<undefined>;
export function _Liquidator_liquidateVault7(ctcTop: any, interact: any): Promise<undefined>;
export function _Oracle_updatePrice7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultOwner_createVault7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultOwner_depositCollateral7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultOwner_mintToken7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultOwner_returnVaultDebt7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultOwner_withdrawCollateral7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultRedeemer_proposeVault7(ctcTop: any, interact: any): Promise<undefined>;
export function _VaultRedeemer_redeemVault7(ctcTop: any, interact: any): Promise<undefined>;
export function AdminAPI_replenishSupply(ctcTop: any, interact: any): Promise<undefined>;
export function AdminAPI_setAdminProperties(ctcTop: any, interact: any): Promise<undefined>;
export function AdminAPI_updateAdminAddress(ctcTop: any, interact: any): Promise<undefined>;
export function Any_halt(ctcTop: any, interact: any): Promise<undefined>;
export function FeeCollector_collectFees(ctcTop: any, interact: any): Promise<undefined>;
export function FeeCollector_dripInterest(ctcTop: any, interact: any): Promise<undefined>;
export function Liquidator_liquidateVault(ctcTop: any, interact: any): Promise<undefined>;
export function Oracle_updatePrice(ctcTop: any, interact: any): Promise<undefined>;
export function VaultOwner_createVault(ctcTop: any, interact: any): Promise<undefined>;
export function VaultOwner_depositCollateral(ctcTop: any, interact: any): Promise<undefined>;
export function VaultOwner_mintToken(ctcTop: any, interact: any): Promise<undefined>;
export function VaultOwner_returnVaultDebt(ctcTop: any, interact: any): Promise<undefined>;
export function VaultOwner_withdrawCollateral(ctcTop: any, interact: any): Promise<undefined>;
export function VaultRedeemer_proposeVault(ctcTop: any, interact: any): Promise<undefined>;
export function VaultRedeemer_redeemVault(ctcTop: any, interact: any): Promise<undefined>;
export const _version: "0.1.12";
export const _versionHash: "0.1.12 (796d7fb3)";
export const _backendVersion: 25;
export const _stateSourceMap: {
    1: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
    2: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
    3: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
    5: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
    6: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
    7: {
        at: string;
        fs: never[];
        msg: null;
        who: string;
    };
};
export namespace _Connectors {
    export { _ALGO as ALGO };
}
export namespace _Participants {
    export { Admin };
    export { AdminAPI_replenishSupply };
    export { AdminAPI_setAdminProperties };
    export { AdminAPI_updateAdminAddress };
    export { Any_halt };
    export { FeeCollector_collectFees };
    export { FeeCollector_dripInterest };
    export { Liquidator_liquidateVault };
    export { Oracle_updatePrice };
    export { VaultOwner_createVault };
    export { VaultOwner_depositCollateral };
    export { VaultOwner_mintToken };
    export { VaultOwner_returnVaultDebt };
    export { VaultOwner_withdrawCollateral };
    export { VaultRedeemer_proposeVault };
    export { VaultRedeemer_redeemVault };
}
export namespace _APIs {
    namespace AdminAPI {
        export { AdminAPI_replenishSupply as replenishSupply };
        export { AdminAPI_setAdminProperties as setAdminProperties };
        export { AdminAPI_updateAdminAddress as updateAdminAddress };
    }
    namespace Any {
        export { Any_halt as halt };
    }
    namespace FeeCollector {
        export { FeeCollector_collectFees as collectFees };
        export { FeeCollector_dripInterest as dripInterest };
    }
    namespace Liquidator {
        export { Liquidator_liquidateVault as liquidateVault };
    }
    namespace Oracle {
        export { Oracle_updatePrice as updatePrice };
    }
    namespace VaultOwner {
        export { VaultOwner_createVault as createVault };
        export { VaultOwner_depositCollateral as depositCollateral };
        export { VaultOwner_mintToken as mintToken };
        export { VaultOwner_returnVaultDebt as returnVaultDebt };
        export { VaultOwner_withdrawCollateral as withdrawCollateral };
    }
    namespace VaultRedeemer {
        export { VaultRedeemer_proposeVault as proposeVault };
        export { VaultRedeemer_redeemVault as redeemVault };
    }
}
declare namespace _ALGO {
    namespace ABI {
        const impure: string[];
        const pure: string[];
        const sigs: string[];
    }
    const appApproval: string;
    const appClear: string;
    namespace companionInfo {
        const api_AdminAPI_setAdminProperties: number;
        const api_FeeCollector_collectFees: number;
        const api_Liquidator_liquidateVault: number;
        const api_VaultOwner_createVault: number;
        const api_VaultOwner_depositCollateral: number;
        const api_VaultOwner_mintToken: number;
        const api_VaultOwner_returnVaultDebt: number;
        const api_VaultOwner_withdrawCollateral: number;
        const api_VaultRedeemer_proposeVault: number;
        const api_VaultRedeemer_redeemVault: number;
    }
    const extraPages: number;
    const mapDataKeys: number;
    const mapDataSize: number;
    const stateKeys: number;
    const stateSize: number;
    const unsupported: never[];
    const version: number;
    const warnings: never[];
}
export {};
