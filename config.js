// config.js

module.exports = {
  TR: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.TR_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TR_ACCESS_TOKEN_SECRET,
    },
    lite: false,
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
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.USA_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.USA_ACCESS_TOKEN_SECRET,
    },
    lite: false,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.IN_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.IN_ACCESS_TOKEN_SECRET
  //   },
  //   locale: 'en-in',
  //   timezone: 'Asia/Kolkata',
  //   lite: false,
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
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.DE_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.DE_ACCESS_TOKEN_SECRET,
    },
    locale: "de",
    timezone: "Europe/Berlin",
    lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.GB_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.GB_ACCESS_TOKEN_SECRET
  //   },
  //   lite: false,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.IE_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.IE_ACCESS_TOKEN_SECRET
  //   },
  //   lite: true,
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
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.AU_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.AU_ACCESS_TOKEN_SECRET,
    },
    lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.NZ_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.NZ_ACCESS_TOKEN_SECRET,
  //   },
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.CA_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.CA_ACCESS_TOKEN_SECRET,
  //   },
  //   lite: true,
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
  //   accountName: '@GooglePakistan',
  // },
  AT: {
    twitterConfig: {
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.AT_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.AT_ACCESS_TOKEN_SECRET,
    },
    lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.CH_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.CH_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "de",
  //   timezone: "Europe/Zurich",
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.IT_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.IT_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "it",
  //   timezone: "Europe/Rome",
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.ES_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.ES_ACCESS_TOKEN_SECRET
  //   },
  //   locale: 'es',
  //   timezone: 'Europe/Madrid',
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.MX_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.MX_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Mexico_City",
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.CO_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.CO_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Bogota",
  //   lite: true,
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
  //     consumer_key: process.env.CONSUMER_KEY,
  //     consumer_secret: process.env.CONSUMER_SECRET,
  //     access_token_key: process.env.AR_ACCESS_TOKEN_KEY,
  //     access_token_secret: process.env.AR_ACCESS_TOKEN_SECRET,
  //   },
  //   locale: "es-mx",
  //   timezone: "America/Argentina/Buenos_Aires",
  //   lite: true,
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
