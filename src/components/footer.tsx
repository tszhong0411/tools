import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-4xl flex-col px-8 pb-8 text-sm'>
      &copy; {new Date().getFullYear()} Hong
    </footer>
  )
}

export default Footer
