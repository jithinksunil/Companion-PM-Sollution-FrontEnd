import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";

export const updateProfile = ({formData,dispatch}) => {
    postApi('/siteengineer/updateprofile',formData,(response)=>{
      const {status,message,data}=response.data
      if(status){
        dispatch(setSiteEngineer(data))
        toast.success(message)
      }
      else{
        toast.error(message)
      }
    })
  }