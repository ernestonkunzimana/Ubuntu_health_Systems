import { MetadataRoute } from 'next'
import { baseSEO } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/dashboard/',
        '/_next/',
        '/private/',
      ],
    },
    sitemap: `${baseSEO.siteUrl}/sitemap.xml`,
    host: baseSEO.siteUrl,
  }
}
