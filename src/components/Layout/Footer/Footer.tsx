import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-auto flex max-w-4xl flex-col px-8 pb-8'>
      &copy; 小康 {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
