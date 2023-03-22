import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getApi } from '../api/axiosCalls'

function ProjectManagerTokenCheck(url,setProjectManager){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
      getApi(url,(response)=>{
        const {projectManagerTokenVerified,message,projectManagerData}=response.data
        if(projectManagerTokenVerified){
          dispatch(setProjectManager(projectManagerData))
          }else{navigate('/');toast.error(message)}
      })
    },[])
}

export default ProjectManagerTokenCheck

