import Cookies from "js-cookie";
import { getApi } from "../axiosCalls";
import { toast } from "react-toastify";

export const handleLogout = (logoutObject, navigate) => {
  logoutObject.setLogedOut()
  getApi("/logout", (response) => {
    if (response.status) {
      Cookies.remove(logoutObject.token);
      toast.success(response.data.message);
      navigate(logoutObject.link);
    }
  });
}