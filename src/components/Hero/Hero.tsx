import { Button, Container, Group, Text, Title } from '@mantine/core'

import { useStyles } from './Hero.styles'
import Link from '../Link'

export default function Hero() {
  const { classes } = useStyles()
  return (
    <Container pb={48}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            The{' '}
            <Text
              component='span'
              inherit
              variant='gradient'
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              Best
            </Text>{' '}
            online tools
          </Title>

          <Text className={classes.description} mt={30}>
            Here are some free online tools created by{' '}
            <Link href='https://instagram.com/tszhong0411'>@tszhong0411</Link>.
            I wish to hone my abilities. This is my side project, maybe :)
          </Text>

          <Group mt={30}>
            <Button
              radius='md'
              size='md'
              component={Link}
              href='#get-started'
              underline={false}
            >
              Get started
            </Button>
            <Button
              variant='default'
              radius='md'
              size='md'
              component={Link}
              href='https://github.com/tszhong0411/tools.honghong.me'
              underline={false}
            >
              Source code
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  )
}
