import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../api/axiosCalls'
import Login from '../../components/common/Login'
import { setProjectManager } from '../../store/slices/ProjectManagerSlice'

function ProjectManagerLogginPage() {
  const navigate=useNavigate()
  useEffect (()=>{
    const projectManagerToken=Cookies.get('projectManagerToken')
    if(projectManagerToken){
      getApi('/projectmanager/verifyToken',(response)=>{
        if(response.data.projectManagerTokenVerified){
          navigate('/projectmanager/dashboard')
        }})
    }
  },[])
  return (
    <div className='background h-screen'>
    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><Login formName='Project Manager' userName setIndividual={setProjectManager} url={'/projectmanager/login'} tokenName={'projectManagerToken'} responseRoute={'/projectmanager/dashboard'}/></div>
    </div>
  )
}

export default ProjectManagerLogginPage
