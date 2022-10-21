import {
  Burger,
  Button,
  Container,
  Group,
  Header as MantineHeader,
  Paper,
  Tooltip,
  Transition,
  useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure, useScrollLock } from '@mantine/hooks'
import { IconBrandGithub, IconMoonStars, IconSun } from '@tabler/icons'
import { useRouter } from 'next/router'
import React from 'react'

import Link from '@/components/Link'

import { useStyles } from './Header.styles'
import { Links } from './Links'
import { Logo } from './Logo'

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [_, setScrollLocked] = useScrollLock()
  const { classes, cx } = useStyles()
  const router = useRouter()
  const dark = colorScheme === 'dark'

  const toggleNavbar = () => {
    toggle()
    setScrollLocked((c) => !c)
  }

  const items = Links.map((link) => (
    <Link
      key={link.label}
      href={link.url}
      className={cx(classes.link, {
        [classes.linkActive]: router.asPath === link.url,
      })}
      onClick={() => opened && toggleNavbar()}
      underline={false}
    >
      {link.label}
    </Link>
  ))

  return (
    <>
      <MantineHeader
        height={56}
        sx={{
          position: 'sticky',
        }}
      >
        <Container className={classes.inner}>
          <Burger
            opened={opened}
            onClick={() => toggleNavbar()}
            size='sm'
            className={classes.burger}
          />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
          <Link href='/' className={classes.logo}>
            <Logo />
          </Link>
          <Group spacing={5}>
            <Tooltip label={dark ? 'Light mode' : 'Dark mode'} openDelay={500}>
              <Button
                variant='filled'
                color='gray'
                className={classes.button}
                onClick={() => toggleColorScheme()}
              >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </Button>
            </Tooltip>
            <Tooltip label='Source code' openDelay={500}>
              <Button
                variant='filled'
                color='gray'
                className={classes.button}
                component={Link}
                href='https://github.com/tszhong0411/tools.honghong.me'
              >
                <IconBrandGithub size={18} />
              </Button>
            </Tooltip>
          </Group>
          <Transition transition='slide-right' duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.mobileNavbar} style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </MantineHeader>
    </>
  )
}
