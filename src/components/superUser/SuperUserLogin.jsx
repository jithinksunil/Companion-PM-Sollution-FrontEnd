import React from 'react'
import CommonForm from '../common/CommonForm'
import useTokenCheck from '../../customHooks/common/useTokenCheck'
import adminTokenCheck from '../../api/superUser/superUserTokenCheck'
import handleLoginApi from '../../api/superUser/handleLoginApi'
import useLogin from '../../customHooks/common/useLogin'
import { setSuperUser } from "../../store/slices/SuperUserSice";

function SuperUserLogin() {
  useTokenCheck(adminTokenCheck,"/superUser/dashboard")
  const handleLogin=useLogin(handleLoginApi,setSuperUser,'superUserToken',"/superUser/dashboard")
  return (
    <div>
      <CommonForm
        formName="Super User"
        submitButton="Login"
        fieldArray={[
          { field: "email", required: true, type: "email", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, placeHolder: 'Enter an email' },
          { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Enter password' },
        ]}
        submitFunction={handleLogin}
      />
    </div>
  )
}

export default SuperUserLogin
