import React, {Fragment} from 'react'

function Banner() {
    return (
        <Fragment>
            <div className='bg-gray-200 px-4 py-5 grid md:grid-cols-2 md:flex md:items-center md:py-10 md:px-10'>
                <div>
                    <p className='text-center text-slate-800 pb-5 text-3xl font-bold'>Transform your PMO vision into reality</p>
                    <p className='text-center text-slate-800 pb-2'>Align your strategy with execution for end-to-end success. Wrike connects every part of your PMO — all in one place.</p>
                    <div className='flex justify-center pb-10'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-3xl">
                            Try Companion PMO
                        </button>
                    </div>
                </div>
                <div>
                    <img className="" src="./images/banner/hero-image-left-pmo-600x382.png" alt=""/>
                </div>
            </div>
        </Fragment>
    )
}

export default Banner