import clsxm from '@/lib/clsxm'

import { WithChildren } from '@/types'

type ContainerProps = {
  className: string
} & WithChildren

const Container = (props: ContainerProps) => {
  const { children, className } = props

  return (
    <div
      className={clsxm('mx-auto min-h-[calc(100vh-312px)] py-12', className)}
    >
      {children}
    </div>
  )
}

export default Container
