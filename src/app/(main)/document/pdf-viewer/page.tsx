'use client'

import { LocalizationMap, Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import zh_TW from '@react-pdf-viewer/locales/lib/zh_TW.json'
import { IconFile } from '@tabler/icons-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { getExtension } from '@/lib/get-extension'
import { useTheme } from '@/lib/next-themes'

import Container from '@/components/Container'
import Title from '@/components/Title'

const PDFViewer = () => {
  const [mounted, setMounted] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const onDrop = (files: File[]) => setUrl(URL.createObjectURL(files[0]))
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const { resolvedTheme } = useTheme()

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': [],
    },
    onDropRejected: (files) => {
      files.forEach((file) => {
        toast.error(`${getExtension(file.file.name)} 格式不支援`)
      })
    },
  })

  React.useEffect(() => setMounted(true), [])

  return (
    <Container className='max-w-5xl flex justify-center flex-col items-center'>
      <Title title='PDF 閱讀器' />

      <div className='my-12 w-full'>
        {/* 拖曳區 */}
        <div
          {...getRootProps()}
          className='border-2 border-dashed border-accent-4 px-4 py-6 rounded-lg my-12 cursor-pointer flex flex-col items-center gap-2 hover:bg-accent-1 transition-colors duration-300'
        >
          <IconFile size={48} />
          <input {...getInputProps()} />
          <p>將 PDF 拖曳到此處，或單擊以選擇檔案</p>
        </div>

        {mounted && url && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js'>
            <div className='my-20 h-[1000px]'>
              <Viewer
                fileUrl={url}
                theme={{
                  theme: resolvedTheme,
                }}
                localization={zh_TW as unknown as LocalizationMap}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        )}
      </div>
    </Container>
  )
}

export default PDFViewer
