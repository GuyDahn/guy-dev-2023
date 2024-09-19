import React from 'react'

const Contact = () => {
  return (
    <div className='my-64 flex flex-col items-center text-center'>
      <p className='text-2xl text-gray-700 dark:text-gray-300'>
        Hire me, I&apos;m available for work.
      </p>
      <p className='text-2xl text-gray-700 dark:text-gray-300'>
        You can reach me &nbsp;
        <a
          className='text-dark underline dark:text-light text-blue-500 hover:text-blue-700 mt-2'
          href='mailto:guydaane@gmail.com'
        >
          HERE.
        </a>
      </p>
    </div>
  )
}

export default Contact
