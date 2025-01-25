'use client'

import { Input } from '@tszhong0411/ui'
import Link from 'next/link'
import React from 'react'

import Hero from '@/components/hero'
import { type Tool, TOOLS } from '@/lib/tool-groups'

const HomePage = () => {
  const [value, setValue] = React.useState('')

  const filter = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some((keyword) => keyword.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      <Hero />
      <div className='flex flex-col space-y-12'>
        <Input
          type='text'
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
          }}
          placeholder='Search'
          className='w-full'
        />
        <div id='get-started' className='flex w-full scroll-mt-20 flex-col gap-6'>
          {value
            ? TOOLS.filter((t) => t.tools.some((tool) => filter(tool))).map((t) => {
                const { label, tools } = t
                const filtered = tools.filter((tool) => filter(tool))

                return <Card key={label} tools={filtered} title={label} />
              })
            : TOOLS.map((tool) => {
                const { label, tools } = tool

                return <Card key={label} tools={tools} title={label} />
              })}
        </div>
      </div>
    </div>
  )
}

type CardProps = {
  tools: Tool[]
  title: string
}

const Card = (props: CardProps) => {
  const { tools, title } = props

  return (
    <div className='w-full space-y-4 rounded-lg border p-4'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <div className='grid gap-4 sm:grid-cols-2'>
        {tools.map((tool) => (
          <Item key={tool.label} {...tool} />
        ))}
      </div>
    </div>
  )
}

const Item = (props: Tool) => {
  const { color, icon, label, description, link } = props
  const Icon = icon

  return (
    <Link
      href={link}
      className='flex items-start gap-4 rounded-lg bg-muted/50 p-6 transition-colors hover:bg-muted'
    >
      <div className='rounded-lg bg-accent p-2'>
        <Icon className='size-4' style={{ color }} />
      </div>
      <div className='space-y-1'>
        <h3 className='text-lg font-medium leading-none tracking-tight'>{label}</h3>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </Link>
  )
}

export default HomePage
