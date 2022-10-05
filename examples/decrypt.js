
const {decrypt, getCredentials} = require('..');
const dotenv = require('dotenv');

dotenv.config();

// Example snippet for decrypting a passphrase using AWS KMS.
(async () => {
  try {
    const cypheredText = "Base_64_encoded_encrypted_passphrase";
    const buffer = Buffer.from(cypheredText, "base64");

    const stsParams ={
      accessKeyId: "AWS_access_key_id",
      secretAccessKey: "AWS_secret_access_key",
      region: "us-west-2"
    };

    const assumeRoleSpec = {
      RoleArn: "AWS_role_ARN",
      RoleSessionName: "xbacked-sdk-session",
    }

    const credentials = await getCredentials(stsParams, assumeRoleSpec);
    console.log((await decrypt(buffer, credentials))?.toString());

  } catch (e) {
    console.log(e);
  }
})();