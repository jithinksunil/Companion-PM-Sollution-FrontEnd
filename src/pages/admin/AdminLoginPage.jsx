import React from "react";
import './admin.css'
import CommonForm from "../../components/common/CommonForm";
import { handleLogin } from "../../api/admin/handleLogin";
import useAdminTokenCheck from '../../customHooks/useAdminTokenCheck'

function AdminLoginPage() {
  useAdminTokenCheck("/admin/verifyToken")
  return (
    <div className="background h-screen">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <CommonForm
          formName="Admin"
          submitButton="Login"
          fieldArray={[
            { field: "email", required: true, type: "email", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, placeHolder: 'Enter an email' },
            { field: "password", required: true, type: "password", validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, placeHolder: 'Enter password' },
          ]}
          submitFunction={handleLogin}
        />
      </div>
    </div>
  );
}

export default AdminLoginPage;
