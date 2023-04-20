import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../api/axiosCalls";
import Login from "../../components/common/Login";
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";

function SiteEngineerLogginPage() {

  const navigate = useNavigate()
  
  useEffect(() => {
    const siteEngineerToken = Cookies.get("siteEngineerToken");
    if (siteEngineerToken) {
      getApi("/siteengineer/verifyToken", (response) => {
        if (response.data.siteEngineerTokenVerified) {
          navigate("/siteengineer/dashboard");
        }
      });
    }
  }, []);
  return (
    <div className="background h-screen">
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <Login
          formName="Site Engineer"
          userName
          setIndividual={setSiteEngineer}
          url={"/siteengineer/login"}
          tokenName={"siteEngineerToken"}
          responseRoute={"/siteengineer/dashboard"}
        />
      </div>
    </div>
  );
}

export default SiteEngineerLogginPage;
