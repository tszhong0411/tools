import { buttonVariants } from '@codewithhong/ui'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='my-12 space-y-8'>
      <h1 className='text-3xl font-extrabold'>
        The{' '}
        <span className='bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent'>
          Best
        </span>{' '}
        Online Tools
      </h1>
      <p className='leading-6 text-accent-6'>
        Here are some free online tools made by{' '}
        <Link
          href='https://instagram.com/codewithhong'
          className='text-red-500'
        >
          @codewithhong
        </Link>{' '}
        . I hope to train my skills. This may be my side project :)
      </p>
      <div className='flex gap-4'>
        <Link href='#get-started' className={buttonVariants()}>
          Get started
        </Link>
        <Link
          href='https://github.com/codewithhong/tools'
          className={buttonVariants({ variant: 'ghost' })}
        >
          Source code
        </Link>
      </div>
    </div>
  )
}

export default Hero
