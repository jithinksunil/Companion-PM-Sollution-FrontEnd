import React, { Fragment, useContext } from 'react'
import './rail.css'
import dummyData from '../../dummyData/company.json'
import { MyContext } from '../../context/Context'
function Rail() {
    const {resourceRef}=useContext(MyContext)
    return (
        <Fragment>
            
            <div  className=" px-4 py-10 md:px-10 font-sans">
                <p className="text-center text-gray-600 pb-5 text-3xl md:text-5xl font-bold">
                    Work smarter with app<br/> integrations
                </p>
                <p ref={resourceRef} className="text-center text-gray-400 text-xl md:text-2xl">
                Tired of switching from one workspace to the next? Keep all your apps together in Wrike. Eliminate distraction and stay focused on your tasks with one remote working software platform.
                </p>
            </div>
            <div  className='md:pb-20 pb-10'>
                {
                    ["pivotLeftToRight", "pivotRightToLeft", "pivotLeftToRightSlow"].map((item, index) => {
                        let leftPadding
                        if (index == 2) {
                            leftPadding = "pl-10"
                            dummyData.reverse()
                        } else {
                            leftPadding = ""
                        }
                        return (
                            <div key={index} className='h-16 relative overflow-hidden my-4'>
                                <div className={`${item} h-full absolute w-10`}>
                                    <div className={`track h-full overflow-hidden ${leftPadding}`}>
                                        {dummyData.map((element, i) => {

                                            return (
                                                <div key={i} className={`h-full w-60 bg-gray-200 rounded-[40px]  mx-2 inline-block`}>
                                                    <div className='h-full flex justify-center items-center'>
                                                        <img src={element.logo} alt="" />
                                                        <p className='font-sans text-lg md:text-xl font-bold text-gray-700 pl-2'>{element.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>

    )
}

export default React.memo(Rail)