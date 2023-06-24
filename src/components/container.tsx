import { cx } from '@codewithhong/utils'

type ContainerProps = {
  className: string
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { children, className } = props

  return (
    <div className={cx('mx-auto min-h-[calc(100vh-312px)] py-12', className)}>
      {children}
    </div>
  )
}

export default Container
