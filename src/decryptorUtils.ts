// @ts-ignore
import AWS from 'aws-sdk';

/**
 * Specifies an object with AWS access credentials needed for STS.
 */
export type STSParams = {
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
export type AssumeRoleSpec = {
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
export function getCredentials(
  params: STSParams,
  assumeRoleSpec: AssumeRoleSpec,
): Promise<AWS.STS.Credentials | undefined> {
  const sts = new AWS.STS(params);

  return new Promise((resolve, reject) => {
    sts.assumeRole(assumeRoleSpec, (err, data) => {
      if (err) {
        throw err;
      } else {
        resolve(data.Credentials);
      }
    });
  });
}

/**
 * Decrypts a string using the AWS KMS service.
 * @param buffer type of [[Buffer]]
 * @param credentials type of [[AWS.STS.Credentials]]
 * @returns Promise type of [[String]]
 */
export function decrypt(buffer: Buffer, credentials?: AWS.STS.Credentials): Promise<string | undefined> {
  const kms = new AWS.KMS({
    accessKeyId: credentials?.AccessKeyId,
    secretAccessKey: credentials?.SecretAccessKey,
    sessionToken: credentials?.SessionToken,
    region: 'us-west-2',
  });

  return new Promise((resolve, reject) => {
    const params = {
      CiphertextBlob: buffer,
    };
    kms.decrypt(params, (err, data) => {
      if (err) {
        throw err;
      } else {
        resolve(data.Plaintext?.toString().trim());
      }
    });
  });
}

/**
 * Utility function that combines getCredentials() and decrypt().
 * @param buffer type of [[Buffer]]
 * @param stsParams type of [[STSParams]]
 * * @param assumeRoleSpec type of [[AssumeRoleSpec]]
 * @returns Promise type of [[String]]
 */
export async function decryptAssumingRole(
  buffer: Buffer,
  stsParams: STSParams,
  assumeRoleSpec: AssumeRoleSpec,
): Promise<string | undefined> {
  const credentials = await getCredentials(stsParams, assumeRoleSpec);
  return decrypt(buffer, credentials);
}
