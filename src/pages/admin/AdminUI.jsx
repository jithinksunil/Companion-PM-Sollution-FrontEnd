import React from 'react'
import AdminDashBoardBody from '../../components/admin/AdminDashBoardBody'
import AdminProfileBody from '../../components/admin/AdminProfileBody'
import { Route,Routes } from 'react-router-dom'
import Layout from '../../layout/Layout'

function AdminUI() {
  
  return (
    <Layout links={{profile:'/admin/profile',message:'/',notification:'/',userManagement:'/'}}>
    <Routes>
    <Route path='/dashboard' element={<AdminDashBoardBody/>}/>
    <Route path='/profile' element={<AdminProfileBody/>}/>
    </Routes>
    </Layout>
  )
}

export default AdminUI



