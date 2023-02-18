import { Inter, Noto_Sans_TC } from '@next/font/google'
import clsx from 'clsx'

import '@/styles/globals.css'

import { ThemeProvider } from '@/lib/next-themes'

import Analytics from '@/components/Analytics'
import CustomToaster from '@/components/CustomToaster'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

import { WithChildren } from '@/types'

type RootLayoutProps = WithChildren

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en'
      className={clsx(inter.variable, notoSansTC.variable, 'scroll-smooth')}
    >
      <body className='overflow-x-hidden bg-hong-bg font-default'>
        <ThemeProvider attribute='class'>
          <Header />
          <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
            {children}
          </main>
          <CustomToaster />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
