var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-ignore
import { loadStdlib } from '@reach-sh/stdlib';
// @ts-ignore
import { vault as backend } from '@xbacked-dao/xbacked-contracts';
import Reserve from './interacts/Reserve';
import { convertToMicroUnits } from './utils';
import MyAlgoConnect from '@randlabs/myalgo-connect';
var Account = /** @class */ (function () {
    function Account(params) {
        // console.log(backend);
        this.mnemonic = params.mnemonic;
        this.secretKey = params.secretKey;
        this.signer = params.signer;
        this.interact = params.interact;
        this.currentVault = params.currentVault;
        this.provider = params.provider;
        this.reachStdLib = loadStdlib('ALGO');
        if (params.network) {
            this.network = params.network;
        }
        else {
            this.network = 'LocalHost';
        }
        if (this.signer == null) {
            this.reachStdLib.setProviderByName(this.network);
        }
    }
    Account.prototype.initialiseReachAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var _j, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        if (!(this.mnemonic != null && this.reachAccount == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.reachStdLib.newAccountFromMnemonic(this.mnemonic)];
                    case 1:
                        _a.reachAccount = _l.sent();
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(this.secretKey != null && this.reachAccount == null)) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.reachStdLib.newAccountFromSecret(this.secretKey)];
                    case 3:
                        _b.reachAccount = _l.sent();
                        return [3 /*break*/, 13];
                    case 4:
                        if (!(this.signer != null && this.reachAccount == null && this.provider != null)) return [3 /*break*/, 8];
                        _d = (_c = this.reachStdLib).setWalletFallback;
                        return [4 /*yield*/, this.reachStdLib.walletFallback((_j = {
                                    providerEnv: this.network
                                },
                                _j[this.signer] = this.provider,
                                _j))];
                    case 5: return [4 /*yield*/, _d.apply(_c, [_l.sent()])];
                    case 6:
                        _l.sent();
                        _e = this;
                        return [4 /*yield*/, this.reachStdLib.getDefaultAccount()];
                    case 7:
                        _e.reachAccount = _l.sent();
                        return [3 /*break*/, 13];
                    case 8:
                        if (!(this.signer === 'MyAlgoConnect' && !this.reachAccount && !this.provider)) return [3 /*break*/, 12];
                        _g = (_f = this.reachStdLib).setWalletFallback;
                        return [4 /*yield*/, this.reachStdLib.walletFallback((_k = {
                                    providerEnv: this.network
                                },
                                _k[this.signer] = MyAlgoConnect,
                                _k))];
                    case 9: return [4 /*yield*/, _g.apply(_f, [_l.sent()])];
                    case 10:
                        _l.sent();
                        _h = this;
                        return [4 /*yield*/, this.reachStdLib.getDefaultAccount()];
                    case 11:
                        _h.reachAccount = _l.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        if (!this.reachAccount) {
                            throw Error('Provide  a signer, a mnemonic or a secretKey');
                        }
                        _l.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.deployVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctc;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.mnemonic != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ctc = this.reachAccount.contract(backend);
                        ctc.getInfo().then(function (info) {
                            var _a;
                            (_a = _this.interact) === null || _a === void 0 ? void 0 : _a.emit('appId', { params: { appId: info } });
                        });
                        return [4 /*yield*/, backend.Minter(ctc, __assign(__assign({}, this.interact), this.reachStdLib.hasConsoleLogger))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.connectAsReserveToVault = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        return [4 /*yield*/, backend.Reserve(ctc, __assign(__assign({}, this.interact), this.reachStdLib.hasConsoleLogger))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, params.vault];
                }
            });
        });
    };
    Account.prototype.connectAsFeeCollectorToVault = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        return [4 /*yield*/, backend.FeeCollector(ctc, __assign({}, this.reachStdLib.hasConsoleLogger))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, params.vault];
                }
            });
        });
    };
    Account.prototype.connectToVault = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.interact) {
                            throw Error('An interact has not yet been defined');
                        }
                        if (!(this.interact instanceof Reserve)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connectAsReserveToVault(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.connectAsFeeCollectorToVault(params)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Account.prototype.addListener = function (name, callBack) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                (_a = this.interact) === null || _a === void 0 ? void 0 : _a.addListener(name, function (_a) {
                    var resolve = _a.resolve, params = _a.params;
                    return __awaiter(_this, void 0, void 0, function () {
                        var returnValues;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(params === null || params === undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, callBack()];
                                case 1:
                                    returnValues = _b.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, callBack(params)];
                                case 3:
                                    returnValues = _b.sent();
                                    _b.label = 4;
                                case 4:
                                    if (resolve) {
                                        resolve(returnValues);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Account.prototype.optIntoToken = function (tokenID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reachAccount.tokenAccept(tokenID)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.liquidateVault = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, liquidationTokenBalance, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.Liquidator;
                        return [4 /*yield*/, this.reachStdLib.balanceOf(this.reachAccount, params.tokenId)];
                    case 2:
                        liquidationTokenBalance = _a.sent();
                        return [4 /*yield*/, put.liquidateVault(liquidationTokenBalance)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.updatePrice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.Oracle;
                        return [4 /*yield*/, put.updatePrice(convertToMicroUnits(params.price))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.toggleRecoveryMode = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.RecoveryToggler;
                        return [4 /*yield*/, put.toggleRecoveryMode(params.mode)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.mintToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.VaultOwner;
                        return [4 /*yield*/, put.mintToken(convertToMicroUnits(params.amount))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.depositToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.VaultOwner;
                        return [4 /*yield*/, put.depositCollateral(convertToMicroUnits(params.amount))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.withdrawCollateral = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.VaultOwner;
                        return [4 /*yield*/, put.withdrawCollateral(convertToMicroUnits(params.amount))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.returnVaultDebt = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.VaultOwner;
                        return [4 /*yield*/, put.returnVaultDebt(convertToMicroUnits(params.amount))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.redeemVault = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctc, put, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        ctc = this.reachAccount.contract(backend, params.vault.id);
                        put = ctc.a.VaultRedeemer;
                        return [4 /*yield*/, put.redeemVault(convertToMicroUnits(params.amount))];
                    case 2: return [4 /*yield*/, _a.sent()];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Account.prototype.getBalance = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var balance, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        if (!(this.reachAccount && params.tokenId !== 0 && params.tokenId !== null)) return [3 /*break*/, 2];
                        balance = this.reachStdLib.balanceOf(this.reachAccount, params.tokenId);
                        return [2 /*return*/, balance];
                    case 2: return [4 /*yield*/, this.reachStdLib.balanceOf(this.reachAccount)];
                    case 3:
                        balance = _a.sent();
                        return [2 /*return*/, balance.toNumber()];
                }
            });
        });
    };
    Account.prototype.fundFromFaucet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reachStdLib.canFundFromFaucet()];
                    case 2:
                        if (!((_a.sent()) && this.reachAccount != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.reachStdLib.fundFromFaucet(this.reachAccount, this.reachStdLib.parseCurrency(100))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    Account.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialiseReachAccount()];
                    case 1:
                        _a.sent();
                        if (this.reachAccount != null) {
                            return [2 /*return*/, this.reachStdLib.formatAddress(this.reachAccount)];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Account;
}());
