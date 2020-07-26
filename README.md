# Turkey Google Trends Bot

A bot to post routinely the jumping searches in Turkey.

To deploy to Google Cloud:
```
gcloud functions deploy tweetDailyTrend --runtime nodejs12 --trigger-topic tweet
```