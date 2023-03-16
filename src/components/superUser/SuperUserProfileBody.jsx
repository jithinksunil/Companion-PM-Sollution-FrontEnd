import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'

function SuperUserProfileBody() {
  const [superUser, setSuperUser] = useState({})
  const navigate=useNavigate()
  console.log(superUser);
  useEffect(()=>{
    getApi('/profile',(response)=>{
      const {superUserTokenVerified,superUserData}=response.data
      if(superUserTokenVerified){
        setSuperUser(superUserData)
      }else{navigate('/')}
    })
  },[])
  return (
    <div className='w-screen md:w-full h-40'>
      <p className='text-white'>Profile</p>
    </div>
  )
}

export default SuperUserProfileBody
