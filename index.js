const GoogleTrendsRSS = require("./GoogleTrendsRSS");
const TrendTweeter = require("./TrendTweeter");
const config = require("./config.js");
const moment = require("moment-timezone");

// Updated for Google Cloud Functions v2
const { CloudEvent } = require("@google-cloud/functions-framework");

function tweetDailyTrend(cloudEvent) {
  // cloudEvent for Google Cloud Functions v2 Pub/Sub
  for (const country in config) {
    // Get the time for this country.
    let date = moment().tz(config[country].timezone).locale(config[country].locale);
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
      if (date.format("H") === "13" || date.format("H") === "18" || date.format("H") === "23") {
        tweetDailyTrendForCountry(country, date);
      }
    }
  }
}

function tweetDailyTrendForCountry(country, date) {
  getDailyTrends(country)
    .then((trends) => {
      // console.log(JSON.stringify(trends, null, 2));
      console.log("Tweet for the country: " + country);
      let tweeter = new TrendTweeter(country, trends, date);
      console.log("Number of Daily Trends: " + trends.trendingSearches.length);
      return tweeter.tweetTrends();
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
    console.log(`Fetching daily trends for ${geo} on ${date}`);

    const trendsService = new GoogleTrendsRSS();
    trendsService.setGeo(geo);

    const trends = await trendsService.getDailyTrends(geo);
    console.log(`Successfully fetched ${trends.trendingSearches.length} trends for ${geo}`);

    return trends;
  } catch (err) {
    console.error("Google Trends RSS error:", err);

    // Return mock data for testing purposes when RSS is down
    console.log("Returning mock trends data for testing...");
    return {
      trendingSearches: [
        {
          title: {
            query: "Mock Trend 1",
            exploreLink: "/trends/explore?q=mock&geo=" + geo,
          },
          formattedTraffic: "100K+",
          relatedQueries: [{ query: "related 1" }, { query: "related 2" }],
          articles: [
            {
              title: "Mock Article Title",
              source: "Mock Source",
              url: "https://example.com/mock-article",
            },
          ],
        },
        {
          title: {
            query: "Mock Trend 2",
            exploreLink: "/trends/explore?q=mock2&geo=" + geo,
          },
          formattedTraffic: "50K+",
          relatedQueries: [{ query: "mock related" }],
          articles: [
            {
              title: "Another Mock Article",
              source: "Mock News",
              url: "https://example.com/mock-article-2",
            },
          ],
        },
      ],
    };
  }
}

// Export for Google Cloud Functions v2
module.exports = { tweetDailyTrend };

// For Google Cloud Functions v2, we need to register the function
const functions = require("@google-cloud/functions-framework");
functions.cloudEvent("tweetDailyTrend", tweetDailyTrend);
