const OAuth = require("oauth").OAuth;
require("dotenv").config();
const readline = require("readline");

const API_KEY = process.env.CONSUMER_KEY;
const API_KEY_SECRET = process.env.CONSUMER_SECRET;

const REQUEST_TOKEN_URL = "https://api.twitter.com/oauth/request_token";
const ACCESS_TOKEN_URL = "https://api.twitter.com/oauth/access_token";
const OAUTH_VERSION = "1.0A";
const HASH_VERSION = "HMAC-SHA1";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let oauth = new OAuth(
  REQUEST_TOKEN_URL,
  ACCESS_TOKEN_URL,
  API_KEY,
  API_KEY_SECRET,
  OAUTH_VERSION,
  null,
  HASH_VERSION
);

// Step 1: Get a request token
oauth.getOAuthRequestToken(
  (error, oauth_token, oauth_token_secret, results) => {
    if (error) {
      console.error("Error getting OAuth request token: ", error);
    } else {
      // Step 2: Redirect to the authorization page
      console.log(`Please visit this URL to authorize the application:`);
      console.log(
        `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`
      );

      // Ask user for the verifier code
      rl.question(
        "Please enter the verifier code: (Found at the new URL you're being directed to under the `oauth_verifier` parameter) ",
        (verifier) => {
          // Step 3: User returns with verifier code, get the access token
          oauth.getOAuthAccessToken(
            oauth_token,
            oauth_token_secret,
            verifier,
            (error, oauth_access_token, oauth_access_token_secret, results) => {
              if (error) {
                console.error("Error getting OAuth access token", error);
              } else {
                console.log(`Access Token: ${oauth_access_token}`);
                console.log(
                  `Access Token Secret: ${oauth_access_token_secret}`
                );
                rl.close();
              }
            }
          );
        }
      );
    }
  }
);
