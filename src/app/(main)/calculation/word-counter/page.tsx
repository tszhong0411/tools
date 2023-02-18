'use client'

import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import Container from '@/components/Container'
import Title from '@/components/Title'

const WordCounter = () => {
  const [value, setValue] = React.useState('')
  const words = value.match(/\S+/g)?.length || 0
  const chars = value.length || 0
  const charsWithoutSpace = value.replace(/ /g, '').length || 0
  const paragraphs =
    value.split('\n').filter((paragraph) => paragraph !== '').length || 0

  return (
    <Container className='max-w-5xl flex justify-center flex-col items-center'>
      <Title title='字數計算器' />

      {/* 字數計算器 */}
      <div className='w-full grid my-12 grid-cols-2 sm:grid-cols-4 gap-2'>
        <div className='border border-accent-2 p-3 h-24 rounded-lg w-full'>
          <div className='font-bold text-2xl'>{words}</div>
          <div className='text-accent-6 text-xs font-bold'>個字</div>
        </div>
        <div className='border border-accent-2 p-3 h-24 rounded-lg w-full'>
          <div className='font-bold text-2xl'>{chars}</div>
          <div className='text-accent-6 text-xs font-bold'>個字符</div>
        </div>
        <div className='border border-accent-2 p-3 h-24 rounded-lg w-full'>
          <div className='font-bold text-2xl'>{charsWithoutSpace}</div>
          <div className='text-accent-6 text-xs font-bold'>
            個空格以外的字符
          </div>
        </div>
        <div className='border border-accent-2 p-3 h-24 rounded-lg w-full'>
          <div className='font-bold text-2xl'>{paragraphs}</div>
          <div className='text-accent-6 text-xs font-bold'>段</div>
        </div>
      </div>

      {/* 文字區域 */}
      <TextareaAutosize
        className='rounded-md border border-accent-2 bg-hong-bg py-2 px-3 transition-colors duration-200 ease-linear focus:border-accent-5 focus:outline-none w-full'
        placeholder='在這裡輸入 ...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  )
}

export default WordCounter
