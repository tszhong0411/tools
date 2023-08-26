'use client'

import FileSaver from 'file-saver'
import { filesize } from 'filesize'
import { ImageIcon, XIcon } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

import { base64ToSvg } from '@/lib/base64-to-svg'
import { getExtension } from '@/lib/get-extension'
import { imageToBase64 } from '@/lib/image-to-base64'
import { svgToBase64 } from '@/lib/svg-to-base64'
import { truncateFilename } from '@/lib/truncate-filename'

import Container from '@/components/container'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ImageFile = {
  file: File
  id: string
  name: string
  extension: string
  size: string
  to?: Option
  result?: string
}

type Option = (typeof options)[number]['value']

const options = [
  { value: 'jpg', label: 'JPG' },
  { value: 'jpeg', label: 'JPEG' },
  { value: 'png', label: 'PNG' },
  { value: 'gif', label: 'GIF' },
  { value: 'webp', label: 'WEBP' },
  { value: 'svg', label: 'SVG' },
  { value: 'ico', label: 'ICO' },
] as const

const ImageConverter = () => {
  const [files, setFiles] = React.useState<ImageFile[]>([])

  const onDrop = React.useCallback((files: File[]) => {
    files.forEach((file) => {
      const name = truncateFilename(file.name)
      const newFile: ImageFile = {
        file,
        id: uuid(),
        name,
        size: filesize(file.size, {
          base: 2,
          standard: 'jedec',
        }).toString(),
        extension: getExtension(file.name).toUpperCase(),
      }

      setFiles((prev) => [...prev, newFile])
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': options.map((option) => `.${option.value}`),
    },
    onDropRejected: (files) => {
      files.forEach((file) => {
        toast.error(`${getExtension(file.file.name)} is not supported`)
      })
    },
  })

  const setAllExtensions = (options: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        file.to = options
        return file
      }),
    )
  }

  const setExtension = (id: string, option: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        if (file.id === id) return { ...file, to: option }

        return file
      }),
    )
  }

  const clearAll = () => setFiles([])

  // Some bad code here 💩
  const convertAll = async () => {
    files.forEach((imageFile) => {
      const { extension, to } = imageFile

      if (to) {
        const conversion =
          to === 'svg'
            ? base64ToSvg
            : extension === 'SVG'
            ? svgToBase64
            : imageToBase64

        conversion(imageFile.file, (result) =>
          setFiles((prev) =>
            prev.map((file) => {
              if (file.id === imageFile.id)
                return {
                  ...file,
                  result,
                }
              return file
            }),
          ),
        )
      }
    })
  }

  const download = async (result: string, filename: string, to: string) => {
    const blob = await (await fetch(result)).blob()
    FileSaver.saveAs(blob, `${filename.replace(/\.[^/.]+$/, '')}.${to}`)
  }

  const deleteHandler = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  return (
    <Container className='flex flex-col items-center justify-center'>
      <Title title='Image Converter' />

      <div
        {...getRootProps()}
        className='my-12 flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors duration-300 hover:bg-muted'
      >
        <ImageIcon size={48} />
        <input {...getInputProps()} />
        <p>Drag some images here, or click to select files.</p>
      </div>

      {files.length !== 0 && (
        <div className='w-full'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:justify-between'>
            <div className='flex items-center justify-start gap-2.5'>
              Convert all to
              <Select
                onValueChange={(option: Option) => setAllExtensions(option)}
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Button onClick={clearAll} type='button'>
                Clear all
              </Button>
              <Button
                disabled={
                  files.filter((file) => file.to !== undefined).length !==
                  files.length
                }
                onClick={convertAll}
                type='button'
              >
                Convert all
              </Button>
            </div>
          </div>

          <div className='my-8 space-y-4'>
            {files.map((file) => {
              const { name, size, extension, id, result, to } = file

              return (
                <div
                  key={id}
                  className='flex flex-col gap-4 rounded-lg border p-4'
                >
                  <div>{name}</div>

                  <div className='flex flex-col justify-between sm:flex-row sm:items-center'>
                    <div className='text-sm text-muted-foreground'>{size}</div>

                    <div className='mt-4 flex items-center justify-between gap-2 sm:mt-0 sm:justify-center'>
                      {result ? (
                        <Button
                          className='border-none bg-green-500 text-foreground hover:bg-green-600'
                          onClick={() => to && download(result, name, to)}
                          type='button'
                        >
                          Download
                        </Button>
                      ) : (
                        <div className='flex items-center gap-2'>
                          {extension} to{' '}
                          <Select
                            value={to}
                            onValueChange={(option: Option) =>
                              setExtension(id, option)
                            }
                          >
                            <SelectTrigger className='w-32'>
                              <SelectValue placeholder='Select' />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <Button
                        variant='destructive'
                        className='h-10 w-10 p-0'
                        onClick={() => deleteHandler(id)}
                        type='button'
                      >
                        <XIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Container>
  )
}

export default ImageConverter
