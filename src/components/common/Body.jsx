import React from 'react'

function Body({children}) {
  return (
    <div className='h-5/6 w-screen overflow-y-scroll pl-5 pr-24 md:pr-10 md:w-full py-5  text-white'>
        {children}
    </div>
  )
}

export default Body
