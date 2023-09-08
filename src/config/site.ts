import {
  ArrowRightLeftIcon,
  FileTextIcon,
  ImageIcon,
  KeyboardIcon,
  KeyIcon,
  LucideIcon,
  PipetteIcon,
  TextIcon,
} from 'lucide-react'
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
    links: Tool[]
  }[]
}

export type Tool = {
  label: string
  link: string
  color: string
  icon: LucideIcon
  keywords: string[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://tools.honghong.me'
      : 'http://localhost:3000',
  title: 'Tools | Hong',
  name: 'Hong',
  keywords: ['Hong', 'Tools', 'Web Tools'],
  titleTemplate: '- Tools | Hong',
  description: 'A collection of tools created by Hong.',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
  ],
  tools: [
    {
      label: 'Conversion',
      links: [
        {
          label: 'CSS Unit Converter',
          link: '/conversion/css-unit-converter',
          keywords: ['Conversion', 'CSS'],
          color: '#fa5252',
          icon: ArrowRightLeftIcon,
        },
        {
          label: 'Color Converter',
          link: '/conversion/color-converter',
          keywords: ['Conversion', 'Color'],
          color: '#fd7e14',
          icon: PipetteIcon,
        },
        {
          label: 'Image Converter',
          link: '/conversion/image-converter',
          keywords: ['Image', 'Format'],
          color: '#40c057',
          icon: ImageIcon,
        },
      ],
    },
    {
      label: 'Document',
      links: [
        {
          label: 'PDF Viewer',
          link: '/document/pdf-viewer',
          keywords: ['PDF', 'Viewer', 'Document'],
          color: '#15aabf',
          icon: FileTextIcon,
        },
      ],
    },
    {
      label: 'Calculation',
      links: [
        {
          label: 'Word Counter',
          link: '/calculation/word-counter',
          keywords: ['Word', 'Counter'],
          color: '#4c6ef5',
          icon: TextIcon,
        },
      ],
    },
    {
      label: 'Testing',
      links: [
        {
          label: 'Keyboard Tester',
          link: '/tester/keyboard-tester',
          keywords: ['Tester', 'Keyboard'],
          color: '#be4bdb',
          icon: KeyboardIcon,
        },
      ],
    },
    {
      label: 'Generator',
      links: [
        {
          label: 'Password Generator',
          link: '/generator/password-generator',
          keywords: ['Generator', 'Password'],
          color: '#f783ac',
          icon: KeyIcon,
        },
      ],
    },
  ],
}
