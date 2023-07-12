import React from 'react'

function InternalError({ children }) {
    return (
        <div className="absolute top-0 left-0 bg-white h-full w-full text-red-700 flex justify-center items-center">
            <div className='text-center'>
                < h1 className="text-3xl font-bold">Intenal Error</h1>
                {children}
            </div>
        </div>
    )
}

export default InternalError