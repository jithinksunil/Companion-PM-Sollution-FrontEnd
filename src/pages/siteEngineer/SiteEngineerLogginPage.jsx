import React from "react";
import CommonForm from "../../components/common/CommonForm";
import { handleLogin } from "../../api/siteEngineer/handleLogin";
import useSiteEngineerTokenCheck from '../../customHooks/useSiteEngineerTokenCheck'

function SiteEngineerLogginPage() {
  useSiteEngineerTokenCheck("/siteengineer/verifyToken")
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
          submitFunction={handleLogin}
        />
      </div>
    </div>
  );
}

export default SiteEngineerLogginPage;
