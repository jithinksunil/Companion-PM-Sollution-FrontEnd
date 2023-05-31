import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function useSuperUserTokenCheck(url,setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { superUserTokenVerified, message,data} = response.data;
      const location=window.location.pathname
      if (superUserTokenVerified) {
        if(setData){
          setData(data)
        }
        if(location=="/login"){
          navigate("/superuser/dashboard");
        }
      }
      else{
        navigate("/");
        if(location!="/"){
          toast.error(message);
        }
      }
    });
  }, []);
}

export default useSuperUserTokenCheck;
