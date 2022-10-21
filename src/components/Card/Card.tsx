import {
  Card as MantineCard,
  Container,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core'

import { Tool } from '@/config/config'

import { useStyles } from './Card.styles'
import Link from '../Link'

type CardProps = {
  tools: Array<Tool>
  title: string
}

export default function Card({ tools, title }: CardProps) {
  const { classes, theme } = useStyles()

  const items = tools.map((item) => (
    <UnstyledButton
      key={item.label}
      className={classes.item}
      component={Link}
      href={item.link}
      underline={false}
    >
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size='xs' mt={7}>
        {item.label}
      </Text>
    </UnstyledButton>
  ))

  return (
    <Container className={classes.container} p={0}>
      <MantineCard withBorder radius='md' className={classes.card}>
        <Group position='apart'>
          <Text className={classes.title}>{title}</Text>
        </Group>
        <SimpleGrid cols={3} mt='md'>
          {items}
        </SimpleGrid>
      </MantineCard>
    </Container>
  )
}
