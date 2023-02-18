import Link from '../Link'

const Hero = () => {
  return (
    <div className='my-12 space-y-8'>
      <h1 className='font-extrabold text-3xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r dark:from-red-700 dark:to-orange-500 from-pink-500 to-orange-400'>
          最好
        </span>
        的線上工具
      </h1>
      <p className='text-accent-6 leading-6'>
        這裡有一些由{' '}
        <Link href='https://instagram.com/tszhong0411' className='text-red-500'>
          @tszhong0411
        </Link>{' '}
        製作的免費線上工具。我希望能訓練我的能力。這也許是我的 side project :)
      </p>
      <div className='flex gap-4'>
        <Link
          href='#get-started'
          animation={false}
          className='rounded-lg bg-theme-9 hover:bg-theme-10 transition-colors duration-300 text-white px-6 py-2.5 font-bold'
        >
          開始
        </Link>
        <Link
          href='https://github.com/tszhong0411/tools'
          animation={false}
          icon={false}
          className='rounded-lg bg-theme-1 border border-theme-7 hover:border-theme-8 transition-colors duration-300 text-theme-11 px-6 py-2.5 font-bold'
        >
          原始碼
        </Link>
      </div>
    </div>
  )
}

export default Hero
