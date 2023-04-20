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
      if (!siteEngineerTokenVerified) {
        navigate("/siteengineer/login");
        toast.error(message);
      }
      else{
        if(setData){
          setData(data)
        }
      }
    });
  }, []);
}

export default SiteEngineerTokenCheck;
