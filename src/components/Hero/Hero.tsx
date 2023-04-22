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
        <Link href='https://instagram.com/tszhong0411' className='text-red-500'>
          @tszhong0411
        </Link>{' '}
        . I hope to train my skills. This may be my side project :)
      </p>
      <div className='flex gap-4'>
        <Link
          href='#get-started'
          className='rounded-lg border border-white bg-white px-6 py-2.5 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white'
        >
          Get started
        </Link>
        <Link
          href='https://github.com/tszhong0411/tools'
          className='rounded-lg border border-accent-2 px-6 py-2.5 font-bold text-accent-5 transition-colors duration-300 hover:border-white hover:text-white'
        >
          Source code
        </Link>
      </div>
    </div>
  )
}

export default Hero
