import { useSelector } from "react-redux";
import CommonForm from "../common/CommonForm";
import { handleSubmit } from "../../api/superUser/profileBodyApiCalls";

function SuperUserProfileUpdate() {
  const superUser = useSelector((state) => state.superUser.value)
  const formValues={name:superUser.name,email:superUser.email,companyName:superUser.companyName}
  
  return (
    
    <CommonForm
    formName="Update Profile"
    submitButton="Submit"
    fieldArray={[
      {field:"name",required:true,type:"text",placeHolder:'Name'},
      {field:"companyName",required:true,type:"text",placeHolder:'Company Name'},
      {field:"email",required:true,type:"email",validation:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,placeHolder:'Email'},
      {field:"password",required:true,type:"password",validation:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,placeHolder:'Current password'},
  ]}
    submitFunction={handleSubmit}
    formValues={formValues}
    />
  )
}

export default  SuperUserProfileUpdate
