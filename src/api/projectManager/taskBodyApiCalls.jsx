import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"

export const addTask=(engName,formData,setData)=>{

    postApi(`task/add?siteEngineerName=${engName}`, formData, (response) => {
      toast.success(response.data.message)
      if(response.data.data){
        setData(response.data.data)
      }
    })

  }