import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../api/axiosCalls";
import Login from "../../components/common/Login";
import { MyContext } from "../../context/Context";
import './admin.css'

function AdminLoginPage() {
  const { setAdminLoggedIn } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    const adminToken = Cookies.get("adminToken");
    if (adminToken) {
      getApi("/admin/verifyToken", (response) => {
        if (response.data.adminTokenVerified) {
          navigate("/admin/dashboard");
        }
      });
    }
  }, []);
  return (
    <div className="background h-screen">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <Login
          formName="Admin"
          setIndividual={setAdminLoggedIn}
          url={"/admin/login"}
          tokenName={"adminToken"}
          responseRoute={"/admin/dashboard"}
        />
      </div>
    </div>
  );
}

export default AdminLoginPage;
