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
        }else{navigate('/admin/login');}
      })
    },[])

  return (
    <Fragment>
    {console.log(data)}
    <Table data={data} buttons={{Action:BlockUnBlock}}/>
    </Fragment>
  )
}

export default AdminUserManagement


function BlockUnBlock({rowObject}){
    const user=rowObject
    const [status,setStatus]=useState(null)

    useEffect(()=>{
        setStatus(user.status)
    },[])

    const handleClick=()=>{
        getApi(`/admin/blockorunblock?id=${user._id}&status=${!user.status}`,(response)=>{
            const {action,message}=response.data
            if(action){
                setStatus(!status)
            }
        alert(message)
        })}
    return(
        <button className={`${status?'bg-red-500 hover:bg-red-600':'bg-green-500 hover:bg-green-600'} text-white font-bold py-2 px-4 rounded`} onClick={handleClick}>{status?"Block":"UnBlock"}</button>
    )
}
