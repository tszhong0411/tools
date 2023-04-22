'use client'

import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import Container from '@/components/Container'
import Title from '@/components/Title'

const WordCounter = () => {
  const [value, setValue] = React.useState('')
  const words = value.match(/\S+/g)?.length || 0
  const chars = value.length || 0
  const charsWithoutSpaces = value.replace(/ /g, '').length || 0
  const paragraphs =
    value.split('\n').filter((paragraph) => paragraph !== '').length || 0

  return (
    <Container className='flex max-w-5xl flex-col items-center justify-center'>
      <Title title='Word Counter' />

      <div className='my-12 grid w-full grid-cols-2 gap-2 sm:grid-cols-4'>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{words}</div>
          <div className='text-xs font-bold text-accent-6'>words</div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{chars}</div>
          <div className='text-xs font-bold text-accent-6'>characters</div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{charsWithoutSpaces}</div>
          <div className='text-xs font-bold text-accent-6'>
            characters without spaces
          </div>
        </div>
        <div className='h-24 w-full rounded-lg border border-accent-2 p-3'>
          <div className='text-2xl font-bold'>{paragraphs}</div>
          <div className='text-xs font-bold text-accent-6'>paragraphs</div>
        </div>
      </div>

      <TextareaAutosize
        className='w-full rounded-md border border-accent-2 bg-hong-bg px-3 py-2 transition-colors duration-200 ease-linear focus:border-accent-5 focus:outline-none'
        placeholder='Type here ...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  )
}

export default WordCounter
