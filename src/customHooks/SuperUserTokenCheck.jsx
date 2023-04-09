import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function SuperUserTokenCheck(url,setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { superUserTokenVerified, message,data} = response.data;
      if (superUserTokenVerified) {
        if(setData){
          if(data){
            setData(data)
          }else{
            toast.error(message);
          }
        } 
      }
      else{
        navigate("/login");
        toast.error(message);
      }
    });
  }, []);
}

export default SuperUserTokenCheck;
