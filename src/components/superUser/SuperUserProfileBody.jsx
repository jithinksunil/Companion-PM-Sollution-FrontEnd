import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
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
      }else{navigate('/');toast.error('user verification failed')}
    },()=>{navigate('/');toast.error('user verification failed')})
  },[])
  return (
    <Fragment>
      <p className='text-white'>Profile</p>
    </Fragment>
  )
}

export default SuperUserProfileBody
