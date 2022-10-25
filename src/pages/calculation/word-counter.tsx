import { Container, Paper, SimpleGrid, Text, Textarea } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import React from 'react'

import PageTitle from '@/components/PageTitle'

export default function ColorConverter() {
  const [value, setValue] = useLocalStorage({
    key: 'word-counter-value',
    defaultValue: '',
  })

  const words = value.match(/\S+/g)?.length || 0
  const chars = value.length || 0
  const charsWithoutSpace = value.replace(/ /g, '').length || 0
  const paragraphs =
    value.split('\n').filter((paragraph) => paragraph !== '').length || 0

  return (
    <>
      <PageTitle title='Word counter' />
      <Container>
        <SimpleGrid
          spacing={0}
          mb={24}
          cols={4}
          breakpoints={[
            { maxWidth: 680, cols: 2 },
            { maxWidth: 400, cols: 1 },
          ]}
        >
          <Paper withBorder p={12} sx={{ height: '100px' }}>
            <Text weight={700} size={24}>
              {words}
            </Text>
            <Text color='dimmed' size='xs' weight={700}>
              Word{words > 1 && 's'}
            </Text>
          </Paper>
          <Paper withBorder p={12} sx={{ height: '100px' }}>
            <Text weight={700} size={24}>
              {chars}
            </Text>
            <Text color='dimmed' size='xs' weight={700}>
              Character{chars > 1 && 's'}
            </Text>
          </Paper>
          <Paper withBorder p={12} sx={{ height: '100px' }}>
            <Text weight={700} size={24}>
              {charsWithoutSpace}
            </Text>
            <Text color='dimmed' size='xs' weight={700}>
              Character{charsWithoutSpace > 1 && 's'} <br /> without space
            </Text>
          </Paper>
          <Paper withBorder p={12} sx={{ height: '100px' }}>
            <Text weight={700} size={24}>
              {paragraphs}
            </Text>
            <Text color='dimmed' size='xs' weight={700}>
              Paragraph{paragraphs > 1 && 's'}
            </Text>
          </Paper>
        </SimpleGrid>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          minRows={20}
          placeholder='Start typing...'
        />
      </Container>
    </>
  )
}
