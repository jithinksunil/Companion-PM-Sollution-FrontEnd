import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'
import Table from '../common/Table'

function AdminUserManagement() {
    const  [data,setData]=useState([{}])
    const [sort, setSort]=useState(true)
    const [sortField,setSortField]=useState('')
    const [search,setSearch]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        console.log(JSON.stringify(search));
      getApi(`/admin/superusermanagement?search=${search}&sortField=${sortField}&order=${sort}`,(response)=>{

        const {adminTokenVerified, message, superUsersData}=response.data
        if(adminTokenVerified){
            if(!message){
                setData(superUsersData)
            }else{
                alert(message)
            }
        }else{navigate('/admin/login');}
      })
    },[search])

  return (
    <Fragment>
    <Table fields={{email:'Email',companyName:'Company Name',password:'Password'}} data={data} setData={setData} setSearch={setSearch} sorting={{setSort,sort,setSortField}} buttons={{Action:BlockUnBlock}}/>
    </Fragment>
  )
}

export default AdminUserManagement

function BlockUnBlock({rowObject , setData}){
    const user=rowObject
    
    const handleClick=()=>{
        getApi(`/admin/blockorunblock?id=${user._id}&status=${!user.status}`,(response)=>{
            const {action,message}=response.data
            if(action){
                getApi('/admin/superusermanagement',(response)=>{setData(response.data.superUsersData)})
            }
        alert(message)
        })}
    return(
        <button className={`${user.status?'bg-red-500 hover:bg-red-600':'bg-green-500 hover:bg-green-600'} text-white font-bold py-2 px-4 rounded`} onClick={handleClick}>{user.status?"Block":"UnBlock"}</button>
    )
}
