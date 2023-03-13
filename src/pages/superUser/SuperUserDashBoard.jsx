import React, {useState} from 'react'
import Navbar from '../../components/common/Navbar'
import SideBar from '../../components/common/SideBar'

import './superUser.css'

function SuperUserDashBoard() {
  const [showSideBar, setShowSideBar] = useState(true)
  const [loading,setLoading]=useState(true)
  return (
    <div className='background h-screen flex'>
    <SideBar state={showSideBar} loading={loading}/>
    <div className='w-full overflow-hidden'>
    <Navbar state={showSideBar} setState={setShowSideBar} setLoading={setLoading} loading={loading}/>

    </div>
    </div>
  )
}

export default SuperUserDashBoard
