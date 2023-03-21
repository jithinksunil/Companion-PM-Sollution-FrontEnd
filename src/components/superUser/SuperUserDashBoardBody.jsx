import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getApi } from '../../api/axiosCalls'

function SuperUserDashBoardBody() {
    const [superUser, setSuperUser] = useState({})
    const navigate=useNavigate()
    console.log(superUser);
    useEffect(()=>{
      getApi('/dashboard',(response)=>{
        const {superUserTokenVerified,superUserData}=response.data
        if(superUserTokenVerified){
          setSuperUser(superUserData)
          }else{navigate('/');toast.error('user verification failed')}
      },()=>{navigate('/');toast.error('user verification failed')})
    },[])
    return (
      <Fragment>
        <p className='text-white'>Dashboard</p>
      </Fragment>
    )
}

export default SuperUserDashBoardBody
