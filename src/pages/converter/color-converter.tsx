import {
  ActionIcon,
  ColorInput,
  Container,
  createStyles,
  Divider,
  Grid,
  Paper,
  Text,
} from '@mantine/core'
import { IconRefresh } from '@tabler/icons'
import { colord, extend, getFormat, random } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import namesPlugin from 'colord/plugins/names'
import React from 'react'

import PageTitle from '@/components/PageTitle'

extend([hwbPlugin, cmykPlugin, lchPlugin, namesPlugin, a11yPlugin])

const useStyles = createStyles((theme) => ({
  label: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
    fontWeight: 500,
    fontSize: 14,
  },

  value: {
    fontSize: 18,
    fontWeight: 700,
    margin: '8px 0',

    [theme.fn.largerThan('md')]: {
      fontSize: 24,
    },
  },
}))

type List = {
  label: string
  value: string
}

export default function Color() {
  const [value, setValue] = React.useState('#ffffff')
  const { classes } = useStyles()

  const ConvertList: List[] = [
    {
      label: 'HEX',
      value: colord(value).toHex(),
    },
    {
      label: 'RGB',
      value: colord(value).toRgbString(),
    },
    {
      label: 'HSL',
      value: colord(value).toHslString(),
    },
    {
      label: 'HWB',
      value: colord(value).toHwbString(),
    },
    {
      label: 'CMYK',
      value: colord(value).toCmykString(),
    },
    {
      label: 'LCH',
      value: colord(value).toLchString(),
    },
    {
      label: 'CSS KEYWORD',
      value: colord(value).toName({ closest: true }),
    },
  ]

  const AnalysisList: List[] = [
    {
      label: 'Is valid css value?',
      value: colord(value).isValid() ? 'Yes' : 'No',
    },
    {
      label: 'Format',
      value: getFormat(value) || '-',
    },
    {
      label: 'Hue (0-359)',
      value: `${colord(value).hue()} deg`,
    },
    {
      label: 'Brightness',
      value: `${Math.floor(colord(value).brightness() * 100)}% (${
        colord(value).isDark() ? 'Dark' : 'Light'
      })`,
    },
    {
      label: 'Luminance',
      value: `${Math.floor(colord(value).luminance() * 100)}%`,
    },
    {
      label: 'Contrast on white',
      value: `${colord(value).contrast()}:1`,
    },
  ]

  return (
    <>
      <PageTitle title='Color converter' />
      <Container>
        <ColorInput
          size='lg'
          onChange={setValue}
          value={value}
          rightSection={
            <ActionIcon onClick={() => setValue(random().toHex())}>
              <IconRefresh size={16} />
            </ActionIcon>
          }
          swatches={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
        />
      </Container>
      <Grid my={60}>
        <Grid.Col span={12} sm={6}>
          <Paper withBorder px={24} py={32}>
            <Text size={32} weight={500} mb={24} align='center'>
              Conversion
            </Text>
            {ConvertList.map((item, index) => (
              <React.Fragment key={index}>
                <Text className={classes.label}>{item.label}</Text>
                <Text className={classes.value}>{item.value}</Text>
                <Divider my={12} size='md' />
              </React.Fragment>
            ))}
          </Paper>
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <Paper withBorder px={24} py={32}>
            <Text size={32} weight={500} mb={24} align='center'>
              Analysis
            </Text>
            {AnalysisList.map((item, index) => (
              <React.Fragment key={index}>
                <Text className={classes.label}>{item.label}</Text>
                <Text className={classes.value}>{item.value}</Text>
                <Divider my={12} size='md' />
              </React.Fragment>
            ))}
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  )
}
