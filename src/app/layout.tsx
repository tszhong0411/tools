import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'

import { Toaster } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { GeistSans } from 'geist/font/sans'

import Footer from '@/components/footer'
import Header from '@/components/header'

type RootLayoutProps = {
  children: React.ReactNode
}

const SITE_URL =
  process.env.NODE_ENV === 'production' ? 'https://tools.honghong.me' : 'http://localhost:3000'
const SITE_TITLE = 'Tools'
const SITE_DESCRIPTION =
  'Discover a powerful collection of web tools designed to streamline your workflow and boost productivity. Made by @tszhong0411.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    title: 'Nelson Lai',
    card: 'summary_large_image',
    site: '@tszhong0411',
    creator: '@tszhong0411',
    images: [
      {
        url: 'https://honghong.me/images/projects/tools/cover.png',
        width: 1280,
        height: 832,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  alternates: {
    canonical: SITE_URL
  },
  keywords: ['tools', 'free tools', 'web tools', 'tools for developers', 'tools for designers'],
  creator: 'tszhong0411',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US',
    images: [
      {
        url: 'https://honghong.me/images/projects/tools/cover.png',
        width: 1280,
        height: 832,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={cn(GeistSans.variable, 'dark')}>
      <body>
        <Header />
        <main className='relative mx-auto max-w-4xl px-8 py-24'>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
