import React, {useState} from 'react'
import Navbar from '../../components/superUser/Navbar'
import SideBar from '../../components/superUser/SideBar'
import UserBody from '../../components/superUser/UserBody'
import './superUser.css'

function SuperUserProfile() {
    const [showSideBar, setShowSideBar] = useState(true)
  const [loading,setLoading]=useState(true)
  return (
    <div className='background h-screen flex'>
    <SideBar state={showSideBar} loading={loading}/>
    <div className='w-full overflow-hidden'>
    <Navbar state={showSideBar} setState={setShowSideBar} setLoading={setLoading} loading={loading}/>
    <UserBody/>
    </div>
    </div>
  )
}

export default SuperUserProfile
