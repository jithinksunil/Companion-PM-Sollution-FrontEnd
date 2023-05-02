import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function AdminTokenCheck(url, setState) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { adminTokenVerified, message, adminData } = response.data;
      const location=window.location.pathname
      if (adminTokenVerified) {
        if (setState) {
          setState(adminData);
        }
        if(location=="/admin/login"){
          navigate("/admin/dashboard");
        }

      } else {
        navigate("/admin/login");
        if(location!="/admin/login"){
          toast.error(message);
        }
      }
    });
  }, []);
}

export default AdminTokenCheck;
