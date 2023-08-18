'use client'

import { cx } from '@tszhong0411/utils'
import React from 'react'
import { useEventListener } from 'usehooks-ts'

import { useOs } from '@/hooks'

import Container from '@/components/container'
import Title from '@/components/title'

type KeyType = {
  keyName: string
  id?: number
  active?: boolean
  style?: React.CSSProperties
  code?: string
}

type KeyProps = {
  item: KeyType
}

const KeyboardTester = () => {
  const [mounted, setMounted] = React.useState(false)
  const os = useOs()
  const isMacos = os === 'macos'

  const initialLayout: KeyType[] = [
    {
      id: 27,
      keyName: 'ESC',
    },
    {
      id: 112,
      keyName: 'F1',
    },
    {
      id: 113,
      keyName: 'F2',
    },
    {
      id: 114,
      keyName: 'F3',
    },
    {
      id: 115,
      keyName: 'F4',
    },
    {
      id: 116,
      keyName: 'F5',
    },
    {
      id: 117,
      keyName: 'F6',
    },
    {
      id: 118,
      keyName: 'F7',
    },
    {
      id: 119,
      keyName: 'F8',
    },
    {
      id: 120,
      keyName: 'F9',
    },
    {
      id: 121,
      keyName: 'F10',
    },
    {
      id: 122,
      keyName: 'F11',
    },
    {
      id: 123,
      keyName: 'F12',
    },
    {
      id: 192,
      keyName: '`',
    },
    {
      id: 49,
      keyName: '1',
    },
    {
      id: 50,
      keyName: '2',
    },
    {
      id: 51,
      keyName: '3',
    },
    {
      id: 52,
      keyName: '4',
    },
    {
      id: 53,
      keyName: '5',
    },
    {
      id: 54,
      keyName: '6',
    },
    {
      id: 55,
      keyName: '7',
    },
    {
      id: 56,
      keyName: '8',
    },
    {
      id: 57,
      keyName: '9',
    },
    {
      id: 48,
      keyName: '0',
    },
    {
      id: 189,
      keyName: '-',
    },
    {
      id: 187,
      keyName: '=',
    },
    {
      id: 8,
      keyName: '←',
      style: {
        width: 78,
      },
    },
    {
      id: 9,
      keyName: 'Tab',
      style: {
        width: 42,
      },
    },
    {
      id: 81,
      keyName: 'Q',
    },
    {
      id: 87,
      keyName: 'W',
    },
    {
      id: 69,
      keyName: 'E',
    },
    {
      id: 82,
      keyName: 'R',
    },
    {
      id: 84,
      keyName: 'T',
    },
    {
      id: 89,
      keyName: 'Y',
    },
    {
      id: 85,
      keyName: 'U',
    },
    {
      id: 73,
      keyName: 'I',
    },
    {
      id: 79,
      keyName: 'O',
    },
    {
      id: 80,
      keyName: 'P',
    },
    {
      id: 219,
      keyName: '[',
    },
    {
      id: 221,
      keyName: ']',
    },
    {
      id: 220,
      keyName: '\\',
      style: {
        width: 42,
      },
    },
    {
      id: 20,
      keyName: 'CAPS',
      style: {
        width: 52,
      },
    },
    {
      id: 65,
      keyName: 'A',
    },
    {
      id: 83,
      keyName: 'S',
    },
    {
      id: 68,
      keyName: 'D',
    },
    {
      id: 70,
      keyName: 'F',
    },
    {
      id: 71,
      keyName: 'G',
    },
    {
      id: 72,
      keyName: 'H',
    },
    {
      id: 74,
      keyName: 'J',
    },
    {
      id: 75,
      keyName: 'K',
    },
    {
      id: 76,
      keyName: 'L',
    },
    {
      id: 186,
      keyName: ';',
    },
    {
      id: 222,
      keyName: "'",
    },
    {
      keyName: 'Enter',
      code: 'Enter',
      style: {
        width: 80,
      },
    },
    {
      keyName: 'Shift',
      code: 'ShiftLeft',
      style: {
        width: 80,
      },
    },
    {
      id: 90,
      keyName: 'Z',
    },
    {
      id: 88,
      keyName: 'X',
    },
    {
      id: 67,
      keyName: 'C',
    },
    {
      id: 86,
      keyName: 'V',
    },
    {
      id: 66,
      keyName: 'B',
    },
    {
      id: 78,
      keyName: 'N',
    },
    {
      id: 77,
      keyName: 'M',
    },
    {
      id: 188,
      keyName: ',',
    },
    {
      id: 190,
      keyName: '.',
    },
    {
      id: 191,
      keyName: '/',
    },
    {
      keyName: 'Shift',
      code: 'ShiftRight',
      style: {
        width: 100,
      },
    },
    {
      keyName: 'CTRL',
      code: 'ControlLeft',
      style: {
        width: 52,
      },
    },
    {
      id: 91,
      keyName: isMacos ? '⌘' : '⊞',
      style: {
        width: 40,
      },
    },
    {
      keyName: isMacos ? 'Command' : 'Alt',
      code: 'AltLeft',
      style: {
        width: 40,
        ...(isMacos && {
          fontSize: 9,
        }),
      },
    },
    {
      id: 32,
      keyName: 'Space',
      style: {
        width: 316,
      },
    },
    {
      keyName: isMacos ? 'Command' : 'Alt',
      code: 'AltRight',
      style: {
        width: 40,
        ...(isMacos && {
          fontSize: 9,
        }),
      },
    },
    {
      id: 93,
      keyName: isMacos ? '⌘' : '▤',
      style: {
        width: 40,
      },
    },
    {
      keyName: 'CTRL',
      code: 'ControlRight',
      style: {
        width: 52,
      },
    },
    {
      id: 44,
      keyName: 'PRTSC',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 145,
      keyName: 'SCRLK',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 19,
      keyName: 'PAUSE',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 45,
      keyName: 'INS',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 36,
      keyName: 'HOME',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 33,
      keyName: 'PGUP',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 46,
      keyName: 'DEL',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 35,
      keyName: 'END',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 34,
      keyName: 'PGDN',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 38,
      keyName: '↑',
    },
    {
      id: 37,
      keyName: '←',
    },
    {
      id: 40,
      keyName: '↓',
    },
    {
      id: 39,
      keyName: '→',
    },
    {
      id: 144,
      keyName: 'NUM',
      style: {
        fontSize: 10,
      },
    },
    {
      id: 111,
      keyName: '/',
    },
    {
      id: 106,
      keyName: '*',
    },
    {
      id: 109,
      keyName: '-',
    },
    {
      id: 103,
      keyName: '7',
    },
    {
      id: 104,
      keyName: '8',
    },
    {
      id: 105,
      keyName: '9',
    },
    {
      id: 100,
      keyName: '4',
    },
    {
      id: 101,
      keyName: '5',
    },
    {
      id: 102,
      keyName: '6',
    },
    {
      id: 97,
      keyName: '1',
    },
    {
      id: 98,
      keyName: '2',
    },
    {
      id: 99,
      keyName: '3',
    },
    {
      id: 96,
      keyName: '0',
      style: {
        width: 80,
      },
    },
    {
      id: 110,
      keyName: '.',
    },
    {
      id: 107,
      keyName: '+',
      style: {
        height: 86,
      },
    },
    {
      keyName: 'Enter',
      code: 'NumpadEnter',
      style: {
        height: 86,
        fontSize: 12,
      },
    },
  ]

  const [layout, setLayout] = React.useState(initialLayout)

  const handler = (e: KeyboardEvent) => {
    const newArray = [...layout]
    const key = newArray.find(
      (key) => key.id === e.keyCode || key.code === e.code,
    )

    if (key) {
      e.preventDefault()
      key.active = true

      setLayout(newArray)
    }
  }

  useEventListener('keydown', handler)
  useEventListener('keyup', (e) => {
    if (e.keyCode === 44) handler(e)
  })

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const Key = (props: KeyProps) => {
    const { keyName, active = false, style } = props.item

    return (
      <div
        className={cx(
          'flex h-[35px] w-8 items-center justify-center rounded bg-[#333] text-sm text-white shadow-[rgb(34_34_34)_0px_4px_0px_5px]',
          {
            ['bg-green-800']: active,
          },
        )}
        style={style}
      >
        {keyName}
      </div>
    )
  }

  return (
    <Container className='flex max-w-xl flex-col items-center justify-center'>
      <Title title='Keyboard Tester' />

      <div className='my-12 flex items-center justify-center'>
        {mounted && (
          <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-[45px]'>
                <div className='flex gap-4'>
                  {/* ESC */}
                  {layout.slice(0, 1).map((key) => (
                    <Key key={key.id || key.code} item={key} />
                  ))}
                </div>
                <div className='flex gap-[14px]'>
                  {/* F1 - F4 */}
                  {layout.slice(1, 5).map((key) => (
                    <Key key={key.id || key.code} item={key} />
                  ))}
                </div>
                <div className='flex gap-[14px]'>
                  {/* F5 - F8 */}
                  {layout.slice(5, 9).map((key) => (
                    <Key key={key.id || key.code} item={key} />
                  ))}
                </div>
                <div className='flex gap-[14px]'>
                  {/* F9 - F12 */}
                  {layout.slice(9, 13).map((key) => (
                    <Key key={key.id || key.code} item={key} />
                  ))}
                </div>
              </div>
              <div className='flex gap-[14px]'>
                {/* ` to backspace */}
                {layout.slice(13, 27).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Tab to \ */}
                {layout.slice(27, 41).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Caps Lock to Enter */}
                {layout.slice(41, 54).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Left shift to Right shift */}
                {layout.slice(54, 66).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Left CTRL to right CTRL */}
                {layout.slice(66, 73).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
            </div>

            {/* Control section */}
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                {/* Print screen to Pause */}
                {layout.slice(73, 76).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Insert to Page up */}
                {layout.slice(76, 79).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* Delete to Page down */}
                {layout.slice(79, 82).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='h-[35px]' />
              <div className='flex gap-4'>
                <div className='h-8 w-8' />
                {/* Up arrow */}
                {layout.slice(82, 83).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
                <div className='h-8 w-8' />
              </div>
              <div className='flex gap-4'>
                {/* Left arrow to right arrow */}
                {layout.slice(83, 86).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
            </div>

            {/* Left of Number pad */}
            <div className='flex flex-col gap-4'>
              <div className='h-[35px]' />
              <div className='flex gap-4'>
                {/* Num Lock to * */}
                {layout.slice(86, 89).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* 7 to 9 */}
                {layout.slice(90, 93).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* 4 to 6 */}
                {layout.slice(93, 96).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* 1 to 3 */}
                {layout.slice(96, 99).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
              <div className='flex gap-4'>
                {/* 0 to . */}
                {layout.slice(99, 101).map((key) => (
                  <Key key={key.id || key.code} item={key} />
                ))}
              </div>
            </div>

            {/* Right of Number pad */}
            <div className='flex flex-col gap-4'>
              <div className='h-[35px]' />
              {/* - */}
              {layout.slice(89, 90).map((key) => (
                <Key key={key.id || key.code} item={key} />
              ))}
              {/* + */}
              {layout.slice(101, 102).map((key) => (
                <Key key={key.id || key.code} item={key} />
              ))}
              {/* Enter */}
              {layout.slice(102, 103).map((key) => (
                <Key key={key.id || key.code} item={key} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default KeyboardTester
