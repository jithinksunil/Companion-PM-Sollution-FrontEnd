import React, {useState} from 'react'
import Navbar from '../../components/common/Navbar'
import SideBar from '../../components/common/SideBar'
import AdminDashBoardBody from '../../components/admin/AdminDashBoardBody'
import './admin.css'
import { Route,Routes } from 'react-router-dom'


function AdminUI() {
  const [showSideBar, setShowSideBar] = useState(true)
  const [loading,setLoading]=useState(true)
  
  return (
    <div className='background h-screen flex'>
    <SideBar state={showSideBar} loading={loading}/>
    <div className='w-full overflow-hidden'>
    <Navbar state={showSideBar} setState={setShowSideBar} setLoading={setLoading} loading={loading}/>
    
    <Routes>
      <Route path='/dashboard' element={<AdminDashBoardBody/>}/>
    </Routes>
    
    
    </div>
    </div>
  )
}

export default AdminUI


