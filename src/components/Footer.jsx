import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
        <div className='logo-font-bold text-white text-2xl'>
          <span className='text-green-700'>&lt;</span>
          <span>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
        </div>

        <div className='flex'>
          Created with <img src='icons/heart.png' alt="love" className='w-7 mx-2' /> by <code className='mx-2'>Advanced_Boy_Shreyash</code>
        </div>
      </div>
    </>
  )
}

export default Footer
