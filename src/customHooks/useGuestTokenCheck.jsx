import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../api/axiosCalls";

function useGuestTokenCheck(url, setData) {
  const navigate = useNavigate();
  useEffect(() => {
    getApi(url, (response) => {
      const { guestTokenVerified, message, data } = response.data;
      if (guestTokenVerified) {
        if (setData) {
          setData(data)
        }
      }
      else {
        navigate("/");
      }
      toast(message)
    });
  }, []);
}

export default useGuestTokenCheck;
