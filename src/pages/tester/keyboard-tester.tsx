import { Box, Center, createStyles, Group, Stack, Sx } from '@mantine/core'
import { useOs, useWindowEvent } from '@mantine/hooks'
import React from 'react'

import PageTitle from '@/components/PageTitle'

const useStyles = createStyles((theme) => ({
  key: {
    width: 32,
    height: 35,
    backgroundColor: '#333',
    color: theme.colors.gray[1],
    userSelect: 'none',
    borderRadius: '4px',
    boxShadow: '0 4px 0 5px #222',
    fontSize: 14,
  },

  active: {
    backgroundColor: theme.colorScheme === 'dark' ? '#025c02' : '#008000',
  },
}))

type KeyType = {
  keyName: string
  id?: number
  active?: boolean
  sx?: Sx
  code?: string
}

export default function KeyboardTester() {
  const [mounted, setMounted] = React.useState(false)
  const os = useOs()
  const isMacos = os === 'macos'

  const initialLayout: Array<KeyType> = [
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
      sx: {
        width: 78,
      },
    },
    {
      id: 9,
      keyName: 'Tab',
      sx: {
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
      sx: {
        width: 42,
      },
    },
    {
      id: 20,
      keyName: 'CAPS',
      sx: {
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
      sx: {
        width: 80,
      },
    },
    {
      keyName: 'Shift',
      code: 'ShiftLeft',
      sx: {
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
      sx: {
        width: 100,
      },
    },
    {
      keyName: 'CTRL',
      code: 'ControlLeft',
      sx: {
        width: 52,
      },
    },
    {
      id: 91,
      keyName: isMacos ? '⌘' : '⊞',
      sx: {
        width: 40,
      },
    },
    {
      keyName: isMacos ? 'Command' : 'Alt',
      code: 'AltLeft',
      sx: {
        width: 40,
        ...(isMacos && {
          fontSize: 9,
        }),
      },
    },
    {
      id: 32,
      keyName: 'Space',
      sx: {
        width: 316,
      },
    },
    {
      keyName: isMacos ? 'Command' : 'Alt',
      code: 'AltRight',
      sx: {
        width: 40,
        ...(isMacos && {
          fontSize: 9,
        }),
      },
    },
    {
      id: 93,
      keyName: isMacos ? '⌘' : '▤',
      sx: {
        width: 40,
      },
    },
    {
      keyName: 'CTRL',
      code: 'ControlRight',
      sx: {
        width: 52,
      },
    },
    {
      id: 44,
      keyName: 'PRTSC',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 145,
      keyName: 'SCRLK',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 19,
      keyName: 'PAUSE',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 45,
      keyName: 'INS',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 36,
      keyName: 'HOME',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 33,
      keyName: 'PGUP',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 46,
      keyName: 'DEL',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 35,
      keyName: 'END',
      sx: {
        fontSize: 10,
      },
    },
    {
      id: 34,
      keyName: 'PGDN',
      sx: {
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
      sx: {
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
      sx: {
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
      sx: {
        height: 86,
      },
    },
    {
      keyName: 'Enter',
      code: 'NumpadEnter',
      sx: {
        height: 86,
        fontSize: 12,
      },
    },
  ]

  const { classes, cx } = useStyles()
  const [layout, setLayout] = React.useState(initialLayout)

  const handler = (e: KeyboardEvent) => {
    const newArray = [...layout]
    const key = newArray.find(
      (key) => key.id === e.keyCode || key.code === e.code
    )

    if (key) {
      e.preventDefault()
      key.active = true

      setLayout(newArray)
    }
  }

  useWindowEvent('keydown', handler)
  useWindowEvent('keyup', (e) => {
    if (e.keyCode === 44) handler(e)
  })

  const Key = ({ item }: { item: KeyType }) => {
    const { keyName, active = false, sx } = item

    return (
      <Center className={cx(classes.key, { [classes.active]: active })} sx={sx}>
        {keyName}
      </Center>
    )
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <PageTitle title='Keyboard tester' />
      {mounted && (
        <Center>
          <Group noWrap>
            <Stack>
              <Group noWrap spacing={45}>
                <Group noWrap>
                  {layout.slice(0, 1).map((key, i) => (
                    <Key key={i} item={key} />
                  ))}
                </Group>
                <Group noWrap spacing={14}>
                  {layout.slice(1, 5).map((key, i) => (
                    <Key key={i} item={key} />
                  ))}
                </Group>
                <Group noWrap spacing={14}>
                  {layout.slice(5, 9).map((key, i) => (
                    <Key key={i} item={key} />
                  ))}
                </Group>
                <Group noWrap spacing={14}>
                  {layout.slice(9, 13).map((key, i) => (
                    <Key key={i} item={key} />
                  ))}
                </Group>
              </Group>
              <Group noWrap spacing={14}>
                {layout.slice(13, 27).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(27, 41).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(41, 54).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(54, 66).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(66, 73).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
            </Stack>
            <Stack>
              <Group noWrap>
                {layout.slice(73, 76).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(76, 79).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(79, 82).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Box sx={{ height: 35 }} />
              <Group noWrap>
                <Box sx={{ width: 32 }} />
                {layout.slice(82, 83).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
                <Box sx={{ width: 32 }} />
              </Group>
              <Group noWrap>
                {layout.slice(83, 86).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
            </Stack>
            <Stack>
              <Box sx={{ height: 35 }} />
              <Group noWrap>
                {layout.slice(86, 89).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(90, 93).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(93, 96).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(96, 99).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
              <Group noWrap>
                {layout.slice(99, 101).map((key, i) => (
                  <Key key={i} item={key} />
                ))}
              </Group>
            </Stack>
            <Stack>
              <Box sx={{ height: 35 }} />

              {layout.slice(89, 90).map((key, i) => (
                <Key key={i} item={key} />
              ))}
              {layout.slice(101, 102).map((key, i) => (
                <Key key={i} item={key} />
              ))}
              {layout.slice(102, 103).map((key, i) => (
                <Key key={i} item={key} />
              ))}
            </Stack>
          </Group>
        </Center>
      )}
    </>
  )
}
