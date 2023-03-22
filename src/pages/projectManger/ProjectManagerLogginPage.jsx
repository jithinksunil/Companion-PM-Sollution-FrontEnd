import React from 'react'
import Login from '../../components/common/Login'
import { setProjectManager } from '../../store/slices/ProjectManagerSlice'

function ProjectManagerLogginPage() {
  return (
    <div className='background h-screen'>
    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><Login formName='Project Manager' setIndividual={setProjectManager} url={'/projectmanager/login'} tokenName={'projectManagerToken'} responseRoute={'/projectmanager/dashboard'}/></div>
    </div>
  )
}

export default ProjectManagerLogginPage
