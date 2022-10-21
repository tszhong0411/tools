import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    margin: '24px 0 36px 0',
    fontSize: 24,

    [theme.fn.largerThan('sm')]: {
      fontSize: 36,
    },
  },
}))
