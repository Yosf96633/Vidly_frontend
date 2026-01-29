import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://getvidly.com'

  return {
    rules: [
      {
        userAgent: '*', // Applies to all search engines
        allow: '/', // Allow crawling the homepage
        disallow: [
          '/dashboard/', // Don't index dashboard (requires login)
          '/api/', // Don't index API routes (if you have any)
          '/admin/', // Don't index admin pages (if you have any)
          '/_next/', // Don't index Next.js internal files
          '/private/', // Don't index private pages (if you have any)
        ],
      },
      // Special rules for specific bots (optional)
      {
        userAgent: 'Googlebot', // Google's crawler
        allow: '/',
        disallow: ['/dashboard/', '/api/', '/admin/'],
        crawlDelay: 0, // No delay for Google (they're good at not overloading)
      },
      {
        userAgent: 'Bingbot', // Microsoft's crawler
        allow: '/',
        disallow: ['/dashboard/', '/api/', '/admin/'],
        crawlDelay: 1, // 1 second delay for Bing (optional)
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Tell crawlers where to find the sitemap
  }
}

/*
 * ========================================
 * ROBOTS.TXT EXPLANATION
 * ========================================
 * 
 * This file automatically generates /robots.txt for your site.
 * 
 * WHAT IS ROBOTS.TXT?
 * It's a file that tells search engine crawlers which pages they can/cannot access.
 * 
 * RULES BREAKDOWN:
 * 
 * 1. Allow: '/' 
 *    → Search engines CAN crawl the homepage and all public pages
 * 
 * 2. Disallow: ['/dashboard/', '/api/', '/admin/']
 *    → Search engines CANNOT crawl these paths
 *    → Why? These are private/internal pages that shouldn't appear in search results
 * 
 * 3. Sitemap: 'https://getvidly.com/sitemap.xml'
 *    → Tells crawlers where to find your sitemap
 * 
 * IMPORTANT NOTES:
 * 
 * ⚠️  robots.txt is a SUGGESTION, not security
 *     - It tells "polite" bots what not to crawl
 *     - Bad actors can still access these pages
 *     - For real security, use authentication/authorization
 * 
 * ✅  Good for:
 *     - Preventing duplicate content in search results
 *     - Saving crawl budget (Google won't waste time on internal pages)
 *     - Keeping dashboard/admin pages out of Google
 * 
 * ❌  NOT good for:
 *     - Security (use proper auth instead)
 *     - Hiding sensitive data (use proper access controls)
 * 
 * COMMON USER AGENTS:
 * - '*' = All search engines
 * - 'Googlebot' = Google
 * - 'Bingbot' = Microsoft Bing
 * - 'Slurp' = Yahoo
 * - 'DuckDuckBot' = DuckDuckGo
 * - 'Baiduspider' = Baidu (Chinese search engine)
 * - 'YandexBot' = Yandex (Russian search engine)
 * 
 * CRAWL DELAY:
 * - Optional parameter
 * - Tells bots to wait X seconds between requests
 * - Prevents server overload
 * - Google ignores this (they have smart crawling)
 * - Useful for smaller search engines
 * 
 * HOW TO TEST:
 * After deployment, visit: https://getvidly.com/robots.txt
 * You should see a text file with your rules.
 * 
 * WHEN TO UPDATE THIS FILE:
 * 1. When you add new private sections (e.g., /billing/, /settings/)
 * 2. When you want to block specific bots
 * 3. When you change your URL structure
 * 
 * VERIFY IN GOOGLE SEARCH CONSOLE:
 * Go to: Settings → Crawling → robots.txt
 * You can test if specific URLs are blocked or allowed
 */