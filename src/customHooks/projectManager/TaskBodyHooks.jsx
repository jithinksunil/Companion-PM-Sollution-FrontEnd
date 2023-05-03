import { useEffect, useState } from "react"

export const useFirstProjectHighlighter=(data)=>{
    const [projectId, setProjectId] = useState('willAssign')
    useEffect(()=>{
      if(projectId=='willAssign'){
        setProjectId('notAssingned')
      }else if(projectId=='notAssingned'){
        setProjectId(data[0]?.projectId)
      }
      
    },[data])
    return {projectId, setProjectId}
  }