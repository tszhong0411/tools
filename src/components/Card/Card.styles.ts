import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
  },

  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontWeight: 700,

    [theme.fn.largerThan('sm')]: {
      fontSize: 18,
    },

    [theme.fn.largerThan('md')]: {
      fontSize: 24,
    },
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}))
