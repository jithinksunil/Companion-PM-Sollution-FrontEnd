import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'
import Table from '../common/Table'

function AdminUserManagement() {
    const  [data,setData]=useState([{}])
    const navigate=useNavigate()
    useEffect(()=>{
      getApi('/admin/superusermanagement',(response)=>{
        const {adminTokenVerified, message, superUsersData}=response.data
        if(adminTokenVerified){
            if(!message){
                setData(superUsersData)
            }else{
                alert(message)
            }
        }else{navigate('/admin/login')}
      })
    },[])

  return (
    <Fragment>
    {console.log(data)}
    <Table data={data} buttons={{Action:BlockButton,delete:BlockButton}}/>
    </Fragment>
  )
}

export default AdminUserManagement



function BlockButton({user}){

    return(
        <button className={`${user.status?'bg-red-500 hover:bg-red-600':'bg-green-500 hover:bg-green-600'} text-white font-bold py-2 px-4 rounded`} onClick={()=>{alert(id)}}>{user.status?"Block":"UnBlock"}</button>

    )
}
