import { Anchor, AnchorProps } from '@mantine/core'
import NextLink from 'next/link'
import React from 'react'

type LinkProps = {
  href: string
} & AnchorProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>((props, ref) => {
  const { href, children, ...rest } = props
  const isInternalLink = href.startsWith('/')
  const isAnchorLink = href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Anchor ref={ref} {...rest}>
          {children}
        </Anchor>
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return (
      <Anchor ref={ref} href={href} {...rest}>
        {children}
      </Anchor>
    )
  }

  return (
    <Anchor
      ref={ref}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
    >
      {children}
    </Anchor>
  )
})

export default Link
