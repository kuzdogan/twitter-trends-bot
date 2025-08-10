const axios = require("axios");
const readline = require("readline");
require("dotenv").config();

const API_KEY = process.env.CONSUMER_KEY;
const API_KEY_SECRET = process.env.CONSUMER_SECRET;
const TOKEN_ENDPOINT = "https://api.x.com/oauth2/token";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function obtainBearerToken() {
  try {
    const credentials = Buffer.from(`${API_KEY}:${API_KEY_SECRET}`).toString("base64");

    const response = await axios.post(TOKEN_ENDPOINT, "grant_type=client_credentials", {
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });

    if (response.data.token_type === "bearer") {
      return response.data.access_token;
    } else {
      console.error("Failed to obtain bearer token");
      return null;
    }
  } catch (error) {
    console.error("Error obtaining bearer token:", error);
    return null;
  }
}

async function main() {
  const bearerToken = await obtainBearerToken();
  if (bearerToken) {
    console.log(`Bearer Token: ${bearerToken}`);
  }
  rl.close();
}

main();
