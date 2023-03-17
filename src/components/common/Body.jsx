import React from 'react'

function Body({children}) {
  return (
    <div className='w-screen pl-5 pr-24 md:pr-10 md:w-full h-40 py-5  text-white'>
        {children}
    </div>
  )
}

export default Body
