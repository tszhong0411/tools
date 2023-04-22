import {
  Icon,
  IconArrowsExchange,
  IconBlockquote,
  IconBulb,
  IconColorPicker,
  IconFile,
  IconFileText,
  IconKey,
  IconKeyboard,
  IconMathFunction,
  IconPhoto,
  IconTestPipe,
} from '@tabler/icons-react'
import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
  tools: {
    label: string
    icon: Icon
    links: Tool[]
  }[]
}

export type Tool = {
  label: string
  link: string
  color: string
  icon: Icon
  keywords: string[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://tools.honghong.me'
      : 'http://localhost:3000',
  title: '小康 Tools',
  name: '小康 Tools',
  keywords: ['小康', 'Tools', '小康 Tools', '小康工具', '小康工具箱'],
  titleTemplate: '- 小康 Tools',
  description: '小康 Tools - The Best Online Tools',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicon/favicon-32x32.png',
    },
  ],
  tools: [
    {
      label: 'Conversion',
      icon: IconArrowsExchange,
      links: [
        {
          label: 'CSS Unit Converter',
          link: '/conversion/css-unit-converter',
          keywords: ['Conversion', 'CSS'],
          color: '#fa5252',
          icon: IconArrowsExchange,
        },
        {
          label: 'Color Converter',
          link: '/conversion/color-converter',
          keywords: ['Conversion', 'Color'],
          color: '#fd7e14',
          icon: IconColorPicker,
        },
        {
          label: 'Image Converter',
          link: '/conversion/image-converter',
          keywords: ['Image', 'Format'],
          color: '#40c057',
          icon: IconPhoto,
        },
      ],
    },
    {
      label: 'Document',
      icon: IconFile,
      links: [
        {
          label: 'PDF Viewer',
          link: '/document/pdf-viewer',
          keywords: ['PDF', 'Viewer', 'Document'],
          color: '#15aabf',
          icon: IconFileText,
        },
      ],
    },
    {
      label: 'Calculation',
      icon: IconMathFunction,
      links: [
        {
          label: 'Word Counter',
          link: '/calculation/word-counter',
          keywords: ['Word', 'Counter'],
          color: '#4c6ef5',
          icon: IconBlockquote,
        },
      ],
    },
    {
      label: 'Testing',
      icon: IconTestPipe,
      links: [
        {
          label: 'Keyboard Tester',
          link: '/tester/keyboard-tester',
          keywords: ['Tester', 'Keyboard'],
          color: '#be4bdb',
          icon: IconKeyboard,
        },
      ],
    },
    {
      label: 'Generator',
      icon: IconBulb,
      links: [
        {
          label: 'Password Generator',
          link: '/generator/password-generator',
          keywords: ['Generator', 'Password'],
          color: '#f783ac',
          icon: IconKey,
        },
      ],
    },
  ],
}
