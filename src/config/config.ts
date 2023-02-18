import {
  Icon,
  IconArrowsExchange,
  IconBlockquote,
  IconColorPicker,
  IconFile,
  IconFileText,
  IconKeyboard,
  IconMathFunction,
  IconPhoto,
  IconTestPipe,
} from '@tabler/icons-react'

type Config = {
  tools: Array<LinksGroup>
}

export type Tool = {
  label: string
  link: string
  color: string
  icon: Icon
  keywords: Array<string>
}

type LinksGroup = {
  label: string
  icon: Icon
  links: Array<Tool>
}

export const config: Config = {
  tools: [
    {
      label: '轉換',
      icon: IconArrowsExchange,
      links: [
        {
          label: 'CSS 單位轉換器',
          link: '/conversion/css-unit-converter',
          keywords: ['轉換', 'css'],
          color: '#fa5252',
          icon: IconArrowsExchange,
        },
        {
          label: '顏色轉換器',
          link: '/conversion/color-converter',
          keywords: ['轉換', '顏色'],
          color: '#fd7e14',
          icon: IconColorPicker,
        },
        {
          label: '圖片格式轉換器',
          link: '/conversion/image-converter',
          keywords: ['圖片', '格式'],
          color: '#40c057',
          icon: IconPhoto,
        },
      ],
    },
    {
      label: '文件',
      icon: IconFile,
      links: [
        {
          label: 'PDF 閱讀器',
          link: '/document/pdf-viewer',
          keywords: ['pdf', '閱讀器', '文件'],
          color: '#15aabf',
          icon: IconFileText,
        },
      ],
    },
    {
      label: '計算',
      icon: IconMathFunction,
      links: [
        {
          label: '字數計算器',
          link: '/calculation/word-counter',
          keywords: ['字數', '計算器'],
          color: '#4c6ef5',
          icon: IconBlockquote,
        },
      ],
    },
    {
      label: '測試',
      icon: IconTestPipe,
      links: [
        {
          label: '鍵盤測試器',
          link: '/tester/keyboard-tester',
          keywords: ['測試器', '鍵盤'],
          color: '#be4bdb',
          icon: IconKeyboard,
        },
      ],
    },
  ],
}
