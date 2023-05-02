import CommonForm from "../common/CommonForm";
import handleSignUp from "../../api/superUser/handleSignUp";

function SignUp() {
  return (
    
    <CommonForm
    formName="Sign up"
    submitButton="Submit"
    fieldArray={[
      {field:"companyName",required:true,type:"text",validation:/^[a-zA-Z0-9]{3,}$/,placeHolder:'Company Name'},
      {field:"email",required:true,type:"email",validation:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,placeHolder:'Email'},
      {field:"password",required:true,type:"password",validation:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,placeHolder:'New password'},
      {field:"confirmPassword",required:true,type:"text",validation:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,placeHolder:'Confirm password'},
  ]}
    submitFunction={handleSignUp}
    />
  )
}

export default SignUp;
