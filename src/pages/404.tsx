import {
  Button,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from '@mantine/core'

import Link from '@/components/Link'

const useStyles = createStyles((theme) => ({
  root: {
    padding: '160px 0',
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 120,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.largerThan('sm')]: {
      fontSize: 220,
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 32,

    [theme.fn.largerThan('sm')]: {
      fontSize: 38,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

export default function FourZeroFour() {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color='dimmed'
        size='lg'
        align='center'
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position='center'>
        <Button
          component={Link}
          href='/'
          variant='subtle'
          size='md'
          underline={false}
        >
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
