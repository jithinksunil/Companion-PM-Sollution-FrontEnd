import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getApi } from '../../api/axiosCalls'

function AdminDashBoardBody() {
    const [admin, setAdmin] = useState({})
    const navigate = useNavigate()
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
        <p className='text-white'>fs d f f f f f f f ff f ff f ff f f ff f ff f f ff f f f ff f ff ff f f ff f f ff f ff f f ff f f ff f f f ff f ff f f ff f f ff f s ds d  s d f sd f sd   fs d f sd f sd f   s df s df s d fs df s d  sd f sd f sd fs  d  sd f sd fs d f </p>
      </Fragment>
    )
}

export default AdminDashBoardBody
