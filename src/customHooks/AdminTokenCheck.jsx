import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function AdminTokenCheck(url, setState) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { adminTokenVerified, message, adminData } = response.data;
      if (adminTokenVerified) {
        if (setState) {
          setState(adminData);
        }
      } else {
        navigate("/admin/login");
        toast.error(message);
      }
    });
  }, []);
}

export default AdminTokenCheck;
