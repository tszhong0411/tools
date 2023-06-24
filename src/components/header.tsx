import { Logo } from '@codewithhong/ui'
import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-40 bg-black/50 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex items-center justify-center gap-6'>
          <a
            href='https://github.com/codewithhong/tools'
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
