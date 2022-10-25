import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  Paper,
  Select,
  SelectItem,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone'
import { randomId } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'
import { IconPhoto, IconX } from '@tabler/icons'
import axios from 'axios'
import FileSaver from 'file-saver'
import { filesize } from 'filesize'
import React from 'react'

import { imageToBase64 } from '@/lib/imageToBase64'
import { svgToBase64 } from '@/lib/svgToBase64'

import PageTitle from '@/components/PageTitle'

export type File = {
  originalFile: FileWithPath
  id: string
  name: string
  extension: string
  size: string
  to?: string
  result?: string
}

type FileItemProps = {
  file: File
  onDelete: () => void
}

const useStyles = createStyles((theme) => ({
  name: {
    flexGrow: 1,
    wordBreak: 'break-all',
  },

  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
    },
  },

  controls: {
    justifyContent: 'space-between',
    width: '100%',
  },
}))

const data: Array<SelectItem> = [
  { value: 'jpg', label: 'JPG' },
  { value: 'png', label: 'PNG' },
  { value: 'gif', label: 'GIF' },
]

export default function ImageConverter() {
  const [files, setFiles] = React.useState<Array<File>>([])
  const { classes } = useStyles()

  const onDropHandler: DropzoneProps['onDrop'] = (files) =>
    files.forEach((file) => {
      const name =
        file.name.length > 40
          ? file.name.substring(0, 20) +
            '...' +
            file.name.substring(file.name.length - 10, file.name.length)
          : file.name

      const newFile: File = {
        originalFile: file,
        id: randomId(),
        name,
        size: filesize(file.size, { base: 2, standard: 'jedec' }).toString(),
        extension: file.name.split('.').pop().toUpperCase(),
      }
      setFiles((state) => [...state, newFile])
    })

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

  const clearAll = () => setFiles([])

  const convertAll = () => {
    files.forEach((file) => {
      const { extension } = file

      if (
        extension === 'JPG' ||
        extension === 'PNG' ||
        extension === 'GIF' ||
        extension === 'JPEG'
      ) {
        return imageToBase64(file.originalFile, (result) =>
          setFiles((state) =>
            state.map((item) => {
              if (item.id === file.id) return { ...item, result }
              return item
            })
          )
        )
      }

      if (extension === 'SVG') {
        return svgToBase64(file.originalFile, (result) =>
          setFiles((state) =>
            state.map((item) => {
              if (item.id === file.id) return { ...item, result }
              return item
            })
          )
        )
      }

      showNotification({
        title: 'Error',
        message: 'This format is not supported currently',
      })
    })
  }

  const FileItem = ({ file, onDelete }: FileItemProps) => {
    const { name, extension, size, to, id, result } = file

    const downloadHandler = async () => {
      const { data: blob } = await axios.get(result, {
        responseType: 'blob',
      })

      FileSaver.saveAs(
        blob,
        `${file.originalFile.name.replace(/\.[^/.]+$/, '')}.${to}`
      )
    }

    return (
      <Paper withBorder px={12} py={16}>
        <Group className={classes.container}>
          <Text className={classes.name}>{name}</Text>
          <Group className={classes.controls}>
            <Text>{size}</Text>
            <Group>
              {result && (
                <Button color='green' onClick={downloadHandler}>
                  Download
                </Button>
              )}
              {!result && (
                <>
                  <Text>{extension} to</Text>
                  <Select
                    styles={{
                      root: {
                        maxWidth: 100,
                      },
                    }}
                    data={data}
                    onChange={(value) =>
                      setFiles((state) =>
                        state.map((item) => {
                          if (item.id === id) return { ...item, to: value }
                          return item
                        })
                      )
                    }
                    value={to}
                  />
                </>
              )}
              <Tooltip label='Delete' openDelay={500}>
                <ActionIcon onClick={onDelete}>
                  <IconX size={18} />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Group>
      </Paper>
    )
  }

  return (
    <>
      <PageTitle title='Image converter' />
      <Container>
        <Dropzone
          onDrop={onDropHandler}
          onReject={onRejectHandler}
          accept={IMAGE_MIME_TYPE}
        >
          <Group position='center' spacing='xl'>
            <IconPhoto size={50} stroke={1.5} />
            <div>
              <Text size='xl'>Drag images here or click to select files</Text>
              <Text size='sm' color='dimmed' mt={7}>
                Attach as many files as you like.
              </Text>
            </div>
          </Group>
        </Dropzone>
        {files.length !== 0 && (
          <Group position='apart' pt={32} pb={12}>
            <Group>
              <Text>All convert to </Text>
              <Select
                data={data}
                onChange={(value) =>
                  setFiles((state) =>
                    state.map((item) => {
                      item.to = value
                      return item
                    })
                  )
                }
              />
            </Group>
            <Group>
              <Button variant='light' onClick={clearAll}>
                Clear All
              </Button>
              <Button
                variant='light'
                onClick={convertAll}
                disabled={
                  files.filter((file) => file.to !== undefined).length !==
                  files.length
                }
              >
                Convert All
              </Button>
            </Group>
          </Group>
        )}
        <Stack>
          {files.map((file, i) => (
            <FileItem
              key={i}
              file={file}
              onDelete={() =>
                setFiles((state) => state.filter((item) => item.id !== file.id))
              }
            />
          ))}
        </Stack>
      </Container>
    </>
  )
}
