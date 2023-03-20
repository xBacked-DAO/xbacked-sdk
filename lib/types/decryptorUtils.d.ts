/// <reference types="node" />
import AWS from 'aws-sdk';
/**
 * Specifies an object with AWS access credentials needed for STS.
 */
export declare type STSParams = {
    /** @property The user's access key id */
    accessKeyId: string;
    /** @property The user's access key secret */
    secretAccessKey: string;
    /** @property The region to log the user in */
    region: string;
};
/**
 * Specifies the Assume Role object used by the getCredentials method
 */
export declare type AssumeRoleSpec = {
    /** @property The ARN of the role to assume */
    RoleArn: string;
    /** @property The name that the session will use */
    RoleSessionName: string;
};
/**
 * Obtains access credentials assuming an elegible KMS role, given valid AWS
 * user credentials and the spec of the role to assume.
 * @param params type of [[STSParams]]
 * @param assumeRoleSpec type of [[AssumeRoleSpec]]
 * @returns Promise type of [[AWS.STS.Credentials]]
 */
export declare function getCredentials(params: STSParams, assumeRoleSpec: AssumeRoleSpec): Promise<AWS.STS.Credentials | undefined>;
/**
 * Decrypts a string using the AWS KMS service.
 * @param buffer type of [[Buffer]]
 * @param credentials type of [[AWS.STS.Credentials]]
 * @returns Promise type of [[String]]
 */
export declare function decrypt(buffer: Buffer, credentials?: AWS.STS.Credentials): Promise<string | undefined>;
/**
 * Utility function that combines getCredentials() and decrypt().
 * @param buffer type of [[Buffer]]
 * @param stsParams type of [[STSParams]]
 * * @param assumeRoleSpec type of [[AssumeRoleSpec]]
 * @returns Promise type of [[String]]
 */
export declare function decryptAssumingRole(buffer: Buffer, stsParams: STSParams, assumeRoleSpec: AssumeRoleSpec): Promise<string | undefined>;
