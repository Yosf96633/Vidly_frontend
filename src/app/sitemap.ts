import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your website
  const baseUrl = 'https://getvidly.com'
  
  // Current date for lastModified
  const currentDate = new Date()

  return [
    // ========================================
    // MARKETING PAGES (Public - High Priority)
    // ========================================
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/feature`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8, // Features page - important for SEO
    },
    {
      url: `${baseUrl}/solution`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8, // Solutions page - important for SEO
    },

    // ========================================
    // DASHBOARD PAGES (Should be excluded from public indexing)
    // ========================================
    // Note: Dashboard pages are typically behind authentication
    // and should NOT be indexed by search engines.
    // They are commented out here but included for reference.
    // If you want these in the sitemap (not recommended), uncomment below:
    
    // {
    //   url: `${baseUrl}/dashboard`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/dashboard/comment-analyzer`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/dashboard/idea-validator`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/dashboard/topic-finder`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/dashboard/viral-search`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.3,
    // },
  ]
}

/*
 * ========================================
 * SITEMAP EXPLANATION
 * ========================================
 * 
 * This file automatically generates /sitemap.xml for your site.
 * 
 * PRIORITY VALUES:
 * - 1.0 = Homepage (most important)
 * - 0.8 = Key marketing pages (features, solutions)
 * - 0.5 = Regular pages
 * - 0.3 = Low priority (dashboard/internal pages)
 * 
 * CHANGE FREQUENCY:
 * - always: Changes every time it's accessed
 * - hourly: Changes hourly
 * - daily: Changes daily
 * - weekly: Changes weekly (good for marketing pages)
 * - monthly: Changes monthly (good for static pages)
 * - yearly: Rarely changes
 * - never: Archived content
 * 
 * WHEN TO UPDATE THIS FILE:
 * 1. When you add new public pages (blog, pricing, etc.)
 * 2. When you change URL structure
 * 3. When you want to prioritize certain pages
 * 
 * HOW TO TEST:
 * After deployment, visit: https://getvidly.com/sitemap.xml
 * You should see an XML file with all your URLs.
 * 
 * SUBMIT TO GOOGLE:
 * Go to Google Search Console → Sitemaps → Add new sitemap
 * Enter: https://getvidly.com/sitemap.xml
 */