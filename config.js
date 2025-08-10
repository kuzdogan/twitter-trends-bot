// config.js

module.exports = {
  TR: {
    twitterConfig: {
      appKey: process.env.CONSUMER_KEY,
      appSecret: process.env.CONSUMER_SECRET,
      accessToken: process.env.TR_ACCESS_TOKEN_KEY,
      accessSecret: process.env.TR_ACCESS_TOKEN_SECRET,
    },
    fullNews: false,
    locale: "tr",
    timezone: "Europe/Istanbul",
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Türkiye'de en çok aranan konular:\n",
        moreInfo: "Tamamı ve ilgili haberler için tıklayın \n\n",
      },
      relatedQueries: "🔍 İlgili aramalar: ",
      detailedStats: "📊 Detaylı istatistik: ",
      articles: "📰 İlgili haberler:\n",
      thousand: "bin",
      million: "milyon",
      searches: "arama",
      imageTitle: "Türkiye'de en çok aranan konular:",
    },
    accountName: "@24TrendsTurkey",
  },
  US: {
    // Use here US only instead of USA. Google trends API library asks US not USA.
    twitterConfig: {
      appKey: process.env.CONSUMER_KEY,
      appSecret: process.env.CONSUMER_SECRET,
      accessToken: process.env.USA_ACCESS_TOKEN_KEY,
      accessSecret: process.env.USA_ACCESS_TOKEN_SECRET,
    },
    fullNews: false,
    locale: "en-us",
    timezone: "America/New_York",
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in the United States:\n",
        moreInfo: "👀 News and details below 👀\n\n",
      },
      relatedQueries: "🔍 Related Searches: ",
      detailedStats: "📊 Detailed Stats: ",
      articles: "📰 News Related:\n",
      thousand: "K",
      million: "M",
      searches: "searches",
      imageTitle: "Recent trending searches in the United States:",
    },
    accountName: "@24Trends_USA",
  },
  // IN: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.IN_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.IN_ACCESS_TOKEN_SECRET
  //   },
  //   locale: 'en-in',
  //   timezone: 'Asia/Kolkata',
  //   fullNews: false,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in India:\n",
  //       moreInfo: "News and details below \n\n"
  //     },
  //     relatedQueries: '🔍 Related Searches: ',
  //     detailedStats: '📊 Detailed Stats: ',
  //     articles: '📰 News Related:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'searches',
  //     imageTitle: 'Recent trending searches in India:'
  //   },
  //   accountName: '@24TrendsIndia'
  // },
  DE: {
    twitterConfig: {
      appKey: process.env.CONSUMER_KEY,
      appSecret: process.env.CONSUMER_SECRET,
      accessToken: process.env.DE_ACCESS_TOKEN_KEY,
      accessSecret: process.env.DE_ACCESS_TOKEN_SECRET,
    },
    locale: "de",
    timezone: "Europe/Berlin",
    fullNews: true,
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Die neuesten Trendthemen in Deutschland:\n",
        moreInfo: "Schlagzeilen und Details sind unten aufgelistet \n\n",
      },
      relatedQueries: "🔍 Zusammenhängende Suchen: ",
      detailedStats: "📊 Detaillierte Statistiken: ",
      articles: "📰 Betreffende Nachrichte:\n",
      thousand: "K",
      million: "M",
      searches: "Suchen",
      imageTitle: "Die neuesten Trendthemen in Deutschland:",
    },
    accountName: "@24trendsDE",
  },
  // GB: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.GB_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.GB_ACCESS_TOKEN_SECRET
  //   },
  //   fullNews: false,
  //   locale: 'en-gb',
  //   timezone: 'Europe/London',
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
  //   accountName: '@24Trends_UK',
  // },
  // IE: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.IE_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.IE_ACCESS_TOKEN_SECRET
  //   },
  //   fullNews: true,
  //   locale: 'en-ie',
  //   timezone: 'Europe/Dublin',
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in Ireland:\n",
  //       moreInfo: "News and details below \n\n"
  //     },
  //     relatedQueries: '🔍 Related Searches: ',
  //     detailedStats: '📊 Detailed Stats: ',
  //     articles: '📰 News Related:\n',
  //     thousand: 'K',
  //     million: 'M',
  //     searches: 'searches',
  //     imageTitle: 'Recent trending searches in Ireland:'
  //   },
  //   accountName: '@UKGoogleTrends1',
  // },
  AU: {
    twitterConfig: {
      appKey: process.env.CONSUMER_KEY,
      appSecret: process.env.CONSUMER_SECRET,
      accessToken: process.env.AU_ACCESS_TOKEN_KEY,
      accessSecret: process.env.AU_ACCESS_TOKEN_SECRET,
    },
    fullNews: true,
    locale: "en-au",
    timezone: "Australia/Canberra",
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Recent trending searches in Australia:\n",
        moreInfo: "News and details below \n\n",
      },
      relatedQueries: "🔍 Related Searches: ",
      detailedStats: "📊 Detailed Stats: ",
      articles: "📰 News Related:\n",
      thousand: "K",
      million: "M",
      searches: "searches",
      imageTitle: "Recent trending searches in Australia:",
    },
    accountName: "@24trendsAU",
  },
  // NZ: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.NZ_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.NZ_ACCESS_TOKEN_SECRET,
  //   },
  //   fullNews: true,
  //   locale: "en-nz",
  //   timezone: "Pacific/Auckland",
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in New Zealand:\n",
  //       moreInfo: "News and details below \n\n",
  //     },
  //     relatedQueries: "🔍 Related Searches: ",
  //     detailedStats: "📊 Detailed Stats: ",
  //     articles: "📰 News Related:\n",
  //     thousand: "K",
  //     million: "M",
  //     searches: "searches",
  //     imageTitle: "Recent trending searches in New Zealand:",
  //   },
  //   accountName: "@24Trends_NZ",
  // },
  // CA: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.CA_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.CA_ACCESS_TOKEN_SECRET,
  //   },
  //   fullNews: true,
  //   locale: "en-ca",
  //   timezone: "Canada/Eastern",
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Recent trending searches in Canada:\n",
  //       moreInfo: "News and details below \n\n",
  //     },
  //     relatedQueries: "🔍 Related Searches: ",
  //     detailedStats: "📊 Detailed Stats: ",
  //     articles: "📰 News Related:\n",
  //     thousand: "K",
  //     million: "M",
  //     searches: "searches",
  //     imageTitle: "Recent trending searches in Canada:",
  //   },
  //   accountName: "@24Trends_Canada",
  // },
  // PK: { // Google Trends API does not resolve for pakistan
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.PK_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.PK_ACCESS_TOKEN_SECRET
  //   },
  //   fullNews: true,
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
  //   accountName: '@GooglePakistan',
  // },
  AT: {
    twitterConfig: {
      appKey: process.env.CONSUMER_KEY,
      appSecret: process.env.CONSUMER_SECRET,
      accessToken: process.env.AT_ACCESS_TOKEN_KEY,
      accessSecret: process.env.AT_ACCESS_TOKEN_SECRET,
    },
    fullNews: true,
    locale: "de-at",
    timezone: "Europe/Vienna",
    phrases: {
      firstTweet: {
        mostSearched: "🔍 Die neuesten Trendthemen in in Österreich:\n",
        moreInfo: "Schlagzeilen und Details sind unten aufgelistet \n\n",
      },
      relatedQueries: "🔍 Zusammenhängende Suchen: ",
      detailedStats: "📊 Detaillierte Statistiken: ",
      articles: "📰 Betreffende Nachrichte:\n",
      thousand: "K",
      million: "M",
      searches: "Suchen",
      imageTitle: "Die neuesten Trendthemen in Österreich:",
    },
    accountName: "@24Trends_AT",
  },
  // CH: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.CH_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.CH_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "de",
  //   timezone: "Europe/Zurich",
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Die neuesten Trendthemen in der Schweiz:\n",
  //       moreInfo: "Schlagzeilen und Details sind unten aufgelistet \n\n",
  //     },
  //     relatedQueries: "🔍 Zusammenhängende Suchen: ",
  //     detailedStats: "📊 Detaillierte Statistiken: ",
  //     articles: "📰 Betreffende Nachrichte:\n",
  //     thousand: "K",
  //     million: "M",
  //     searches: "Suchen",
  //     imageTitle: "Die neuesten Trendthemen in der Schweiz:",
  //   },
  //   accountName: "@24Trends_CH",
  // },
  // IT: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.IT_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.IT_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "it",
  //   timezone: "Europe/Rome",
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Le più recenti ricerche in Italia:\n",
  //       moreInfo: "Novità e dettagli qui sotto \n\n",
  //     },
  //     relatedQueries: "🔍 Ricerche correlate: ",
  //     detailedStats: "📊 Statistiche dettagliate: ",
  //     articles: "📰 Ultime novità a riguardo:\n",
  //     thousand: "mille",
  //     million: "mln",
  //     searches: "ricerche",
  //     imageTitle: "Le più recenti ricerche in Italia:",
  //   },
  //   accountName: "@24Trends_Italia",
  // },
  // ES: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.ES_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.ES_ACCESS_TOKEN_SECRET
  //   },
  //   locale: 'es',
  //   timezone: 'Europe/Madrid',
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Últimas búsquedas en tendencia en España:\n",
  //       moreInfo: "Noticias y detalles más abajo \n\n"
  //     },
  //     relatedQueries: '🔍 Búsquedas relacionadas: ',
  //     detailedStats: '📊 Estadísticas detalladas: ',
  //     articles: '📰 Noticias relacionadas:\n',
  //     thousand: 'mille',
  //     million: 'M',
  //     searches: 'búsquedas',
  //     imageTitle: 'Últimas búsquedas en tendencia en España:'
  //   },
  //   accountName: '@24Trends_Espana'
  // },
  // MX: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.MX_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.MX_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Mexico_City",
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Últimas búsquedas en tendencia en México:\n",
  //       moreInfo: "Noticias y detalles más abajo \n\n",
  //     },
  //     relatedQueries: "🔍 Búsquedas relacionadas: ",
  //     detailedStats: "📊 Estadísticas detalladas: ",
  //     articles: "📰 Noticias relacionadas:\n",
  //     thousand: "mille",
  //     million: "M",
  //     searches: "búsquedas",
  //     imageTitle: "Últimas búsquedas en tendencia en México:",
  //   },
  //   accountName: "@24Trends_Mexico",
  // },
  // CO: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.CO_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.CO_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Bogota",
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Últimas búsquedas en tendencia en Colombia:\n",
  //       moreInfo: "Noticias y detalles más abajo \n\n",
  //     },
  //     relatedQueries: "🔍 Búsquedas relacionadas: ",
  //     detailedStats: "📊 Estadísticas detalladas: ",
  //     articles: "📰 Noticias relacionadas:\n",
  //     thousand: "mille",
  //     million: "M",
  //     searches: "búsquedas",
  //     imageTitle: "Últimas búsquedas en tendencia en Colombia:",
  //   },
  //   accountName: "@24Trends_CO",
  // },
  // AR: {
  //   twitterConfig: {
  //     appKey: process.env.CONSUMER_KEY,
  //     appSecret: process.env.CONSUMER_SECRET,
  //     accessToken: process.env.AR_ACCESS_TOKEN_KEY,
  //     accessSecret: process.env.AR_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Argentina/Buenos_Aires",
  //   fullNews: true,
  //   phrases: {
  //     firstTweet: {
  //       mostSearched: "🔍 Últimas búsquedas en tendencia en Argentina:\n",
  //       moreInfo: "Noticias y detalles más abajo \n\n",
  //     },
  //     relatedQueries: "🔍 Búsquedas relacionadas: ",
  //     detailedStats: "📊 Estadísticas detalladas: ",
  //     articles: "📰 Noticias relacionadas:\n",
  //     thousand: "mille",
  //     million: "M",
  //     searches: "búsquedas",
  //     imageTitle: "Últimas búsquedas en tendencia en Argentina:",
  //   },
  //   accountName: "@24Trends_AR",
  // },
};
