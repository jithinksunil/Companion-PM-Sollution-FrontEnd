import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ProjectManagerDashBoardBody from '../../components/projectManager/SuperUserDashBoardBody'
import Layout from '../../layout/Layout'
function ProjectManagerUI() {
  const projectManager=useSelector(state=>state.projectManager.value)
  return (
    <Layout individual={projectManager} links={{profile:'/projectmanager/profile',message:'/',attendence:'/',notification:'/',dashBoard:'/projectmanager/dashboard'}}>
      <Routes>
        <Route path='/dashboard' element={<ProjectManagerDashBoardBody/>}/>
      </Routes>
    </Layout>
  )
}

export default ProjectManagerUI
