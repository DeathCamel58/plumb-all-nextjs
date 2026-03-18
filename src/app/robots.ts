import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/review-us'] },
    sitemap: 'https://plumb-all.com/sitemap.xml',
  }
}
