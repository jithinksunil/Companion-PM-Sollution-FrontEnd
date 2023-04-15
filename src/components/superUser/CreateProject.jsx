import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { getApi, postApi } from '../../api/axiosCalls'

function CreateProject({setData,projectManagersList}) {
    const [formData,setformData]=useState({})
    const fieldNameArray= ['name','lati','longi']

    const handleSubmit=(e)=>{
        e.preventDefault()
        setformData({...formData})
        postApi('/project/create',formData,(resolve)=>{
            const {superUserTokenVerified,status,message}=resolve.data
            if(superUserTokenVerified){
                if(status){
                    getApi('/project',(resolve)=>{
                        if(resolve.data.data)
                        {setData(resolve.data.data)}
    
                    })
                    toast.success(message)
                }
                else{
                    toast.error(message)
                }
            }else{
                toast.error(message)
            }
        })
      }
    return (
        <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center ">
          <div className="flex justify-center ">
            <img
              className="w-32 py-2"
              src="https://res.cloudinary.com/df8w69xon/image/upload/v1678773094/Companion%20web%20application/companion/companion_vn1uma.png"
              alt=""
            />
          </div>
          <p>Create Project</p>
          
          <form onSubmit={handleSubmit}>
          
          {
              fieldNameArray.map((item,index)=>{
              return(
                <div key={index} className="flex justify-center ">
                <input 
                  className="block my-2 rounded-xl h-9 border-gray-500 border text-black px-2"
                  required
                  type={item}
                  placeholder={`Enter ${item}`}
                  onChange={(e) => {
                    formData[item]=e.target.value
                  }}
                />
                </div>
              )
            })
          }
          
            <div className="flex justify-center py-2">
            <select className="text-gray-900 mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
            onChange={
                (e) => {
                    formData.projectManager=e.target.value
                }
            }>
            <option value='unAssingned'>unAssigned</option>
            {projectManagersList.map((item,index)=>{
              if(item.name!=='unAssingned'){
                return(
                    <option className='text-black' key={index} value={item._id}>{item.name}</option> 
                )
              }
            })}

            </select>

            </div>

            <div className="flex justify-center py-2">
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
              />
            </div>
          </form>
        </div>
      )
}

export default CreateProject