'use client'

import { colord, extend, getFormat } from 'colord'
import a11yPlugin from 'colord/plugins/a11y'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import namesPlugin from 'colord/plugins/names'
import React from 'react'
import { RgbaStringColorPicker } from 'react-colorful'
import { useClickAway } from 'react-use'

import Container from '@/components/Container'
import Title from '@/components/Title'

extend([hwbPlugin, cmykPlugin, lchPlugin, namesPlugin, a11yPlugin])

type List = {
  label: string
  value: string
}

type Lists = {
  label: string
  data: List[]
}

type ItemProps = {
  list: List[]
}

const ColorConverter = () => {
  const [value, setValue] = React.useState('rgba(255, 255, 255, 1)')
  const [opened, setOpened] = React.useState(false)
  const popover = React.useRef(null)

  useClickAway(popover, () => {
    setOpened(false)
  })

  const lists: Lists[] = [
    {
      label: '轉換',
      data: [
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
          label: 'CSS 關鍵字',
          value: colord(value).toName({ closest: true }) || '未知',
        },
      ],
    },
    {
      label: '分析',
      data: [
        {
          label: '是 CSS 有效值？',
          value: colord(value).isValid() ? 'Yes' : 'No',
        },
        {
          label: '格式',
          value: getFormat(value) || '-',
        },
        {
          label: 'Hue (0-359)',
          value: `${colord(value).hue()} deg`,
        },
        {
          label: '亮度 (brightness)',
          value: `${Math.floor(colord(value).brightness() * 100)}% (${
            colord(value).isDark() ? 'Dark' : 'Light'
          })`,
        },
        {
          label: '亮度 (luminance)',
          value: `${Math.floor(colord(value).luminance() * 100)}%`,
        },
        {
          label: '對比白色',
          value: `${colord(value).contrast()}:1`,
        },
      ],
    },
  ]

  return (
    <Container className='flex justify-center flex-col items-center'>
      <Title title='顏色轉換器' />

      {/* 顏色輸入器 */}
      <div className='relative my-8 flex gap-4 items-center justify-between w-full max-w-[250px]'>
        <div
          className='w-7 h-7 rounded-lg cursor-pointer'
          style={{ backgroundColor: value }}
          onClick={() => setOpened(true)}
        />
        <div>{value}</div>

        {opened && (
          <div
            className='absolute top-[calc(100%+12px)] left-0 rounded-lg'
            ref={popover}
          >
            <RgbaStringColorPicker color={value} onChange={setValue} />
          </div>
        )}
      </div>

      {/* 顏色 */}
      <div className='grid sm:grid-cols-2 w-full gap-4 my-12'>
        {lists.map((list, i) => {
          const { label, data } = list

          return (
            <>
              <div key={i} className='border border-accent-2 rounded-lg p-4'>
                <div className='text-3xl font-bold text-center mb-8'>
                  {label}
                </div>
                <Items list={data} />
              </div>
            </>
          )
        })}
      </div>
    </Container>
  )
}

const Items = (props: ItemProps) => {
  const { list } = props

  return (
    <>
      {list.map((item, i) => {
        const { label, value } = item

        return (
          <div className='border-b-4 border-accent-2 mb-4' key={i}>
            <div className='font-medium text-sm'>{label}</div>
            <div className='my-2 font-bold text-lg'>{value}</div>
          </div>
        )
      })}
    </>
  )
}

export default ColorConverter
