const axios = require('axios');
const xml2js = require('xml2js');

class GoogleTrendsRSS {
  constructor() {
    this.baseUrl = 'https://trends.google.com/trending/rss';
    this.parser = new xml2js.Parser();
  }

  /**
   * Fetch daily trends for a specific country using Google Trends RSS feed
   * @param {string} geo - Country code (e.g., 'TR', 'US', 'DE')
   * @returns {Promise<Object>} - Formatted trends data compatible with existing code
   */
  async getDailyTrends(geo) {
    try {
      console.log(`Fetching RSS trends for ${geo}`);
      const url = `${this.baseUrl}?geo=${geo}`;
      
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });

      const result = await this.parser.parseStringPromise(response.data);
      
      if (!result.rss || !result.rss.channel || !result.rss.channel[0].item) {
        throw new Error('Invalid RSS structure received');
      }

      const items = result.rss.channel[0].item;
      console.log(`Found ${items.length} trending topics`);

      // Transform RSS data to match existing data structure
      const trendingSearches = items.map(item => this.transformRSSItem(item));

      // Sort by traffic (highest first)
      trendingSearches.sort((a, b) => this.compareTraffic(b.formattedTraffic, a.formattedTraffic));

      return {
        trendingSearches: trendingSearches
      };

    } catch (error) {
      console.error('Error fetching RSS trends:', error.message);
      throw error;
    }
  }

  /**
   * Transform RSS item to match the expected data structure
   * @param {Object} rssItem - Raw RSS item from Google Trends
   * @returns {Object} - Transformed trend object
   */
  transformRSSItem(rssItem) {
    const rawTitle = rssItem.title?.[0] || 'Unknown Trend';
    const title = this.capitalizeTitle(rawTitle);
    const traffic = rssItem['ht:approx_traffic']?.[0] || '0+';
    const pubDate = rssItem.pubDate?.[0];
    
    // Extract news articles
    const newsItems = rssItem['ht:news_item'] || [];
    const articles = newsItems.slice(0, 3).map(newsItem => ({
      title: newsItem['ht:news_item_title']?.[0] || 'No title',
      url: newsItem['ht:news_item_url']?.[0] || '#',
      source: newsItem['ht:news_item_source']?.[0] || 'Unknown Source'
    }));

    // Generate related queries from article titles (simplified approach)
    const relatedQueries = this.generateRelatedQueries(title, articles);

    // Create explore link
    const exploreLink = `/trends/explore?q=${encodeURIComponent(title)}&geo=${this.currentGeo || ''}`;

    return {
      title: {
        query: title,
        exploreLink: exploreLink
      },
      formattedTraffic: this.formatTraffic(traffic),
      relatedQueries: relatedQueries,
      articles: articles,
      pubDate: pubDate
    };
  }

  /**
   * Format traffic numbers to match existing format
   * @param {string} traffic - Raw traffic string from RSS
   * @returns {string} - Formatted traffic string
   */
  formatTraffic(traffic) {
    // RSS gives us things like "1000+" or "100+"
    // Convert to format like "100K+" or "1M+"
    const num = parseInt(traffic.replace(/[^0-9]/g, ''));
    
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + 'M+';
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + 'K+';
    } else {
      return num + '+';
    }
  }

  /**
   * Generate related queries from trend title and articles
   * @param {string} title - Main trend title
   * @param {Array} articles - Array of related articles
   * @returns {Array} - Array of related query objects
   */
  generateRelatedQueries(title, articles) {
    const relatedQueries = [];
    
    // Add variations of the main title
    const titleWords = title.toLowerCase().split(' ');
    if (titleWords.length > 1) {
      // Add individual words as related queries
      titleWords.forEach(word => {
        if (word.length > 2 && !relatedQueries.some(q => q.query === word)) {
          relatedQueries.push({ query: word });
        }
      });
    }

    // Extract key terms from article titles
    articles.forEach(article => {
      const articleWords = article.title.toLowerCase().split(' ');
      articleWords.forEach(word => {
        if (word.length > 3 && 
            !word.includes('http') && 
            !relatedQueries.some(q => q.query === word) &&
            relatedQueries.length < 5) {
          relatedQueries.push({ query: word });
        }
      });
    });

    return relatedQueries.slice(0, 5); // Limit to 5 related queries
  }

  /**
   * Capitalize title properly - handles names, places, and common words
   * @param {string} title - Raw title to capitalize
   * @returns {string} - Properly capitalized title
   */
  capitalizeTitle(title) {
    if (!title) return title;
    
    // Split by spaces and capitalize each word
    return title
      .toLowerCase()
      .split(' ')
      .map(word => {
        // Handle special cases and conjunctions that should stay lowercase
        const lowercaseWords = ['ve', 'ile', 'için', 'of', 'and', 'the', 'in', 'on', 'at', 'to', 'for', 'by', 'with'];
        
        // Always capitalize first word, or if it's not a common lowercase word
        if (word.length === 0) return word;
        
        // Capitalize first letter of each word, except common small words (but not if it's the first word)
        const isFirstWord = title.toLowerCase().split(' ').indexOf(word) === 0;
        
        if (isFirstWord || !lowercaseWords.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        
        return word;
      })
      .join(' ');
  }

  /**
   * Compare two traffic values for sorting (highest first)
   * @param {string} a - First traffic value (e.g., "1K+", "100+", "2M+")
   * @param {string} b - Second traffic value
   * @returns {number} - Comparison result
   */
  compareTraffic(a, b) {
    const getTrafficValue = (traffic) => {
      if (!traffic) return 0;
      
      // Remove the '+' and extract the number and suffix
      const cleaned = traffic.replace('+', '');
      const match = cleaned.match(/^(\d+(?:\.\d+)?)([KM]?)$/i);
      
      if (!match) return 0;
      
      const [, num, suffix] = match;
      let value = parseFloat(num);
      
      if (suffix === 'K' || suffix === 'k') {
        value *= 1000;
      } else if (suffix === 'M' || suffix === 'm') {
        value *= 1000000;
      }
      
      return value;
    };

    return getTrafficValue(a) - getTrafficValue(b);
  }

  /**
   * Set current geo for explore links
   * @param {string} geo - Country code
   */
  setGeo(geo) {
    this.currentGeo = geo;
  }
}

module.exports = GoogleTrendsRSS;