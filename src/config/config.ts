import {
  IconArrowsExchange,
  IconBlockquote,
  IconCode,
  IconColorPicker,
  IconFile,
  IconFileText,
  IconKeyboard,
  IconMathFunction,
  IconPhoto,
  IconTestPipe,
  TablerIcon,
} from '@tabler/icons'

type Config = {
  tools: Array<LinksGroup>
}

export type Tool = {
  label: string
  link: string
  color: string
  icon: TablerIcon
  keywords: Array<string>
}

type LinksGroup = {
  label: string
  icon: TablerIcon
  links: Array<Tool>
}

export const config: Config = {
  tools: [
    {
      label: 'Conversion',
      icon: IconArrowsExchange,
      links: [
        {
          label: 'CSS Unit converter',
          link: '/conversion/css-unit-converter',
          keywords: ['convert', 'css unit'],
          color: 'red',
          icon: IconArrowsExchange,
        },
        {
          label: 'Color converter',
          link: '/conversion/color-converter',
          keywords: ['convert', 'color'],
          color: 'orange',
          icon: IconColorPicker,
        },
        {
          label: 'Image converter',
          link: '/conversion/image-converter',
          keywords: ['image', 'extension'],
          color: 'green',
          icon: IconPhoto,
        },
      ],
    },
    {
      label: 'Code',
      icon: IconCode,
      links: [
        {
          label: 'Source code viewer',
          link: '/code/source-code-viewer',
          keywords: ['source code', 'code', 'viewer'],
          color: 'blue',
          icon: IconCode,
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
          keywords: ['pdf', 'viewer', 'document'],
          color: 'cyan',
          icon: IconFileText,
        },
      ],
    },
    {
      label: 'Calculation',
      icon: IconMathFunction,
      links: [
        {
          label: 'Word counter',
          link: '/calculation/word-counter',
          keywords: ['word', 'counter'],
          color: 'indigo',
          icon: IconBlockquote,
        },
      ],
    },
    {
      label: 'Tester',
      icon: IconTestPipe,
      links: [
        {
          label: 'Keyborad tester',
          link: '/tester/keyboard-tester',
          keywords: ['tester', 'keyboard'],
          color: 'grape',
          icon: IconKeyboard,
        },
      ],
    },
  ],
}
