import React, { Fragment, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminUserManagement() {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')

    const columns=[
        {
          name:"Email",
          selector:row=>row.email,
          sortable:true
        },
        {
          name:"Company Name",
          selector:row=>row.companyName,
          sortable:true
        },
        {
          name:"Password",
          selector:row=>row.password,
          sortable:true
        },
        {
            name:'Action',
            cell:(row)=><BlockUnBlock row={row} setData={setData}/>,
            sortable:true
        }
      ]

    const navigate=useNavigate()

    useEffect(()=>{
      getApi(`/admin/superusermanagement?search=${search}`,(response)=>{
        const {adminTokenVerified, message, superUsersData}=response.data
        if(adminTokenVerified){
            if(!message){
                setData(superUsersData)
            }else{
                toast(message)
            }
        }else{navigate('/admin/login');toast.error('Admin verification failed')}
      },()=>{navigate('/admin/login');toast.error('Admin verification failed')})
    },[search])

   
  return (
    <Fragment>
    <DataTable 
    title='Users'
    fixedHeader
    columns={columns}
    data={data}
    pagination
    highlightOnHover
    actions={<button>Export</button>}
    subHeader
    subHeaderComponent={<input className='text-black' type='text' placeholder='Search here' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>}
    subHeaderAlign='center'
    />
    </Fragment>
  )
}

export default AdminUserManagement


function BlockUnBlock({row , setData}){
        const user=row
        
        const handleClick=()=>{
            getApi(`/admin/blockorunblock?id=${user._id}&status=${!user.status}`,(response)=>{
                const {action,message}=response.data
                if(action){
                    getApi('/admin/superusermanagement',(response)=>{setData(response.data.superUsersData)})
                }
                toast(message)
            })}
        return(
            <button className={`${user.status?'bg-red-500 hover:bg-red-600':'bg-green-500 hover:bg-green-600'} text-white font-bold py-2 px-4 rounded`} onClick={handleClick}>{user.status?"Block":"UnBlock"}</button>

        )
    }