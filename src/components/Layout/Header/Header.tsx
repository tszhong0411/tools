'use client'

import { IconBrandGithub, IconMoon, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { useTheme } from '@/lib/next-themes'

import { Logo } from './Logo'

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/50 dark:saturate-100'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex items-center justify-center gap-6'>
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              type='button'
            >
              {resolvedTheme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
          )}
          <a
            href='https://github.com/tszhong0411/tools'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
