import React from 'react';
import CommonForm from '../common/CommonForm';
import useTokenCheck from '../../customHooks/common/useTokenCheck';
import adminTokenCheck from '../../api/superUser/superUserTokenCheck';
import handleLoginApi from '../../api/superUser/handleLoginApi';
import useLogin from '../../customHooks/common/useLogin';
import useSuperUserAuth from '../../customHooks/superUser/useSuperUserAuth';

function SuperUserLogin() {
  const { setSuperUserLogedIn } = useSuperUserAuth();
  useTokenCheck(adminTokenCheck, '/superUser/dashboard');
  const handleLogin = useLogin(
    handleLoginApi,
    setSuperUserLogedIn,
    'superUserToken',
    '/superUser/dashboard'
  );
  return (
    <div>
      <CommonForm
        formName='Super User'
        submitButton='Login'
        fieldArray={[
          {
            field: 'email',
            required: true,
            type: 'email',
            validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            placeHolder: 'Enter an email',
          },
          {
            field: 'password',
            required: true,
            type: 'password',
            validation:
              /^(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?])(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
            placeHolder: 'Enter password',
          },
        ]}
        submitFunction={handleLogin}
      />
    </div>
  );
}

export default React.memo(SuperUserLogin);
