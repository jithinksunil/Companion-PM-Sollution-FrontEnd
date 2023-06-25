import React from "react";
import CommonForm from "../../components/common/CommonForm";
import useTokenCheck from '../../customHooks/common/useTokenCheck'
import siteEngineerTokenCheck from "../../api/siteEngineer/siteEngineerTokenCheck";
import useLogin from "../../customHooks/common/useLogin";
import handleLogin from "../../api/siteEngineer/handleLogin";
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";

function SiteEngineerLogginPage() {
  useTokenCheck(siteEngineerTokenCheck, '/siteEngineer/dashboard')
  const handleLoginFunction = useLogin(handleLogin, setSiteEngineer, 'siteEngineerToken', "/siteEngineer/dashboard")
  return (
    <div className="background h-screen">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <CommonForm
          formName="Site engineer"
          submitButton="Login"
          fieldArray={[
            { field: "userName", required: true, type: "text", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/, placeHolder: 'Enter company user name' },
            { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Enter password' },
          ]}
          submitFunction={handleLoginFunction}
        />
      </div>
    </div>
  );
}

export default React.memo(SiteEngineerLogginPage);
