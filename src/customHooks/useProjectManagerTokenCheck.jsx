import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function useProjectManagerTokenCheck(url,setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { projectManagerTokenVerified, message, data } =
        response.data;
        const location=window.location.pathname
      if (projectManagerTokenVerified) {
        if(setData){
          setData(data)
        }
        if(location=="/projectmanager/login"){
          navigate("/projectmanager/dashboard");
        }
      }
      else{
        navigate("/projectmanager/login");
        if(location!="/projectmanager/login"){
          toast.error(message);
        }
      }
    })
  }, []);
}

export default useProjectManagerTokenCheck;
