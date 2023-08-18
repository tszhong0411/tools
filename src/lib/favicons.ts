type Favicon = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

export const favicons: Favicon[] = [
  {
    rel: 'icon',
    href: '/favicon/favicon.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
]
