# Turkey Google Trends Bot

A bot to post routinely the jumping searches in Turkey.

To get access token key & secret:
```
(export $(grep -v '^#' .env | xargs) && twurl authorize --consumer-key $CONSUMER_KEY --consumer-secret $CONSUMER_SECRET)
```

the `ACCESS_TOKEN_KEY` and `ACCESS_TOKEN_SECRET` can be found at
```
cat ~/.twurlrc
```

To deploy to Google Cloud:
```
gcloud functions deploy tweetDailyTrend --runtime nodejs12 --trigger-topic tweet
```