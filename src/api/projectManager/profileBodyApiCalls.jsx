import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";

export const updateProfile = ({formData,dispatch}) => {
    postApi('/projectmanager/updateprofile',formData,(response)=>{
      const {status,message,data}=response.data
      if(status){
        dispatch(setProjectManager(data))
        toast.success(message)
      }
      else{
        toast.error(message)
      }
    })
  }