import CommonForm from "../common/CommonForm";
import signUpApi from "../../api/superUser/signUpApi";
import useSignUp from "../../customHooks/superUser/useSignUp";

function SuperUserSignUp({ openLoginModalFunction, closeSignUpModalFunction }) {
  const handleSignUp = useSignUp(signUpApi,closeSignUpModalFunction,openLoginModalFunction)
  return (
    <CommonForm
      formName="Sign up"
      submitButton="Submit"
      fieldArray={[
        { field: "companyName", required: true, type: "text", validation: /^[a-zA-Z0-9]{3,}$/, placeHolder: 'Company Name' },
        { field: "email", required: true, type: "email", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, placeHolder: 'Email' },
        { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'New password', compareId: 'Passwords' },
        { field: "confirmPassword", required: true, type: "text", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Confirm password', compareId: 'Passwords' },
      ]}
      submitFunction={handleSignUp}
    />
  )
}

export default SuperUserSignUp;
