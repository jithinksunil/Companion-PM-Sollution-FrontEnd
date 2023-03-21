import React from 'react'
import './body.css'

function Body({children}) {
  return (
    <div className='h-5/6 w-screen overflow-y-scroll scrollbar-hidden pl-5 pr-24 md:pr-10 md:w-full py-5  text-white'>
        {children}
    </div>
  )
}

export default Body
