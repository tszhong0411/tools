import {
  Button,
  Container,
  Group,
  Header as MantineHeader,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core'
import { IconBrandGithub, IconMoonStars, IconSun } from '@tabler/icons'
import React from 'react'

import Link from '@/components/Link'

import { useStyles } from './Header.styles'
import { Logo } from './Logo'

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes } = useStyles()
  const dark = colorScheme === 'dark'

  return (
    <>
      <MantineHeader
        height={56}
        sx={{
          position: 'sticky',
        }}
      >
        <Container className={classes.inner}>
          <Link href='/' variant='text' color={dark ? '#fff' : '#000'}>
            <Logo />
          </Link>
          <Group spacing={5}>
            <Tooltip label={dark ? 'Light mode' : 'Dark mode'} openDelay={500}>
              <Button
                variant='light'
                color='gray'
                className={classes.button}
                onClick={() => toggleColorScheme()}
              >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </Button>
            </Tooltip>
            <Tooltip label='Source code' openDelay={500}>
              <Button
                variant='light'
                color='gray'
                className={classes.button}
                component={Link}
                href='https://github.com/tszhong0411/tools'
              >
                <IconBrandGithub size={18} />
              </Button>
            </Tooltip>
          </Group>
        </Container>
      </MantineHeader>
    </>
  )
}
