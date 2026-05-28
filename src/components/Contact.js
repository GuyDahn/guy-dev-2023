import React from 'react'

const Contact = () => {
  return (
    <div className='my-64 flex flex-col items-center text-center'>
      <h2 className='text-4xl font-bold text-dark dark:text-light mb-4'>
        Let&apos;s build something that ranks.
      </h2>
      <p className='text-xl text-gray-600 dark:text-gray-300 max-w-lg mb-8'>
        I&apos;m available for freelance projects, SEO consulting, and
        full-stack development work. Let&apos;s talk.
      </p>
      <a
        href='mailto:guydaane@gmail.com'
        className='rounded-lg bg-dark text-light px-8 py-4 text-lg font-semibold
        dark:bg-light dark:text-dark hover:opacity-80 transition-opacity'
      >
        Get in touch
      </a>
    </div>
  )
}

export default Contact
