import React from 'react'
import useSuperUserTokenCheck from '../../customHooks/useSuperUserTokenCheck'
import CommonForm from '../common/CommonForm'
import { handleLogin } from '../../api/superUser/handleLogin'
function SuperUserLogin() {
    useSuperUserTokenCheck('/verifyToken')
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

export default SuperUserLogin
