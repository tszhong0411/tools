import { ActionIcon, Container, Group, Text } from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons'

import Link from '@/components/Link'

import { useStyles } from './Footer.styles'

export default function FooterSocial() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Made with ❤️ in Hong Kong</Text>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon
            component={Link}
            href='https://www.facebook.com/tszhonglai.0411/'
            size='lg'
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href='https://www.youtube.com/@tszhong0411'
            size='lg'
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href='https://www.instagram.com/tszhong0411/'
            size='lg'
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
