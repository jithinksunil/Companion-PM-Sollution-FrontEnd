import React, {  useState } from 'react'
import CreateProject from './CreateProject'
import SuperUserTokenCheck from '../../customHooks/SuperUserTokenCheck';

function SuperUserProjectsBody() {

  const [data,setData]=useState({})
  SuperUserTokenCheck('/project', setData)
  let projectManagersList=[]
  let projectsList=[]
  if(data.projectManagersList){
    projectManagersList=data.projectManagersList
  }
  if(data.projectsList){
    projectsList=data.projectsList
  }
  return (
    <div className='grid md:grid-cols-2'>
      <CreateProject setData={setData} projectManagersList={projectManagersList}/>
      <div className="ml-3 p-3 rounded-md text-center border border-gray-300 pb-16">
        <span className=" text-gray-300">Projects</span>
        {
          projectsList.map((item, index) => {
            return ( 
              <div key={index} className=" m-3 p-3 rounded bg-gray-300"><p className="text-black">{item.name}</p></div>
            )
        })
        }
      </div>
    </div>
  )
}

export default SuperUserProjectsBody
