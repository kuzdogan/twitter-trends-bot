const googleTrends = require('google-trends-api');
const TrendTweeter = require('./TrendTweeter');

exports.tweetDailyTrend = function (message, context) { // message and context for Google Cloud Pub/Sub
  // let country = 'IN'
  let country = Buffer.from(message.data, 'base64').toString();
  console.log("Country: ", country)

  getDailyTrends(geo = country)
    .then(trends => {
      console.log(trends)
      let tweeter = new TrendTweeter(country = country, trends);
      console.log('Number of Daily Trends: ' + trends.trendingSearches.length)
      return tweeter.tweetTrends(trends)
    })
    .then(() => {
      console.log('SUCCESSFULLY TWEETED ');
    })
    .catch(err => console.error(err));
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
    let res = await googleTrends.dailyTrends(
      {
        geo: geo,
        trendDate: date
      });
    let json = JSON.parse(res);
    return json.default.trendingSearchesDays[0];
  } catch (err) {
    console.error(err);
    return Promise.reject('Couldnt get results: ', err);
  }
}