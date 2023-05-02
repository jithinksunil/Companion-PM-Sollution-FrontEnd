import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function SiteEngineerTokenCheck(url,setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { siteEngineerTokenVerified, message, data } =
        response.data;
        const location=window.location.pathname
      if (siteEngineerTokenVerified) {
        if(setData){
          setData(data)
        }
        if(location=="/siteengineer/login"){
          navigate("/siteengineer/dashboard");
        }
      }
      else{
        navigate("/siteengineer/login");
        if(location!="/siteengineer/login"){
          toast.error(message);
        }
      }
    });
  }, []);
}

export default SiteEngineerTokenCheck;
