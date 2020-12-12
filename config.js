// config.js

module.exports = {
  TR: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TR_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TR_ACCESS_TOKEN_SECRET
    },
    locale: 'tr',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Türkiye'de en çok aranan konular:\n",
        moreInfo: "👀 Tamamı ve ilgili haberler için tıklayın 👀\n\n"
      },
      relatedQueries: '🔍 İlgili aramalar: ',
      detailedStats: '📊 Detaylı istatistik: ',
      articles: '📰 İlgili haberler:\n',
      thousand: 'bin',
      million: 'milyon'
    }
  }, 
  US: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.US_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.US_ACCESS_TOKEN_SECRET
    },
    locale: 'en-us',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in United States:\n",
        moreInfo: "👀 News and details below 👀\n\n"
      },
      relatedQueries: '🔍 Related Searches: ',
      detailedStats: '📊 Detailed Stats: ',
      articles: '📰 News Related:\n',
      thousand: 'K',
      million: 'M'
    }
  },
};