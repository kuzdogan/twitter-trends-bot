// config.js

module.exports = {
  TR: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TR_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TR_ACCESS_TOKEN_SECRET
    },
    lite: false,
    locale: 'tr',
    timezone: 'Europe/Istanbul',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Türkiye'de en çok aranan konular:\n",
        moreInfo: "👀 Tamamı ve ilgili haberler için tıklayın 👀\n\n"
      },
      relatedQueries: '🔍 İlgili aramalar: ',
      detailedStats: '📊 Detaylı istatistik: ',
      articles: '📰 İlgili haberler:\n',
      thousand: 'bin',
      million: 'milyon',
      searches: 'arama',
      imageTitle: 'Türkiye\'de en çok aranan konular:'
    },
    accountName: '@24TrendsTurkey'
  },
  US: { // Use here US only instead of USA. Google trends API library asks US not USA.
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.USA_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.USA_ACCESS_TOKEN_SECRET
    },
    lite: true,
    locale: 'en-us',
    timezone: 'America/New_York',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in the United States:\n",
        moreInfo: "👀 News and details below 👀\n\n"
      },
      relatedQueries: '🔍 Related Searches: ',
      detailedStats: '📊 Detailed Stats: ',
      articles: '📰 News Related:\n',
      thousand: 'K',
      million: 'M',
      searches: 'searches',
      imageTitle: 'Recent trending searches in the United States:'
    },
    accountName: '@24TrendsUSA',
  },
  IN: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.IN_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.IN_ACCESS_TOKEN_SECRET
    },
    locale: 'en-in',
    timezone: 'Asia/Kolkata',
    lite: true,
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in India:\n",
        moreInfo: "👀 News and details below 👀\n\n"
      },
      relatedQueries: '🔍 Related Searches: ',
      detailedStats: '📊 Detailed Stats: ',
      articles: '📰 News Related:\n',
      thousand: 'K',
      million: 'M',
      searches: 'searches',
      imageTitle: 'Recent trending searches in India:'
    },
    accountName: '@24TrendsIndia'
  },
  DE: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.DE_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.DE_ACCESS_TOKEN_SECRET
    },
    locale: 'de',
    timezone: 'Europe/Berlin',
    lite: true,
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Neueste trende Suchen in Deutschland:\n",
        moreInfo: "👀 Nachrichten und Details unten 👀\n\n"
      },
      relatedQueries: '🔍 Zusammenhängende Suchen: ',
      detailedStats: '📊 Detaillierte Statistiken: ',
      articles: '📰 Betreffende Nachrichte:\n',
      thousand: 'K',
      million: 'M',
      searches: 'Suchen',
      imageTitle: 'Neueste trende Suchen in Deutschland:'
    },
    accountName: '@DeutschlandGoo2'
  },
};