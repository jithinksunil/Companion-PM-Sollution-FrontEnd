import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function ProjectManagerTokenCheck(url,setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { projectManagerTokenVerified, message, data } =
        response.data;
      if (!projectManagerTokenVerified) {
        navigate("/projectmanager/login");
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

export default ProjectManagerTokenCheck;
