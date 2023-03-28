import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function SuperUserTokenCheck(url, setSuperUser) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getApi(url, (response) => {
      const { superUserTokenVerified, message, superUserData } = response.data;
      if (superUserTokenVerified) {
        dispatch(setSuperUser(superUserData));
      } else {
        navigate("/login");
        toast.error(message);
      }
    });
  }, []);
}

export default SuperUserTokenCheck;
