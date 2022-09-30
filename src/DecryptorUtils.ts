// @ts-ignore
import AWS from 'aws-sdk';

type STSParams = {
  accessKeyId: string,
  secretAccessKey: string,
  region: string
}

type AssumeRoleSpec = {
  RoleArn: string,
  RoleSessionName: string,
}

export function getCredentials(params: STSParams, assumeRoleSpec: AssumeRoleSpec): Promise<AWS.STS.Credentials | undefined> {
  const sts = new AWS.STS(params);

  return new Promise((resolve, reject) => {
    sts.assumeRole(assumeRoleSpec, function(err, data) {
      if (err) {
        throw(err);
      } else {
        resolve(data.Credentials);
      }
    });
  });
}

export function decrypt(buffer: any, credentials?: AWS.STS.Credentials, ): Promise<AWS.KMS.PlaintextType | undefined> {
  const kms = new AWS.KMS({
    accessKeyId: credentials?.AccessKeyId,
    secretAccessKey: credentials?.SecretAccessKey,
    sessionToken: credentials?.SessionToken,
    region: 'us-west-2'
  });

  return new Promise((resolve, reject) => {
    const params = {
      CiphertextBlob: buffer
    };
    kms.decrypt(params, (err, data) => {
      if (err) {
        throw(err);
      } else {
        resolve(data.Plaintext?.toString());
      }
    });
  });
}

// Example usage.
(async () => {
  try {
    const cypheredText = "Base 64 encoded encrypted passphrase";
    const buffer = Buffer.from(cypheredText, "base64");
    const stsParams: STSParams = {
      accessKeyId: "",
      secretAccessKey: "",
      region: ""
    };
    const assumeRoleSpec: AssumeRoleSpec = {
      RoleArn: "",
      RoleSessionName: "xbacked-sdk-session",
    }
    const credentials = await getCredentials(stsParams, assumeRoleSpec);
    console.log((await decrypt(buffer, credentials))?.toString());
  } catch (e) {
    console.log(e);
  }
})();
