import React from 'react'
import SuperUserTokenCheck from '../../customHooks/SuperUserTokenCheck'
import CommonForm from '../common/CommonForm'
import { handleLogin } from '../../api/superUser/handleLogin'
function SuperUserLoginPage() {
    SuperUserTokenCheck('/verifyToken')
  return (
    <div>
    <CommonForm
    formName="Super User"
    submitButton="Login"
    fieldArray={[
      {field:"email",required:true,type:"email",validation:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,placeHolder:'Enter an email'},
      {field:"password",required:true,type:"password",validation:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,placeHolder:'Enter password'},
  ]}
    submitFunction={handleLogin}
    />
    </div>
  )
}

export default SuperUserLoginPage
