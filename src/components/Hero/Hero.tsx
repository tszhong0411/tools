import Link from 'next/link'

const Hero = () => {
  return (
    <div className='my-12 space-y-8'>
      <h1 className='text-3xl font-extrabold'>
        The{' '}
        <span className='bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] bg-clip-text text-transparent dark:from-red-700 dark:to-orange-500'>
          Best
        </span>{' '}
        Online Tools
      </h1>
      <p className='leading-6 text-accent-6'>
        Here are some free online tools made by{' '}
        <Link href='https://instagram.com/tszhong0411' className='text-red-500'>
          @tszhong0411
        </Link>{' '}
        . I hope to train my skills. This may be my side project :)
      </p>
      <div className='flex gap-4'>
        <Link
          href='#get-started'
          className='rounded-lg border border-black bg-black px-6 py-2.5 font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
        >
          Get started
        </Link>
        <Link
          href='https://github.com/tszhong0411/tools'
          className='rounded-lg border border-accent-2 px-6 py-2.5 font-bold text-accent-5 transition-colors duration-300 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white'
        >
          Source code
        </Link>
      </div>
    </div>
  )
}

export default Hero
