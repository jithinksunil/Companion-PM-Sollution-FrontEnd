import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postApi } from "../../api/axiosCalls";
import CommonForm from "../common/CommonForm";

function ProfileUpdate({setIndividual}) {
  const superUser = useSelector((state) => state.superUser.value);
  const [name]=useState(superUser?.name)
  const [email] = useState(superUser?.email)
  const [companyName] = useState(superUser?.companyName)
  const dispatch=useDispatch()

  const handleSubmit = (formData) => {
    postApi('/updateprofile',formData,(response)=>{
      const {status,message,data}=response.data
      if(status){
        dispatch(setIndividual(data))
        toast.success(message)
      }
      else{
        toast.error(message)
      }
    })
  }


  return (
    
    <CommonForm
    formName="Update Profile"
    submitButton="Submi"
    fieldArray={[
      {field:"name",required:true,type:"text",placeHolder:'Name',value:name},
      {field:"companyName",required:true,type:"text",placeHolder:'Company Name',value:companyName},
      {field:"email",required:true,type:"email",validation:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,placeHolder:'Email',value:email},
      {field:"password",required:true,type:"password",validation:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,placeHolder:'Current password'},
  ]}
    submitFunction={handleSubmit}
    />
  )
}

export default  ProfileUpdate
