import { Stack, TextInput } from '@mantine/core'
import React from 'react'

import Card from '@/components/Card'
import Hero from '@/components/Hero'

import { config } from '@/config'
import { Tool } from '@/config'

const Home = () => {
  const [value, setValue] = React.useState('')

  const filter = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    )

  return (
    <>
      <Hero />
      <TextInput
        size='md'
        mb={24}
        placeholder='Search'
        label='Search'
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Stack id='get-started' sx={{ scrollMarginTop: 80 }}>
        {!value &&
          config.tools.map(({ label, links }) => (
            <Card key={label} tools={links} title={label} />
          ))}
        {value &&
          config.tools
            .filter((tool) => tool.links.some((tool) => filter(tool)))
            .map(({ label, links }) => {
              const filtered = links.filter((tool) => filter(tool))

              return <Card key={label} tools={filtered} title={label} />
            })}
      </Stack>
    </>
  )
}

export default Home
