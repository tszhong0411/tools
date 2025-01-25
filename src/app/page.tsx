'use client'

import { Input } from '@tszhong0411/ui'
import {
  ArrowRightLeftIcon,
  FileTextIcon,
  ImageIcon,
  KeyboardIcon,
  KeyIcon,
  type LucideIcon,
  PipetteIcon,
  TextIcon
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import Hero from '@/components/hero'

type CardProps = {
  tools: Tool[]
  title: string
}

type Tool = {
  label: string
  link: string
  keywords: string[]
  color: string
  icon: LucideIcon
}

const TOOLS = [
  {
    label: 'Conversion',
    links: [
      {
        label: 'CSS Unit Converter',
        link: '/conversion/css-unit-converter',
        keywords: ['Conversion', 'CSS'],
        color: '#fa5252',
        icon: ArrowRightLeftIcon
      },
      {
        label: 'Color Converter',
        link: '/conversion/color-converter',
        keywords: ['Conversion', 'Color', 'CSS'],
        color: '#fd7e14',
        icon: PipetteIcon
      },
      {
        label: 'Image Converter',
        link: '/conversion/image-converter',
        keywords: ['Conversion', 'Image', 'Format', 'Extension'],
        color: '#40c057',
        icon: ImageIcon
      }
    ]
  },
  {
    label: 'Document',
    links: [
      {
        label: 'PDF Viewer',
        link: '/document/pdf-viewer',
        keywords: ['PDF', 'Viewer', 'Document', 'File', 'Document'],
        color: '#15aabf',
        icon: FileTextIcon
      }
    ]
  },
  {
    label: 'Calculation',
    links: [
      {
        label: 'Word Counter',
        link: '/calculation/word-counter',
        keywords: ['Word', 'Counter', 'Calculation', 'Text'],
        color: '#4c6ef5',
        icon: TextIcon
      }
    ]
  },
  {
    label: 'Testing',
    links: [
      {
        label: 'Keyboard Tester',
        link: '/tester/keyboard-tester',
        keywords: ['Tester', 'Keyboard', 'Test'],
        color: '#be4bdb',
        icon: KeyboardIcon
      }
    ]
  },
  {
    label: 'Generator',
    links: [
      {
        label: 'Password Generator',
        link: '/generator/password-generator',
        keywords: ['Generator', 'Password', 'Random'],
        color: '#f783ac',
        icon: KeyIcon
      }
    ]
  }
]

const HomePage = () => {
  const [value, setValue] = React.useState('')

  const filter = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some((keyword) => keyword.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      <Hero />
      <div className='flex flex-col items-start'>
        <Input
          type='text'
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
          }}
          placeholder='Search'
          className='w-full'
        />
        <div id='get-started' className='my-12 flex w-full scroll-mt-20 flex-col gap-6'>
          {value
            ? TOOLS.filter((t) => t.links.some((tool) => filter(tool))).map((t) => {
                const { label, links } = t
                const filtered = links.filter((tool) => filter(tool))

                return <Card key={label} tools={filtered} title={label} />
              })
            : TOOLS.map((tool) => {
                const { label, links } = tool

                return <Card key={label} tools={links} title={label} />
              })}
        </div>
      </div>
    </div>
  )
}

const Card = (props: CardProps) => {
  const { tools, title } = props

  return (
    <div className='w-full rounded-lg border p-4'>
      <div>{title}</div>
      <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {tools.map((tool) => (
          <Item key={tool.label} {...tool} />
        ))}
      </div>
    </div>
  )
}

const Item = (props: Tool) => {
  const { color, icon, label, link } = props
  const Icon = icon

  return (
    <Link
      href={link}
      className='flex flex-col items-center justify-center rounded-lg bg-accent p-4 text-center transition-colors duration-300 hover:bg-accent-highlight'
    >
      <Icon color={color} size={32} />
      <div className='mt-1.5'>{label}</div>
    </Link>
  )
}

export default HomePage
