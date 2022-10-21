import { Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

import { Favicons } from './Favicons'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children,
  ...props
}: React.PropsWithChildren<NextSeoProps>) {
  const router = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='%s | 小康 Tools'
        defaultTitle='小康 Tools'
        description='Tools to help you.'
        canonical={`https://tools.honghong.me${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://tools.honghong.me${router.asPath}`,
          type: 'website',
          title: '小康 Tools',
          description: 'Tools to help you.',
          images: [
            {
              url: 'https://honghong.me/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: 'Online Tools',
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
        {...props}
      />
      <Header />
      <Container py={48}>{children}</Container>
      <Footer />
    </>
  )
}
