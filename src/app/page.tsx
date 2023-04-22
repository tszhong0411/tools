'use client'

import Link from 'next/link'
import React from 'react'

import Hero from '@/components/Hero'

import { site, Tool } from '@/config/site'

type CardProps = {
  tools: Tool[]
  title: string
}

const HomePage = () => {
  const [value, setValue] = React.useState('')

  const filter = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    )

  return (
    <div>
      <Hero />
      <div className='flex flex-col items-start'>
        {/* Search */}
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className='w-full rounded-lg border border-accent-2 bg-transparent px-2 py-2 outline-none transition-colors duration-300 focus:border-accent-5'
          placeholder='Search'
        />
        {/* Tools */}
        <div
          id='get-started'
          className='my-12 flex w-full scroll-mt-20 flex-col gap-6'
        >
          {value
            ? site.tools
                .filter((tool) => tool.links.some((tool) => filter(tool)))
                .map((tool) => {
                  const { label, links } = tool
                  const filtered = links.filter((tool) => filter(tool))

                  return (
                    <Card key={label} tools={filtered} title={label}></Card>
                  )
                })
            : site.tools.map((tool) => {
                const { label, links } = tool

                return <Card key={label} tools={links} title={label} />
              })}
        </div>
      </div>
    </div>
  )
}

const Card = (props: CardProps) => {
  const { tools, title } = props

  return (
    <div className='w-full rounded-lg border border-accent-2 p-4'>
      <div>{title}</div>
      <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {tools.map((tool) => (
          <Item key={tool.label} {...tool} />
        ))}
      </div>
    </div>
  )
}

const Item = (props: Tool) => {
  const { color, icon, label, link } = props
  const Icon = icon

  return (
    <Link
      href={link}
      className='flex flex-col items-center justify-center rounded-lg bg-accent-1 p-4 text-center transition-transform duration-300 hover:scale-105'
    >
      <Icon color={color} size={32} />
      <div className='mt-1.5'>{label}</div>
    </Link>
  )
}

export default HomePage
