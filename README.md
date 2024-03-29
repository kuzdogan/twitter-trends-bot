# Turkey Google Trends Bot

A bot to post routinely the jumping searches in Turkey.

Based on the unofficial [google-trends-api](https://github.com/pat310/google-trends-api) library.

2 character [geocodes](https://github.com/datasets/country-codes/blob/master/data/country-codes.csv).
List of [timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
[Locales](https://github.com/moment/moment/tree/develop/locale)

To get access token key & secret:

```
bash auth.sh
```

To test a single country

```
npm run test <country-code>
```

e.g. `npm run test NZ`

the `ACCESS_TOKEN_KEY` and `ACCESS_TOKEN_SECRET` can be found at

```
cat ~/.twurlrc
```

To deploy to Google Cloud:

```
gcloud functions deploy tweetDailyTrend --runtime nodejs12 --trigger-topic tweet
```
