# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Twitter bot that posts Google Trends data for multiple countries. It fetches trending searches from Google Trends API and posts them to Twitter in formatted tweets with summary images.

## Architecture

The bot is designed as a serverless Google Cloud Function that runs on scheduled intervals. The main entry point is `index.js` which contains the `tweetDailyTrend` function.

### Key Components

- **index.js**: Main entry point containing the scheduling logic and Google Trends API calls
- **TrendTweeter.js**: Core class that handles Twitter API interactions, tweet formatting, and image generation
- **config.js**: Configuration for multiple countries including Twitter credentials, localization, and timezone settings
- **authenticate.js**: Utility for obtaining Twitter API bearer tokens

### Core Flow

1. `tweetDailyTrend()` iterates through configured countries in `config.js`
2. For each country, checks if current time matches posting schedule (13h, 18h, or 23h local time)
3. Fetches daily trends using `google-trends-api`
4. Creates `TrendTweeter` instance and calls `tweetTrends()`
5. Generates summary image using Canvas API and posts tweet thread

## Development Commands

```bash
# Test specific country (e.g., Turkey)
npm run test TR

# Test specific country (e.g., New Zealand)  
npm run test NZ

# Deploy to Google Cloud Functions
npm run deploy

# Run locally for testing
npx functions-framework --target=tweetDailyTrend --signature-type=event
```

## Environment Setup

- Requires Node.js v14 (specified in .nvmrc)
- Uses `.env` file for API credentials
- Run `bash auth.sh` to get Twitter access tokens (saves to ~/.twurlrc)

## Country Configuration

Each country in `config.js` requires:
- Twitter API credentials (separate for each account)
- Timezone and locale settings
- Localized phrases for tweets
- `lite` flag (determines if detailed news articles are included)

## Dependencies

- **twitter-api-v2**: Twitter API v2 client
- **google-trends-api**: Unofficial Google Trends API
- **canvas**: For generating summary images with trends
- **moment-timezone**: Timezone handling
- **dotenv**: Environment variable loading

## Image Generation

The bot generates summary images using Canvas API with:
- Custom fonts (Roboto family) in `/assets/`
- Logo image from `/assets/logo.png`
- Two-column layout for trends
- Configurable dimensions (1200x675)

## Twitter Integration

- Uses Twitter API v2 for posting
- Creates threaded tweets with summary image
- Handles URL shortening (t.co links)
- Supports both "lite" and full modes (with/without detailed articles)