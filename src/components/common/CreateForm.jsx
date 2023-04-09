import React, { useState } from 'react'
import { postApi } from '../../api/axiosCalls'

function CreateForm({fieldNameArray,header,headerImage,style,url,resolveCB}) {

const [formData,setformData]=useState({})

const handleLogin=(e)=>{
  e.preventDefault()
  setformData({...formData})
  postApi(url,formData,resolveCB)
}

  return (
    <div className={style}>
      <div className="flex justify-center ">
        <img
          className="w-32 py-2"
          src={`${headerImage}`}
          alt=""
        />
      </div>
      <p>{header}</p>
      
      <form onSubmit={handleLogin}>
      
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
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateForm
