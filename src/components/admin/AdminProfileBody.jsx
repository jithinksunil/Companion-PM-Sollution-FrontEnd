import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getApi } from '../../api/axiosCalls'

function AdminProfileBody() {
    const [admin, setAdmin] = useState({})
    const navigate=useNavigate()
    console.log(admin);
    useEffect(()=>{
      getApi('/admin/dashboard',(response)=>{
        const {adminTokenVerified,adminData}=response.data
        if(adminTokenVerified){
          setAdmin(adminData)
        }else{navigate('/admin/login');toast.error('Admin verification failed')}
      },()=>{navigate('/admin/login');toast.error('Admin verification failed')})
    },[])
    return (
      <Fragment>
        <p className='text-white'>profile</p>
      </Fragment>
    )
}

export default AdminProfileBody
