import React, {useState} from 'react'
import Navbar from '../../components/superUser/Navbar'
import SideBar from '../../components/superUser/SideBar'

import './superUser.css'

function SuperUserUi() {
  const [showSideBar, setShowSideBar] = useState(true)
  const [loading,setLoading]=useState(true)
  return (
    <body className='background h-screen flex'>
    <SideBar state={showSideBar} loading={loading}/>
    <div className='w-full overflow-hidden'>
    <Navbar state={showSideBar} setState={setShowSideBar} setLoading={setLoading} loading={loading}/>

    </div>
    </body>
  )
}

export default SuperUserUi
