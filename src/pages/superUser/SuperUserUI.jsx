import React, {useState} from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import SideBar from '../../components/common/SideBar'
import SuperUserDashBoardBody from '../../components/superUser/SuperUserDashBoardBody'
import SuperUserProfileBody from '../../components/superUser/SuperUserProfileBody'
import './superUser.css'

function Layout(){
  const [showSideBar, setShowSideBar] = useState(true)
  const [loading,setLoading]=useState(true)
  return(
    <div className='background h-screen flex'>
    <SideBar state={showSideBar} loading={loading}/>
    <div className='w-full overflow-hidden'>
    <Navbar navigate={{profile:'/superuser/profile'}} state={showSideBar} setState={setShowSideBar} setLoading={setLoading} loading={loading}/>
    <Outlet/>
    </div>
    </div>
  )
}

function SuperUserUI() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/dashboard' element={<SuperUserDashBoardBody/>}/>
        <Route path='/profile' element={<SuperUserProfileBody/>}/>
      </Route>
    </Routes>
  )
}

export default SuperUserUI
