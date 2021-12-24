const googleTrends = require("google-trends-api");
const TrendTweeter = require("./TrendTweeter");
const config = require("./config.js");
const moment = require("moment-timezone");

function tweetDailyTrend(message, context) {
  // message and context for Google Cloud Pub/Sub
  for (const country in config) {
    // Get the time for this country.
    let date = moment()
      .tz(config[country].timezone)
      .locale(config[country].locale);
    console.log(country);
    if (process.env.NODE_ENV === "test") {
      // dev test
      if (country === process.argv[1]) {
        // Debug
        console.log("Testing " + country);
        tweetDailyTrendForCountry(country, date);
      }
    } else {
      // Tweet if it's 13h 18h or 23h. For India this will be 13:30, 18:30, 23:30
      if (
        date.format("H") === "13" ||
        date.format("H") === "18" ||
        date.format("H") === "23"
      ) {
        tweetDailyTrendForCountry(country, date);
      }
    }
  }
}

function tweetDailyTrendForCountry(country, date) {
  getDailyTrends((geo = country))
    .then((trends) => {
      // console.log(trends)
      console.log("Tweet for the country: " + country);
      let tweeter = new TrendTweeter(country, trends, date);
      console.log("Number of Daily Trends: " + trends.trendingSearches.length);
      return tweeter.tweetTrends(trends);
    })
    .then(() => {
      console.log("SUCCESSFULLY TWEETED ");
    })
    .catch((err) => {
      console.log("Ooops something went wrong");
      console.error(err);
      let gcloudError = {
        severity: "ERROR",
        message: "Error in country " + country + " " + JSON.stringify(err),
      };
      console.error(JSON.stringify(gcloudError));
    });
}

/**
 * Function to query daily Google trends of a country.
 *
 * @param {String} geo, Country name. see google-trends-api country list. Defaults to Turkey, i.e. 'TR'
 * @param {Date} date, date to be queried. Defaults to today. Must be within 15 days. see google-trends-api docs.
 * @returns {Promise} A Promise resolving to an array of trending searches.
 */
async function getDailyTrends(geo, date = new Date()) {
  try {
    let res = await googleTrends.dailyTrends({
      geo: geo,
      trendDate: date,
    });
    let json = JSON.parse(res);
    return json.default.trendingSearchesDays[0];
  } catch (err) {
    console.error(err);
    return Promise.reject("Couldnt get results: ", err);
  }
}

module.exports = { tweetDailyTrend };
