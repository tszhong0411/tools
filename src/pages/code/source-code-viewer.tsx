import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  LoadingOverlay,
  Paper,
  Stack,
  TextInput,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useClipboard } from '@mantine/hooks'
import Editor, { OnMount } from '@monaco-editor/react'
import { IconLink } from '@tabler/icons'
import { IconCopy, IconTextWrap, IconTrashX } from '@tabler/icons'
import axios from 'axios'
import React from 'react'

import { isValidUrl } from '@/lib/isValidUrl'

import PageTitle from '@/components/PageTitle'

const useStyles = createStyles(() => ({
  header: {
    height: 45,
    display: 'flex',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  controls: {
    '& > span': {
      width: 12,
      height: 12,
      borderRadius: '50%',
    },

    '& > span:nth-of-type(1)': {
      background: '#fc625d',
    },

    '& > span:nth-of-type(2)': {
      background: '#fdbc40',
    },

    '& > span:nth-of-type(3)': {
      background: '#35cd4b',
    },
  },
}))

export default function SourceCodeViewer() {
  const editorRef = React.useRef(null)
  const [code, setCode] = React.useState('')
  const [visible, setVisible] = React.useState(false)
  const { classes } = useStyles()
  const clipboard = useClipboard()
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const form = useForm({
    initialValues: {
      url: '',
    },

    validate: {
      url: (url) => (isValidUrl(url) ? null : 'Not valid URL'),
    },
  })

  const onMountHandler: OnMount = (editor) => {
    editorRef.current = editor
  }

  const submitHandler = async (url: string) => {
    setVisible(true)

    const { data } = await axios.post('/api/get-source-code', null, {
      params: {
        url,
      },
    })

    setCode(data)
    setVisible(false)
  }

  return (
    <>
      <PageTitle title='Source code viewer' />
      <Container size='lg'>
        <form onSubmit={form.onSubmit((values) => submitHandler(values.url))}>
          <TextInput
            required
            placeholder='https://honghong.me'
            icon={<IconLink size={24} />}
            label='URL'
            styles={{
              input: {
                height: 40,
              },
            }}
            rightSection={
              <Button
                type='submit'
                sx={() => ({
                  height: 30,
                })}
              >
                View
              </Button>
            }
            rightSectionWidth={96}
            type='url'
            {...form.getInputProps('url')}
          />
        </form>
        <Stack
          spacing={0}
          my={60}
          sx={{
            position: 'relative',
          }}
        >
          <Paper className={classes.header} px={16} py={8} withBorder>
            <Group position='apart' sx={{ width: '100%' }}>
              <Group className={classes.controls} spacing='sm'>
                <span></span>
                <span></span>
                <span></span>
              </Group>
              <Group>
                <Tooltip
                  label='Clear'
                  position='top'
                  transition='fade'
                  openDelay={500}
                >
                  <ActionIcon onClick={() => setCode('')}>
                    <IconTrashX size={16} />
                  </ActionIcon>
                </Tooltip>
                <Tooltip
                  label='Format'
                  position='top'
                  transition='fade'
                  openDelay={500}
                >
                  <ActionIcon
                    onClick={
                      () =>
                        editorRef.current._actions[
                          'editor.action.formatDocument'
                        ]._run() // ! I am not sure whether it is the correct way to format the code.
                    }
                  >
                    <IconTextWrap size={16} />
                  </ActionIcon>
                </Tooltip>
                <Tooltip
                  label={clipboard.copied ? 'Copied' : 'Copy to clipboard'}
                  position='top'
                  transition='fade'
                  color={clipboard.copied ? 'green' : 'black'}
                  openDelay={500}
                >
                  <ActionIcon onClick={() => clipboard.copy(code)}>
                    <IconCopy size={16} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
          </Paper>
          <Editor
            height='800px'
            defaultLanguage='html'
            theme={dark ? 'vs-dark' : 'light'}
            value={code}
            onChange={setCode}
            onMount={onMountHandler}
            options={{
              minimap: {
                enabled: false,
              },
            }}
          />
          <LoadingOverlay visible={visible} />
        </Stack>
      </Container>
    </>
  )
}
