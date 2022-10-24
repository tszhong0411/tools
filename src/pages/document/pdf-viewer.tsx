import {
  Button,
  Container,
  createStyles,
  Group,
  Stack,
  Text,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core'
import { Dropzone, DropzoneProps, MIME_TYPES } from '@mantine/dropzone'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { IconFile } from '@tabler/icons'
import React from 'react'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { isValidUrl } from '@/lib/isValidUrl'

import PageTitle from '@/components/PageTitle'

const useStyles = createStyles(() => ({
  wrapper: {
    margin: '80px 0',
    height: '1000px',
  },
}))

export default function CSSUnitConverter() {
  const [url, setUrl] = React.useState('')
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { classes } = useStyles()

  const form = useForm({
    initialValues: {
      url: '',
    },

    validate: {
      url: (url) => (isValidUrl(url) ? null : 'Not valid URL'),
    },
  })

  const onDropHandler: DropzoneProps['onDrop'] = (files) =>
    setUrl(URL.createObjectURL(files[0]))

  const onRejectHandler: DropzoneProps['onReject'] = (files) => {
    files.forEach((file) => {
      file.errors.forEach((error) => {
        if (error.code === 'file-invalid-type') {
          showNotification({
            title: 'Error',
            message: 'This format is not supported',
          })
        }
      })
    })
  }

  const submitHandler = async (url: string) => setUrl(`/api/pdf?url=${url}`)

  return (
    <>
      <PageTitle title='PDF Viewer' />
      <Container size='md'>
        <Stack>
          <form onSubmit={form.onSubmit((values) => submitHandler(values.url))}>
            <TextInput
              size='md'
              label='URL'
              rightSection={
                <Button sx={{ height: 30 }} type='submit'>
                  Open
                </Button>
              }
              rightSectionWidth={100}
              {...form.getInputProps('url')}
            />
          </form>
          <Text align='center'>OR</Text>
          <Dropzone
            onDrop={onDropHandler}
            onReject={onRejectHandler}
            accept={[MIME_TYPES.pdf]}
          >
            <Group position='center' spacing='xl'>
              <IconFile size={50} stroke={1.5} />
              <div>
                <Text size='xl'>Drag PDF here or click to select file</Text>
              </div>
            </Group>
          </Dropzone>
        </Stack>
        {url && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'>
            <div className={classes.wrapper}>
              <Viewer
                fileUrl={url}
                theme={{
                  theme: dark ? 'dark' : 'white',
                }}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        )}
      </Container>
    </>
  )
}
