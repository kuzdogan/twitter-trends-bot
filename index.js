const googleTrends = require('google-trends-api');
const twitterUtils = require('./twitter_utils');
// const fs = require('fs');

tweetDailyTrend();

function tweetDailyTrend(message, context) { // message, context for Google Cloud Pub/Sub

  getDailyTrends()
    .then(trends => {
      // fs.writeFileSync('test.json', JSON.stringify(trends, 2));
      console.log('Number of Daily Trends: ' + trends.trendingSearches.length)

      return twitterUtils.tweetTrends(trends)
        .catch(console.err);
    })
    .then(() => {
      console.log('SUCCESSFULLY TWEETED ', message ? message.data : null);
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
async function getDailyTrends(geo = 'TR', date = new Date()) {
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

module.exports = { tweetDailyTrend }; // Export for Google Cloud Functions