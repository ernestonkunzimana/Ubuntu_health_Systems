import { MetadataRoute } from 'next'
import { baseSEO, sitemapRoutes } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = baseSEO.siteUrl
  const currentDate = new Date().toISOString()

  return sitemapRoutes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: parseFloat(route.priority),
  }))
}
