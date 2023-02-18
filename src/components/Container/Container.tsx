import clsxm from '@/lib/clsxm'

import { WithChildren } from '@/types'

type ContainerProps = {
  className: string
} & WithChildren

const Container = (props: ContainerProps) => {
  const { children, className } = props

  return (
    <div
      className={clsxm('mx-auto py-12 min-h-[calc(100vh-312px)]', className)}
    >
      {children}
    </div>
  )
}

export default Container
