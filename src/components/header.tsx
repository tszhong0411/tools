import { SiGithub } from '@icons-pack/react-simple-icons'
import { Link, Logo } from '@tszhong0411/ui'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-40 saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/' aria-label='Home'>
          <Logo width={24} height={24} />
        </Link>
        <Link href='https://github.com/tszhong0411/tools' aria-label='GitHub'>
          <SiGithub />
        </Link>
      </div>
    </header>
  )
}

export default Header
