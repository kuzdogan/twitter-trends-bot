require('dotenv').config();
const Twitter = require('twitter');
const config = require('./config.js');
const moment = require('moment-timezone');

class TrendTweeter {

  constructor(country, trends) {
    this.country = country;
    this.trends = trends;
    this.Twitter = new Twitter(config[country].twitterConfig);
    this.tco_URL_length = 30; // Length of shortened t.co/XYZ url length. Config needs to be fetched from GET help/configration. Set 30 as default. 
    this.articleCount = 1;// Number of articles to append to each topic.
    this.phrases = config[country].phrases;
    moment.locale(config[country].locale);
  }

  /**
   * Function to post trends to Twitter.
   * Takes an array of custom trends objects 
   * Splits them into tweets.
   * Posts them
   * 
   * @param {Array} trends - Custom trends objects [{title: String, count: String}, ...]
   * @returns {Promise} 
   */
  tweetTrends = async () => {

    // Extract title and count for summary
    let summaryTrends = this.trends.trendingSearches.map((trendObj) => {
      let summaryTrendObj = {
        title: trendObj.title.query,
        count: trendObj.formattedTraffic
      };
      return summaryTrendObj;
    });
    // tweetsArray as the final array of tweets. Push the list of trends as first tweets. 
    let tweetsArray = this.summaryTrendsToTweets(summaryTrends);

    // Extract details: title, related searches and articles
    let detailedTrends = formatDetailedTrendsObjects(this.trends);

    console.log('Default TCO_LINK_LENGTH: ', this.tco_URL_length);
    this.tco_URL_length = await this.getTCoLinkLength();
    console.log('New TCO_LINK_LENGTH: ', this.tco_URL_length);
    // Concat details
    tweetsArray = tweetsArray.concat(this.splitDetailedTrendsInto280(detailedTrends));

    return this.tweetThread(tweetsArray);
    // return retrieveTweet('1286934152231686144').then(obj => console.log(obj)); // For Debugging
  }

  /**
   * Tweet in sequence. Get status id from previous one and post next as a reply.
   * 
   * @param {Array} tweetsArray - Array of strings each as a tweet
   * @returns {String} the status_id of the final tweet 
   */
   tweetThread = async (tweetsArray) => {
    if (tweetsArray.length === 0)
      return Promise.reject('Nothing to tweet');
    if (tweetsArray.length === 1)
      return this.tweet(tweetsArray[0]);

    // Publish the fist tweet 
    let response = await this.tweet(tweetsArray[0]);
    let prevIdStr = response.id_str;
    let username = response.user.screen_name;

    // Publish reply tweets
    for (let i = 1; i < tweetsArray.length; i++) {
      let tweetStr = tweetsArray[i];
      console.log(`Prev Id: \t\t ${prevIdStr}`);
      console.log('Tweet: ', tweetStr);
      response = await this.reply(tweetStr, prevIdStr, username);
      console.log('Tweet ' + i + ' is tweeted!!');
      console.log(`Response id: \t\t ${response.id_str}`);
      prevIdStr = response.id_str;
    };

    return prevIdStr;
  }

  /**
   * Fcuntion to format an array of detailed trends object into <280 char tweets as strings.
   * @param {Array} detailedTrends - Array of objects of format:
   * { title: '', relatedQueries: ['', ..., ''], moreInfo: '', articles: [ {source: '', title: '', url: ''}, ... ] }
   * @returns {String[]} Array of strings each as a tweet. 
   */
  splitDetailedTrendsInto280 = (detailedTrends) => {
    let tweets = []; // array of tweets limited to 280 chars.
    let tweetStr = '';
    // urls get shortened. Keep tweet length seperate from tweetStr.length. 
    let tweetLength = 0;
    // detailedTrends = detailedTrends.slice(0, 5); // Debugging
    detailedTrends.forEach((trend, i) => {
      // Add title and related queries.
      tweetStr += `${i + 1}. ${trend.title}\n\n`;
      if (trend.relatedQueries.length > 0) { // Leave blank if no relatedQueries.
        let queriesStr;
        if (trend.relatedQueries.length > 5)
          queriesStr = trend.relatedQueries.slice(0, 5).join(', ');
        else 
          queriesStr = trend.relatedQueries.join(', ');
        tweetStr += this.phrases.relatedQueries + queriesStr + '\n';
      }
      tweetLength = tweetStr.length;
      console.log('Tweet: ' + tweetStr);
      console.log('Tweet length: ' + tweetLength);

      tweetStr += this.phrases.detailedStats + trend.moreInfo + '\n'; // trend.moreInfo is a URL
      tweetLength += this.phrases.detailedStats.length + this.tco_URL_length + 1; // dont add trend.moreInfo.length, use short URL length.
      console.log('Tweet: ' + tweetStr);
      console.log('Tweet length: ' + tweetLength);

      // Add each ARTICLE_COUNNT articles as new line, in same tweet if possible. Else in the next tweet.
      for (let i = 0; i < Math.min(this.articleCount, trend.articles.length); i++) {
        if (i === 0) {
          tweetStr += this.phrases.articles;
          tweetLength += this.phrases.articles.length;
          console.log('Tweet: ' + tweetStr);
          console.log('Tweet length: ' + tweetLength);
        }
        let article = trend.articles[i];
        // Article line
        let articleStr = `${article.source}: ${decodeHtmlCharCodes(article.title)}\n${article.url}\n`;
        let articleStrLength = article.source.length + decodeHtmlCharCodes(article.title).length + 5 + this.tco_URL_length;
        console.log('Current tweet: ' + tweetStr);
        console.log('New article line: ', articleStr);

        // Check total tweet length.
        let temp = tweetStr + articleStr;
        let tempLength = tweetLength + articleStrLength;
        console.log('tempLength: ' + tempLength);
        // Add new line if still shorter than 280
        if (tempLength < 270) {
          console.log('Assigning temp to tweet');
          tweetStr = temp;
          tweetLength = tempLength;
        }
        else { // Start new tweet if exceeds
          tweetStr = decodeHtmlCharCodes(tweetStr); // Decode &#39, &quot etc.
          console.log('Too long, starting new tweet');
          console.log('tweet: ', tweetStr);
          tweets.push(tweetStr);
          tweetStr = articleStr;
          tweetLength = articleStrLength;
        }
      }
      tweetStr = decodeHtmlCharCodes(tweetStr); // Decode &#39, &quot etc.
      console.log('Articles done, start new tweet');
      console.log('tweet: ', tweetStr);
      tweets.push(tweetStr); // Articles end. New trend. Start new tweet.
      tweetStr = '';
      tweetLength = 0;
    });

    return tweets;
  }


  /**
   * Formats an array of trends to 280 char tweets.
   * Adds an introduction then lists trending searches each in a new line
   * 
   * @example 
   * <introduction>
   * 1. Zoom +100K
   * 2. Mac saat kacta +50K
   * ...
   * 
   * Creates a new element to tweets array as a reply if exceeds 280 chars.
   * 
   * @returns {String[]} an array of strings with less than 280 characters, each a tweet.
   * @param {Array} trends - Array of objects of type {title: , count: }
   */
  summaryTrendsToTweets = (trends) => {
    console.log('Trends are');
    console.log(trends);

    let tweets = []; // array of tweets limited to 280 chars.
    let str =
      '📆 ' + moment().format('D MMMM YYYY dddd H:mm ') + "\n" +
      this.phrases.firstTweet.mostSearched +
      this.phrases.firstTweet.moreInfo;

    trends.forEach((trend, i) => {
      let newLine = `${i + 1}. ${trend.title} - ${trend.count}`.slice(0, -2)
        + this.replaceCountLetter(trend.count) + "+\n";

      let temp = str + newLine;
      // Push as new tweet if exceeds 280 chars.
      if (temp.length < 250)
        str = temp;
      else {
        tweets.push(str);
        str = newLine;
      }
    });
    tweets.push(str);

    return tweets;
  }

  /**
   * (Utility function) Send a POST request to the Twitter API
   * @param String endpoint  e.g. 'statuses/upload'
   * @param Object params    Params object to send
   * @return Promise         Rejects if response is error
   */
  makePost = (endpoint, params) => {
    return this.Twitter.post(endpoint, params);
  }

  tweet = (status) => {
    return this.makePost('statuses/update', { status: status });
  }

  reply = (status, prevIdStr, username) => {
    return this.makePost('statuses/update', { status: status, in_reply_to_status_id: prevIdStr, auto_populate_reply_metadata: true });
  }

  retrieveTweet = (id) => {
    return this.Twitter.get('statuses/show', { id: id });
  }

  getTCoLinkLength = () => {
    return this.Twitter.get('help/configuration', {})
      .then(response => response.short_url_length_https)
      .catch(console.err);
  }

  replaceCountLetter = (trendCountStr) => {
  // e.g. 100K+ check if K, replace with 'bin' if M replace with 'milyon'
  let countLetter = trendCountStr.charAt(trendCountStr.length - 2);
  if (countLetter === "K")
    return this.phrases.thousand
  else if (countLetter === "M")
    return this.phrases.million
  else
    return countLetter
}
}



// Utility functions

// from https://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
function decodeHtmlCharCodes(str) {
  return str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode));
}

function formatDetailedTrendsObjects(trends) {
  return trends.trendingSearches.map(trendObj => {
    let detailTrendObj = {
      title: trendObj.title.query,
      relatedQueries: trendObj.relatedQueries.map(item => item.query),
      moreInfo: 'https://trends.google.com' + trendObj.title.exploreLink,
      articles: trendObj.articles.map(article => {
        return {
          source: article.source,
          title: article.title,
          url: article.url,
        }
      })
    }
    return detailTrendObj;
  })
}

module.exports = TrendTweeter;