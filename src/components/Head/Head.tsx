'use client'

import { usePathname } from 'next/navigation'
import { NextSeo, NextSeoProps } from 'next-seo'

import { favicons } from '@/lib/favicons'

type HeadProps = NextSeoProps

const Head = (props: HeadProps) => {
  const pathname = usePathname()
  const { title, description = '小康工具 - 最好的線上工具', ...rest } = props

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <NextSeo
        useAppDir
        titleTemplate='%s - 小康工具'
        title={title}
        defaultTitle='小康工具'
        description={description}
        canonical={`https://tools.honghong.me${pathname}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://tools.honghong.me${pathname}`,
          type: 'website',
          title: title ?? '小康工具',
          description,
          images: [
            {
              url: 'https://honghong.me/static/images/projects/tools/cover.png',
              width: 1200,
              height: 630,
              alt: '小康工具 - 最好的線上工具',
            },
          ],
        }}
        additionalLinkTags={[...favicons]}
        {...rest}
      />
    </>
  )
}

export default Head
