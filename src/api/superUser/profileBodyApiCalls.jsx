import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"
import { setSuperUser } from "../../store/slices/SuperUserSice";

export const handleSubmit = ({formData,dispatch}) => {
    postApi('/updateprofile',formData,(response)=>{
      const {status,message,data}=response.data
      if(status){
        dispatch(setSuperUser(data))
        toast.success(message)
      }
      else{
        toast.error(message)
      }
    })
  }