import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 40,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    flexDirection: 'column',

    [theme.fn.largerThan('xs')]: {
      flexDirection: 'row',
    },
  },

  links: {
    marginTop: theme.spacing.md,

    [theme.fn.largerThan('xs')]: {
      marginTop: 0,
    },
  },
}))
