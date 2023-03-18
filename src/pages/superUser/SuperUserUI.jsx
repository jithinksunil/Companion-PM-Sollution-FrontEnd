import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SuperUserDashBoardBody from '../../components/superUser/SuperUserDashBoardBody'
import SuperUserProfileBody from '../../components/superUser/SuperUserProfileBody'
import Layout from '../../layout/Layout'

function SuperUserUI() {

  return (
    <Layout links={{profile:'/superuser/profile',message:'/',attendence:'/',notification:'/',dashBoard:'/superuser/dashboard',projects:'/'}}>
      <Routes>
        <Route path='/dashboard' element={<SuperUserDashBoardBody/>}/>
        <Route path='/profile' element={<SuperUserProfileBody/>}/>
      </Routes>
    </Layout>
  )
}

export default SuperUserUI
