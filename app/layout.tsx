import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ubuntu Intelligence | Technology With Purpose',
    template: '%s | Ubuntu Intelligence'
  },
  description: 'Building Ethical, Predictive, and Human-Centered Technologies from Africa to the World. Ubuntu Intelligence creates AI-driven, inclusive solutions for healthcare, education, and community empowerment.',
  keywords: [
    'Ubuntu Intelligence',
    'African Technology',
    'Ethical AI',
    'Healthcare Technology',
    'Inclusive Innovation',
    'Predictive Analytics',
    'Community Health',
    'Ernest Nkunzimana'
  ],
  authors: [{ name: 'Ernest Nkunzimana', url: 'https://ubuntu-intelligence.com' }],
  creator: 'Ernest Nkunzimana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ubuntu-intelligence.com',
    siteName: 'Ubuntu Intelligence',
    title: 'Ubuntu Intelligence | Technology With Purpose',
    description: 'Building Ethical, Predictive, and Human-Centered Technologies from Africa to the World',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ubuntu Intelligence Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ubuntu_intelligence',
    title: 'Ubuntu Intelligence | Technology With Purpose',
    description: 'Building Ethical, Predictive, and Human-Centered Technologies from Africa to the World',
    images: ['/images/og-image.jpg']
  },
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
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#E95420" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>
              {children}
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'hsl(var(--background))',
                    color: 'hsl(var(--foreground))',
                    border: '1px solid hsl(var(--border))',
                  },
                }}
              />
            </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
