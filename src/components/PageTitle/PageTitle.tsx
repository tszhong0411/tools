import { Title } from '@mantine/core'

import { useStyles } from './PageTitle.styles'

type PageTitleProps = {
  title: string
}

export default function PageTitle({ title }: PageTitleProps) {
  const { classes } = useStyles()

  return (
    <Title order={1} align='center' className={classes.title}>
      {title}
    </Title>
  )
}
