import {
  IconArrowsExchange,
  IconCode,
  IconColorPicker,
  IconPhoto,
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
      label: 'Converter',
      icon: IconArrowsExchange,
      links: [
        {
          label: 'CSS Unit converter',
          link: '/converter/css-unit-converter',
          keywords: ['convert', 'css unit'],
          color: 'red',
          icon: IconArrowsExchange,
        },
        {
          label: 'Color converter',
          link: '/converter/color-converter',
          keywords: ['convert', 'color'],
          color: 'orange',
          icon: IconColorPicker,
        },
        {
          label: 'Image converter',
          link: '/converter/image-converter',
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
  ],
}
