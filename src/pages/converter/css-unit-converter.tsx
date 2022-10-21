import { Container, Group, NumberInput, Stack, Text } from '@mantine/core'
import React from 'react'

import PageTitle from '@/components/PageTitle'

type Unit = {
  label: string
  unit: string
  value: number
  onChange: (val: number) => void
}

export default function CSSUnit() {
  const [em, setEm] = React.useState(1)
  const [rem, setRem] = React.useState(1)
  const [px, setPx] = React.useState(16)
  const [percent, setPercent] = React.useState(100)
  const [pt, setPt] = React.useState(12)

  const emHandler = (val: number) => {
    setEm(val)
    setRem(val)
    setPx(val * 16)
    setPercent(val * 100)
    setPt(val * 12)
  }

  const remHandler = (val: number) => {
    setRem(val)
    setEm(val)
    setPx(val * 16)
    setPercent(val * 100)
    setPt(val * 12)
  }

  const pxHandler = (val: number) => {
    setPx(val)
    setEm(val / 16)
    setRem(val / 16)
    setPercent((val / 16) * 100)
    setPt((val / 16) * 12)
  }

  const percentHandler = (val: number) => {
    setPercent(val)
    setEm(val / 100)
    setPx(val / 100)
    setRem((val / 100) * 16)
    setPt((val / 100) * 12)
  }

  const ptHandler = (val: number) => {
    setPt(val)
    setEm(val / 12)
    setRem(val / 12)
    setPx((val / 12) * 16)
    setPercent((val / 12) * 100)
  }

  const units: Array<Unit> = [
    {
      label: 'Pixels',
      unit: 'PX',
      value: px,
      onChange: (val) => {
        pxHandler(val || 0)
      },
    },
    {
      label: 'Percents',
      unit: '%',
      value: percent,
      onChange: (val) => {
        percentHandler(val || 0)
      },
    },
    {
      label: 'Points',
      unit: 'PT',
      value: pt,
      onChange: (val) => {
        ptHandler(val || 0)
      },
    },
    {
      label: 'EM',
      unit: 'EM',
      value: em,
      onChange: (val) => {
        emHandler(val || 0)
      },
    },
    {
      label: 'REM',
      unit: 'REM',
      value: rem,
      onChange: (val) => {
        remHandler(val || 0)
      },
    },
  ]

  return (
    <>
      <PageTitle title='CSS Unit converter' />
      <Container size={360}>
        <Stack>
          {units.map(({ label, unit, value, onChange }) => {
            const decimalPoint = value.toString().split('.')

            return (
              <Group key={unit} align='flex-end' noWrap>
                <NumberInput
                  value={value}
                  label={label}
                  onChange={onChange}
                  size='lg'
                  precision={decimalPoint[1] ? decimalPoint[1].length : 0}
                  type='number'
                />
                <Text mb={12}>{unit}</Text>
              </Group>
            )
          })}
        </Stack>
      </Container>
    </>
  )
}
