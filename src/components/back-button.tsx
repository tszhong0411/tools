'use client'

import { buttonVariants, Link } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { ArrowLeftIcon } from 'lucide-react'

const BackButton = () => {
  return (
    <Link href='/' className={cn(buttonVariants({ variant: 'outline' }), 'group')}>
      <ArrowLeftIcon className='mr-2 size-4 transition-transform group-hover:-translate-x-0.5' />{' '}
      Back
    </Link>
  )
}

export default BackButton
