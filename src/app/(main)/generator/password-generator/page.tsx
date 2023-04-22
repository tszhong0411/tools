'use client'

import React from 'react'
import { toast } from 'react-hot-toast'

import Container from '@/components/Container'
import Title from '@/components/Title'

const PasswordGenerator = () => {
  const [length, setLength] = React.useState(10)
  const [useUpperCase, setUseUpperCase] = React.useState(true)
  const [useLowerCase, setUseLowerCase] = React.useState(true)
  const [useDigits, setUseDigits] = React.useState(true)
  const [useSymbols, setUseSymbols] = React.useState(true)
  const [avoidSimilarChars, setAvoidSimilarChars] = React.useState(true)
  const [password, setPassword] = React.useState('')

  const handleGeneratePassword = () => {
    if (!useUpperCase && !useLowerCase && !useDigits && !useSymbols) {
      toast.error('Please select at least one of character types.')
      return
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const symbolChars = '!@#$%^&*()_+-={}[]|:;<>,.?/~`'
    const similarChars = 'iloO01'

    let chars = ''

    if (useUpperCase) {
      chars += uppercaseChars
    }

    if (useLowerCase) {
      chars += lowercaseChars
    }

    if (useDigits) {
      chars += digitChars
    }

    if (useSymbols) {
      chars += symbolChars
    }

    if (avoidSimilarChars) {
      chars = chars
        .split('')
        .filter((char) => !similarChars.includes(char))
        .join('')
    }

    let password = ''

    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    setPassword(password)
  }

  const handleClearPassword = () => {
    setPassword('')
  }

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password)
      toast.success('Password copied to clipboard.')
    } catch (error) {
      toast.error('Failed to copy password to clipboard.')
    }
  }

  const handleSavePassword = () => {
    const blob = new Blob([password], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.download = 'password.txt'
    link.href = url
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Container className='flex max-w-xl flex-col items-center justify-center'>
      <Title title='Password generator' />

      <div className='my-12 w-full max-w-3xl items-center justify-center space-y-4 rounded-md border border-accent-2 p-6'>
        <div>
          <label className='mb-2 block font-bold' htmlFor='length'>
            Length
          </label>
          <input
            className='rounded-md border border-accent-2 bg-transparent px-3 py-2 transition-colors duration-300 focus:border-accent-5 focus:outline-none'
            id='length'
            type='number'
            min='1'
            value={length}
            onChange={(event) => setLength(parseInt(event.target.value))}
          />
        </div>
        <div>
          <div className='space-y-2'>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='checkbox'
                id='useUpperCase'
                checked={useUpperCase}
                onChange={(event) => setUseUpperCase(event.target.checked)}
              />
              <label htmlFor='useUpperCase' className='text-sm'>
                Uppercase letters
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='checkbox'
                id='useLowerCase'
                checked={useLowerCase}
                onChange={(event) => setUseLowerCase(event.target.checked)}
              />
              <label htmlFor='useLowerCase' className='text-sm'>
                Lowercase letters
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='checkbox'
                id='useDigits'
                checked={useDigits}
                onChange={(event) => setUseDigits(event.target.checked)}
              />
              <label htmlFor='useDigits' className='text-sm'>
                Digits
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='checkbox'
                id='useSymbols'
                checked={useSymbols}
                onChange={(event) => setUseSymbols(event.target.checked)}
              />
              <label htmlFor='useSymbols' className='text-sm'>
                Symbols
              </label>
            </div>
            <div className='flex items-center'>
              <input
                className='mr-2'
                type='checkbox'
                id='avoidSimilarChars'
                checked={avoidSimilarChars}
                onChange={(event) => setAvoidSimilarChars(event.target.checked)}
              />
              <label htmlFor='avoidSimilarChars' className='text-sm'>
                Avoid similar characters (e.g. 1 and l, 0 and O)
              </label>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <button
            className='mr-2 rounded border border-white bg-white px-4 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none'
            onClick={handleGeneratePassword}
            type='button'
          >
            Generate
          </button>
          <button
            className='mr-2 rounded border border-white bg-white px-4 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none'
            onClick={handleClearPassword}
            type='button'
          >
            Clear
          </button>
        </div>
        {password && (
          <div className='space-y-2'>
            <div className='font-bold'>Generated Password</div>
            <div className='break-all rounded-md border border-accent-2 p-2'>
              {password}
            </div>
            <button
              className='mr-2 rounded border border-white bg-white px-4 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none'
              onClick={handleCopyPassword}
              type='button'
            >
              Copy
            </button>
            <button
              className='mr-2 rounded border border-white bg-white px-4 py-2 font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none'
              onClick={handleSavePassword}
              type='button'
            >
              Save
            </button>
          </div>
        )}
      </div>
    </Container>
  )
}

export default PasswordGenerator
