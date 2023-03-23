import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import SuperUserDashBoardBody from '../../components/superUser/SuperUserDashBoardBody'
import SuperUserProfileBody from '../../components/superUser/SuperUserProfileBody'
import SuperUserConnectionsBody from '../../components/superUser/SuperUserConnectionsBody'
import Layout from '../../layout/Layout'
function SuperUserUI() {
  const superUser=useSelector(state=>state.superUser.value)
  return (
    <Layout individual={superUser} links={{profile:'/superuser/profile',message:'/',attendence:'/',notification:'/',connections: '/superuser/connections',dashBoard:'/superuser/dashboard'}}>
      <Routes>
        <Route path='/dashboard' element={<SuperUserDashBoardBody/>}/>
        <Route path='/profile' element={<SuperUserProfileBody/>}/>
        <Route path='/connections' element={<SuperUserConnectionsBody/>}/>
      </Routes>
    </Layout>
  )
}

export default SuperUserUI
