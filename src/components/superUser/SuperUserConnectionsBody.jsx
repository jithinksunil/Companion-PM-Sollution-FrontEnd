import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { postApi } from '../../api/axiosCalls'
import SuperUserTokenCheck from '../../customHooks/SuperUserTokenCheck'
import { setSuperUser } from '../../store/slices/SuperUserSice'

function SuperUserConnectionsBody() {
  const [connection,setConnection]=useState(null)
  SuperUserTokenCheck('/connections',setSuperUser)
  const handleAddUser=()=>{
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailFormat.test(connection)){
      toast("Please enter a valid email")
    }
    else{
      postApi('/addConnection',{connection},(respose)=>{
          toast.success(respose.data.message)
      })
    }
  }
  return (
    <div>
      <input type='text' className='text-black' onChange={(e)=>{setConnection(e.target.value)}}/>
      <button className='border-red-100' onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default SuperUserConnectionsBody