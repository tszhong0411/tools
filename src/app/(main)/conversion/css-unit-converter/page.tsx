'use client'

import React from 'react'

import Container from '@/components/Container'
import Title from '@/components/Title'

type Units = 'PX' | 'PC' | 'PT' | 'EM' | 'REM'
type Values = {
  [key in Units]: number
}

type InputProps = {
  unit: string
} & React.ComponentPropsWithoutRef<'input'>

const CSSUnitConverter = () => {
  const [values, setValues] = React.useState<Values>({
    PX: 16,
    PC: 100,
    PT: 12,
    EM: 1,
    REM: 1,
  })

  const changeHandler = (value: number, type: Units) => {
    if (type === 'EM' || type === 'REM') {
      setValues({
        EM: value,
        REM: value,
        PX: value * 16,
        PC: value * 100,
        PT: value * 12,
      })
      return
    }

    if (type === 'PX') {
      setValues({
        PX: value,
        EM: value / 16,
        REM: value / 16,
        PC: (value / 16) * 100,
        PT: (value / 16) * 12,
      })
      return
    }

    if (type === 'PC') {
      setValues({
        PC: value,
        EM: value / 100,
        PX: value / 100,
        REM: (value / 100) * 16,
        PT: (value / 100) * 12,
      })
      return
    }

    if (type === 'PT') {
      setValues({
        PT: value,
        EM: value / 12,
        REM: value / 12,
        PX: (value / 12) * 16,
        PC: (value / 12) * 100,
      })
      return
    }
  }

  return (
    <Container className='flex max-w-xl flex-col items-center justify-center'>
      <Title title='CSS Unit Converter' />

      <div className='my-12 space-y-4'>
        <Input
          unit='PX'
          value={values.PX}
          onChange={(e) => changeHandler(Number(e.currentTarget.value), 'PX')}
        />
        <Input
          unit='%'
          value={values.PC}
          onChange={(e) => changeHandler(Number(e.currentTarget.value), 'PC')}
        />
        <Input
          unit='PT'
          value={values.PT}
          onChange={(e) => changeHandler(Number(e.currentTarget.value), 'PT')}
        />
        <Input
          unit='EM'
          value={values.EM}
          onChange={(e) => changeHandler(Number(e.currentTarget.value), 'EM')}
        />
        <Input
          unit='REM'
          value={values.REM}
          onChange={(e) => changeHandler(Number(e.currentTarget.value), 'REM')}
        />
      </div>
    </Container>
  )
}

const Input = (props: InputProps) => {
  const { unit, ...rest } = props

  return (
    <div className='relative'>
      <input
        className='appearance-none rounded-lg border border-accent-2 bg-transparent px-4 py-4 pr-14 outline-none transition-colors duration-300 focus:border-accent-5'
        type='number'
        {...rest}
      />
      <div className='absolute right-3 top-1/2 -translate-y-1/2 select-none'>
        {unit}
      </div>
    </div>
  )
}

export default CSSUnitConverter
