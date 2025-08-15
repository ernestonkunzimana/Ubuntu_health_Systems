/**
 * SEO and Performance Optimization Utilities
 * Implements best practices for search engine optimization and performance
 */

import { Metadata } from 'next'

// Base SEO configuration
export const baseSEO = {
  siteName: 'Ubuntu Intelligence',
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://ubuntu-intelligence.com',
  defaultTitle: 'Ubuntu Intelligence | Technology With Purpose',
  defaultDescription: 'Building Ethical, Predictive, and Human-Centered Technologies from Africa to the World. Ubuntu Intelligence creates AI-driven, inclusive solutions for healthcare, education, and community empowerment.',
  defaultKeywords: [
    'Ubuntu Intelligence',
    'African Technology',
    'Ethical AI',
    'Healthcare Technology',
    'Inclusive Innovation',
    'Predictive Analytics',
    'Community Health',
    'Ernest Nkunzimana',
    'Digital Health Africa',
    'AI for Good'
  ],
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@ubuntu_intelligence',
  linkedInProfile: 'https://linkedin.com/company/ubuntu-intelligence',
  facebookPage: 'https://facebook.com/ubuntu.intelligence',
}

// Generate comprehensive metadata for pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Ernest Nkunzimana',
  locale = 'en_US',
  alternateLanguages = ['en', 'fr', 'sw', 'rw'],
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  path?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  locale?: string
  alternateLanguages?: string[]
}): Metadata {
  const fullTitle = title 
    ? `${title} | ${baseSEO.siteName}`
    : baseSEO.defaultTitle

  const fullDescription = description || baseSEO.defaultDescription
  const fullKeywords = [...baseSEO.defaultKeywords, ...keywords]
  const fullImage = image || baseSEO.defaultImage
  const canonicalUrl = `${baseSEO.siteUrl}${path}`

  const metadata: Metadata = {
    metadataBase: new URL(baseSEO.siteUrl),
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: [{ name: author, url: baseSEO.siteUrl }],
    creator: author,
    publisher: baseSEO.siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale,
      url: canonicalUrl,
      siteName: baseSEO.siteName,
      title: fullTitle,
      description: fullDescription,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: baseSEO.twitterHandle,
      site: baseSEO.twitterHandle,
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages.reduce((acc, lang) => {
        acc[lang] = `${canonicalUrl}?lang=${lang}`
        return acc
      }, {} as Record<string, string>),
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
  }

  // Add article-specific metadata
  if (type === 'article' && (publishedTime || modifiedTime)) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      section: 'Technology',
      tags: keywords,
    }
  }

  return metadata
}

// JSON-LD structured data generators
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/images/logo.png`,
    description: baseSEO.defaultDescription,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Ernest Nkunzimana',
      jobTitle: 'Founder & CEO',
      url: `${baseSEO.siteUrl}/team`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kigali',
      addressCountry: 'Rwanda',
      addressRegion: 'Kigali',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+250-000-000-000',
      contactType: 'customer service',
      email: 'hello@ubuntu-intelligence.com',
    },
    sameAs: [
      baseSEO.linkedInProfile,
      baseSEO.facebookPage,
      `https://twitter.com/${baseSEO.twitterHandle.substring(1)}`,
    ],
    industry: 'Technology',
    sector: 'Healthcare Technology',
    knowsAbout: [
      'Artificial Intelligence',
      'Healthcare Technology',
      'Digital Health',
      'Predictive Analytics',
      'Community Health',
      'Ethical AI',
    ],
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
    description: baseSEO.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: baseSEO.siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseSEO.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleStructuredData({
  title,
  description,
  author,
  publishedTime,
  modifiedTime,
  image,
  url,
}: {
  title: string
  description: string
  author: string
  publishedTime: string
  modifiedTime?: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: baseSEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseSEO.siteUrl}/images/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// Performance optimization utilities
export function optimizeImageProps(src: string, alt: string, priority = false) {
  return {
    src,
    alt,
    priority,
    quality: 85,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  }
}

// Core Web Vitals optimization
export const performanceConfig = {
  // Image optimization
  imageQuality: 85,
  imagePriority: ['hero', 'above-fold'],
  
  // Font optimization
  fontDisplay: 'swap',
  preloadFonts: [
    '/fonts/inter-var.woff2',
  ],
  
  // Resource hints
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.builder.io',
  ],
  
  // Critical CSS
  inlineCriticalCSS: true,
  
  // Code splitting
  routeBasedSplitting: true,
  componentBasedSplitting: true,
}

// Sitemap generation helpers
export function generateSitemapUrl(path: string, lastmod?: string, priority = '0.8') {
  return {
    url: `${baseSEO.siteUrl}${path}`,
    lastmod: lastmod || new Date().toISOString(),
    priority,
    changefreq: 'weekly' as const,
  }
}

export const sitemapRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.9' },
  { path: '/solutions', priority: '0.9' },
  { path: '/solutions/healthtrack-pro', priority: '0.8' },
  { path: '/contact', priority: '0.7' },
  { path: '/join', priority: '0.8' },
  { path: '/team', priority: '0.7' },
  { path: '/news', priority: '0.6' },
  { path: '/impact', priority: '0.7' },
]
