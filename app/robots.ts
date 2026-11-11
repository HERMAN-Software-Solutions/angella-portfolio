import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://angella-portfolio.vercel.app' // Update this when deployed

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Don't let Google crawl the backend API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}