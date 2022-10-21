import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',

    [theme.fn.largerThan('md')]: {
      flexDirection: 'row',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    maxWidth: '100%',
    fontSize: 34,
    lineHeight: 1.15,

    [theme.fn.largerThan('md')]: {
      lineHeight: 1.05,
      maxWidth: 500,
      fontSize: 48,
    },
  },

  description: {
    opacity: 0.75,
    maxWidth: '100%',

    [theme.fn.largerThan('md')]: {
      maxWidth: 500,
    },
  },
}))
