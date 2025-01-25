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

export type Tool = {
  label: string
  description: string
  link: string
  keywords: string[]
  color: string
  icon: LucideIcon
}

type ToolGroup = {
  label: string
  tools: Tool[]
}

export const TOOLS: ToolGroup[] = [
  {
    label: 'Conversion',
    tools: [
      {
        label: 'CSS Unit Converter',
        description: 'Convert CSS units',
        link: '/conversion/css-unit-converter',
        keywords: ['Conversion', 'CSS'],
        color: '#fa5252',
        icon: ArrowRightLeftIcon
      },
      {
        label: 'Color Converter',
        description: 'Convert color codes',
        link: '/conversion/color-converter',
        keywords: ['Conversion', 'Color', 'CSS'],
        color: '#fd7e14',
        icon: PipetteIcon
      },
      {
        label: 'Image Converter',
        description: 'Convert image formats',
        link: '/conversion/image-converter',
        keywords: ['Conversion', 'Image', 'Format', 'Extension'],
        color: '#40c057',
        icon: ImageIcon
      }
    ]
  },
  {
    label: 'Document',
    tools: [
      {
        label: 'PDF Viewer',
        description: 'View PDF files',
        link: '/document/pdf-viewer',
        keywords: ['PDF', 'Viewer', 'Document', 'File', 'Document'],
        color: '#15aabf',
        icon: FileTextIcon
      }
    ]
  },
  {
    label: 'Calculation',
    tools: [
      {
        label: 'Word Counter',
        description: 'Count words in text',
        link: '/calculation/word-counter',
        keywords: ['Word', 'Counter', 'Calculation', 'Text'],
        color: '#4c6ef5',
        icon: TextIcon
      }
    ]
  },
  {
    label: 'Testing',
    tools: [
      {
        label: 'Keyboard Tester',
        description: 'Test keyboard keys',
        link: '/tester/keyboard-tester',
        keywords: ['Tester', 'Keyboard', 'Test'],
        color: '#be4bdb',
        icon: KeyboardIcon
      }
    ]
  },
  {
    label: 'Generator',
    tools: [
      {
        label: 'Password Generator',
        description: 'Generate random passwords',
        link: '/generator/password-generator',
        keywords: ['Generator', 'Password', 'Random'],
        color: '#f783ac',
        icon: KeyIcon
      }
    ]
  }
]
