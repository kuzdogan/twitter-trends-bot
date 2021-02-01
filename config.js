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
        moreInfo: "Tamamı ve ilgili haberler için tıklayın \n\n"
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
    lite: false,
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in India:\n",
        moreInfo: "News and details below \n\n"
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
        moreInfo: "Nachrichten und Details unten \n\n"
      },
      relatedQueries: '🔍 Zusammenhängende Suchen: ',
      detailedStats: '📊 Detaillierte Statistiken: ',
      articles: '📰 Betreffende Nachrichte:\n',
      thousand: 'K',
      million: 'M',
      searches: 'Suchen',
      imageTitle: 'Neueste trende Suchen in Deutschland:'
    },
    accountName: '@24trendsDE'
  },
  // UK: {
  //   twitterConfig: {
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.UK_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.UK_ACCESS_TOKEN_SECRET
  //   },
  //   lite: true,
  //   locale: 'en-us',
  //   timezone: 'America/New_York',
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in the United Kingdom:\n",
  //       moreInfo: "News and details below \n\n"
  //     },
  //     relatedQueries: '🔍 Related Searches: ',
  //     detailedStats: '📊 Detailed Stats: ',
  //     articles: '📰 News Related:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'searches',
  //     imageTitle: 'Recent trending searches in the United Kingdom:'
  //   },
  //   accountName: '@24trendsUK',
  // },
  AU: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.AU_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.AU_ACCESS_TOKEN_SECRET
    },
    lite: true,
    locale: 'en-au',
    timezone: 'Australia/Canberra',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in Australia:\n",
        moreInfo: "News and details below \n\n"
      },
      relatedQueries: '🔍 Related Searches: ',
      detailedStats: '📊 Detailed Stats: ',
      articles: '📰 News Related:\n',
      thousand: 'K',
      million: 'M',
      searches: 'searches',
      imageTitle: 'Recent trending searches in Australia:'
    },
    accountName: '@24trendsAU',
  },
  // NZ: {
  //   twitterConfig: {
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.NZ_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.NZ_ACCESS_TOKEN_SECRET
  //   },
  //   lite: true,
  //   locale: 'en-nz',
  //   timezone: 'Pacific/Auckland',
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in New Zealand:\n",
  //       moreInfo: "News and details below \n\n"
  //     },
  //     relatedQueries: '🔍 Related Searches: ',
  //     detailedStats: '📊 Detailed Stats: ',
  //     articles: '📰 News Related:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'searches',
  //     imageTitle: 'Recent trending searches in New Zealand:'
  //   },
  //   accountName: '@GoogleZealand',
  // },
  CA: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.CA_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.CA_ACCESS_TOKEN_SECRET
    },
    lite: true,
    locale: 'en-ca',
    timezone: 'Canada/Eastern',
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in Canada:\n",
        moreInfo: "News and details below \n\n"
      },
      relatedQueries: '🔍 Related Searches: ',
      detailedStats: '📊 Detailed Stats: ',
      articles: '📰 News Related:\n',
      thousand: 'K',
      million: 'M',
      searches: 'searches',
      imageTitle: 'Recent trending searches in Canada:'
    },
    accountName: '@CanadaGoogleTr1',
  },
  // PK: {
  //   twitterConfig: {
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.PK_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.PK_ACCESS_TOKEN_SECRET
  //   },
  //   lite: true,
  //   locale: 'en-in',
  //   timezone: 'Asia/Karachi',
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in Pakistan:\n",
  //       moreInfo: "News and details below \n\n"
  //     },
  //     relatedQueries: '🔍 Related Searches: ',
  //     detailedStats: '📊 Detailed Stats: ',
  //     articles: '📰 News Related:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'searches',
  //     imageTitle: 'Recent trending searches in Pakistan:'
  //   },
  //   accountName: '@PakistanGoogle1',
  // },
  // AT: {
  //   twitterConfig: {
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.AT_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.AT_ACCESS_TOKEN_SECRET
  //   },
  //   lite: true,
  //   locale: 'de-at',
  //   timezone: 'Europe/Vienna',
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Neueste trende Suchen in Österreich:\n",
  //       moreInfo: "Nachrichten und Details unten \n\n"
  //     },
  //     relatedQueries: '🔍 Zusammenhängende Suchen: ',
  //     detailedStats: '📊 Detaillierte Statistiken: ',
  //     articles: '📰 Betreffende Nachrichte:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'Suchen',
  //     imageTitle: 'Neueste trende Suchen in Österreich:'
  //   },
  //   accountName: '@PakistanGoogle1',
  // },
  // CH: {
  //   twitterConfig: {
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.CH_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.CH_ACCESS_TOKEN_SECRET
  //   },
  //   locale: 'de',
  //   timezone: 'Europe/Zurich',
  //   lite: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Neueste trende Suchen in der Schweiz:\n",
  //       moreInfo: "Nachrichten und Details unten \n\n"
  //     },
  //     relatedQueries: '🔍 Zusammenhängende Suchen: ',
  //     detailedStats: '📊 Detaillierte Statistiken: ',
  //     articles: '📰 Betreffende Nachrichte:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'Suchen',
  //     imageTitle: 'Neueste trende Suchen in der Schweiz:'
  //   },
  //   accountName: '@GoogleSchweiz'
  // },
};