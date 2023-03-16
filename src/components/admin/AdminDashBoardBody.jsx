import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'

function AdminDashBoardBody() {
    const [admin, setAdmin] = useState({})
    const navigate=useNavigate()
    console.log(admin);
    useEffect(()=>{
      getApi('/admin/dashboard',(response)=>{
        const {adminTokenVerified,adminData}=response.data
        if(adminTokenVerified){
          setAdmin(adminData)
        }else{navigate('/admin/login')}
      })
    },[])
    return (
      <div className='w-screen md:w-full h-40'>
        <p className='text-white'>fsdf</p>
      </div>
    )
}

export default AdminDashBoardBody
