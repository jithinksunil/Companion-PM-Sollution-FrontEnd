import CommonForm from "../common/CommonForm";
import signUpApi from "../../api/superUser/signUpApi";
import useSignUp from "../../customHooks/superUser/useSignUp";
import React from "react";

function SuperUserSignUp({ openLoginModalFunction, closeSignUpModalFunction }) {
  const handleSignUp = useSignUp(
    signUpApi,
    closeSignUpModalFunction,
    openLoginModalFunction
  );
  return (
    <CommonForm
      formName="Sign up"
      submitButton="Submit"
      fieldArray={[
        {
          field: "companyName",
          required: true,
          type: "text",
          validation: /^[a-zA-Z0-9]{3,}$/,
          placeHolder: "Company Name",
        },
        {
          field: "email",
          required: true,
          type: "email",
          validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          placeHolder: "Email",
        },
        {
          field:"password",
          required: true,
          type: "password",
          validation:
            /^(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?])(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
          placeHolder: "New password",
          compareId: "Passwords",
        },
        {
          field: "confirmPassword",
          required: true,
          type: "text",
          placeHolder: "Confirm password",
          compareId: "Passwords",
        },
      ]}
      submitFunction={handleSignUp}
    />
  );
}

export default React.memo(SuperUserSignUp);
