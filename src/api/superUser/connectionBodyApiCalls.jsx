import { toast } from "react-toastify"
import { getApi, postApi } from "../axiosCalls"

export const addConnection=(formData,setProjects)=>{

    postApi("/addConnection", formData, (respose) => {
      toast.success(respose.data.message)
      getApi('/connections',(resolve)=>{
        setProjects(resolve.data.data)
      })

    })

  }