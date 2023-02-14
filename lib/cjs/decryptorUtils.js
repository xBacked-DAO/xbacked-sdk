"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptAssumingRole = exports.decrypt = exports.getCredentials = void 0;
// @ts-ignore
const aws_sdk_1 = __importDefault(require("aws-sdk"));
/**
 * Obtains access credentials assuming an elegible KMS role, given valid AWS
 * user credentials and the spec of the role to assume.
 * @param params type of [[STSParams]]
 * @param assumeRoleSpec type of [[AssumeRoleSpec]]
 * @returns Promise type of [[AWS.STS.Credentials]]
 */
function getCredentials(params, assumeRoleSpec) {
    const sts = new aws_sdk_1.default.STS(params);
    return new Promise((resolve, reject) => {
        sts.assumeRole(assumeRoleSpec, (err, data) => {
            if (err) {
                throw err;
            }
            else {
                resolve(data.Credentials);
            }
        });
    });
}
exports.getCredentials = getCredentials;
/**
 * Decrypts a string using the AWS KMS service.
 * @param buffer type of [[Buffer]]
 * @param credentials type of [[AWS.STS.Credentials]]
 * @returns Promise type of [[String]]
 */
function decrypt(buffer, credentials) {
    const kms = new aws_sdk_1.default.KMS({
        accessKeyId: credentials === null || credentials === void 0 ? void 0 : credentials.AccessKeyId,
        secretAccessKey: credentials === null || credentials === void 0 ? void 0 : credentials.SecretAccessKey,
        sessionToken: credentials === null || credentials === void 0 ? void 0 : credentials.SessionToken,
        region: 'us-west-2',
    });
    return new Promise((resolve, reject) => {
        const params = {
            CiphertextBlob: buffer,
        };
        kms.decrypt(params, (err, data) => {
            var _a;
            if (err) {
                throw err;
            }
            else {
                resolve((_a = data.Plaintext) === null || _a === void 0 ? void 0 : _a.toString().trim());
            }
        });
    });
}
exports.decrypt = decrypt;
/**
 * Utility function that combines getCredentials() and decrypt().
 * @param buffer type of [[Buffer]]
 * @param stsParams type of [[STSParams]]
 * * @param assumeRoleSpec type of [[AssumeRoleSpec]]
 * @returns Promise type of [[String]]
 */
function decryptAssumingRole(buffer, stsParams, assumeRoleSpec) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield getCredentials(stsParams, assumeRoleSpec);
        return decrypt(buffer, credentials);
    });
}
exports.decryptAssumingRole = decryptAssumingRole;
//# sourceMappingURL=decryptorUtils.js.map