import BackButton from '@/components/back-button'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <BackButton />
      {children}
    </>
  )
}

export default Layout
