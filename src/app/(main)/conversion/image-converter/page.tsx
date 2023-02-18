'use client'

import { IconPhoto, IconX } from '@tabler/icons-react'
import FileSaver from 'file-saver'
import { filesize } from 'filesize'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

import { base64ToSvg } from '@/lib/base64-to-svg'
import { getExtension } from '@/lib/get-extension'
import { imageToBase64 } from '@/lib/image-to-base64'
import { svgToBase64 } from '@/lib/svg-to-base64'
import { truncateFilename } from '@/lib/truncate-filename'

import Container from '@/components/Container'
import Select from '@/components/Select'
import Title from '@/components/Title'

type ImageFile = {
  file: File
  id: string
  name: string
  extension: string
  size: string
  to?: Option
  result?: string
}

type Option = (typeof options)[number]

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
      })
    )
  }

  const setExtension = (id: string, option: Option) => {
    setFiles((prev) =>
      prev.map((file) => {
        if (file.id === id) return { ...file, to: option }

        return file
      })
    )
  }

  const clearAll = () => setFiles([])

  // Some bad code here 💩
  const convertAll = async () => {
    files.forEach((imageFile) => {
      const { extension, to } = imageFile

      if (to) {
        const conversion =
          to.value === 'svg'
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
            })
          )
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
    <Container className='flex justify-center flex-col items-center'>
      <Title title='圖片格式轉換器' />

      {/* 拖曳區 */}
      <div
        {...getRootProps()}
        className='border-2 border-dashed border-accent-4 px-4 py-6 rounded-lg my-12 cursor-pointer flex flex-col items-center gap-2 hover:bg-accent-1 transition-colors duration-300'
      >
        <IconPhoto size={48} />
        <input {...getInputProps()} />
        <p>將一些圖像拖曳到此處，或單擊以選擇檔案</p>
      </div>

      {/* 檔案 */}
      {files.length !== 0 && (
        <div className='w-full'>
          {/* 控制 */}
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:justify-between'>
            <div className='flex items-center gap-2.5 justify-start'>
              轉換全部到
              <Select onChange={setAllExtensions} options={options} />
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <button
                className='rounded-lg py-2 px-4 transition-colors duration-300 bg-theme-9 hover:bg-theme-10 text-white'
                onClick={clearAll}
              >
                清除全部
              </button>
              <button
                className='rounded-lg py-2 px-4 transition-colors duration-300 bg-theme-1 border border-theme-7 hover:border-theme-8 text-theme-11 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:border-gray-900 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-100'
                disabled={
                  files.filter((file) => file.to !== undefined).length !==
                  files.length
                }
                onClick={convertAll}
              >
                轉換全部
              </button>
            </div>
          </div>

          {/* 檔案列表 */}
          <div className='space-y-4 my-8'>
            {files.map((file) => {
              const { name, size, extension, id, result, to } = file

              return (
                <div
                  key={id}
                  className='border border-accent-2 p-4 rounded-lg flex flex-col gap-4'
                >
                  {/* 檔案名稱 */}
                  <div>{name}</div>

                  <div className='flex justify-between sm:items-center flex-col sm:flex-row'>
                    {/* 檔案大小 */}
                    <div className='text-sm text-accent-7'>{size}</div>

                    {/* 轉換到 / 下載按鈕 */}
                    <div className='flex items-center justify-between mt-4 sm:mt-0 sm:justify-center gap-2'>
                      {result ? (
                        <button
                          className='bg-green-500 rounded-lg px-4 py-2 text-white'
                          onClick={() => to && download(result, name, to.value)}
                        >
                          下載
                        </button>
                      ) : (
                        <div className='flex items-center gap-2'>
                          {extension} to{' '}
                          <Select
                            options={options}
                            value={to}
                            onChange={(option: Option) =>
                              setExtension(id, option)
                            }
                          />
                        </div>
                      )}

                      {/* 刪除按鈕 */}
                      <button
                        className='p-1 rounded-lg hover:bg-accent-2 transition-colors duration-300'
                        onClick={() => deleteHandler(id)}
                      >
                        <IconX />
                      </button>
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
