import { useMemo } from 'react'

export const useTextStats = (text: string) => {
  return useMemo(
    () => ({
      words: text.match(/\S+/g)?.length ?? 0,
      chars: text.length || 0,
      charsWithoutSpaces: text.replaceAll(' ', '').length || 0,
      paragraphs: text.split('\n').filter((paragraph) => paragraph !== '').length || 0
    }),
    [text]
  )
}
