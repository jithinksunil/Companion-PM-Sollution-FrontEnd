import React, {Fragment} from 'react'

function Services() {
    return (
        <Fragment >

            <div className='grid md:grid-cols-4 pb-5 md:px-10' >
                <div className='px-4 py-5 md:col-span-2 lg:col-span-1'>
                    <img className='w-72' src="./images/services/analyse.jpg" alt=""/>
                    <p className='text-2xl font-semibold  text-slate-800 py-5'>Strategic planning</p>
                    <p className=' text-slate-800'>Wrike is the all-in-one solution to disconnected processes, with robust planning features and instant insights. Strategize, plan, and track every company OKR and goal — all in one powerful place.</p>
                </div>
                <div className='px-4 py-5 md:col-span-2 lg:col-span-1'>
                    <img className='w-72' src="./images/services/bluiprint.jpg" alt=""/>
                    <p className='text-2xl font-semibold  text-slate-800 py-5'>Project portfolio management</p>
                    <p className=' text-slate-800'>
                        Managing a large portfolio of initiatives? Wrike makes it easy to roll up multiple projects across programs. Access advanced analytics and real-time metrics to get the full picture any time, anywhere.</p>
                </div>
                <div className='px-4 py-5 md:col-span-2 lg:col-span-1'>
                    <img className='w-72' src="./images/services/development.jpg" alt=""/>
                    <p className='text-2xl font-semibold  text-slate-800 py-5'>Program and project management</p>
                    <p className=' text-slate-800'>
                        Pave a path to operational excellence with Wrike’s 360° views, customizable workflows, and advanced automations. Implement standard methodologies, balance resources, and adjust tasks in real time</p>
                </div>
                <div className='px-4 py-5 md:col-span-2 lg:col-span-1'>
                    <img className='w-72' src="./images/services/planning.jpg" alt=""/>
                    <p className='text-2xl font-semibold  text-slate-800 py-5'>Corporate development</p>
                    <p className=' text-slate-800'>
                        Move fast in deal sourcing with complete alignment and visibility. Collaborate effectively during due diligence and accelerate integration with predefined playbooks and advanced reporting.</p>
                </div>
            </div>
            <div className='flex justify-center  pb-10'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-3xl">
                    Set Up Your Team
                </button>
            </div>
        </Fragment>
    )
}

export default Services
