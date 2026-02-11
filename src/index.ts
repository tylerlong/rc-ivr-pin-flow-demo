import process from "node:process";
import RingCentral from "@rc-ex/core";

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  const token = await rc.getToken({
    grant_type: "ivr_pin",
    username: process.env.RINGCENTRAL_EXTENSION_MAIN_PHONE_NUMBER,
    ivr_pin: process.env.RINGCENTRAL_IVR_PIN,
  });
  console.log("Yeah, you got the token!");
  console.log(token.access_token);
  await rc.revoke(); // revoke the token since we don't really need it.
};
main();
