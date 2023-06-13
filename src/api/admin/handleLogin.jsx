import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { setAdmin } from "../../store/slices/AdminSlice";
import { toast } from "react-toastify";


export const handleLogin = ({ formData, dispatch, navigate }) => {
  postApi("/admin/login", formData, (response) => {
    const { data, verified, message } = response.data
    if (verified) {
      Cookies.set('adminToken', response.data.token, {domain:`.${process.env.DOMAIN_NAME?.split('://')[1]?.split(':')[0]}`, expires: 7000,sameSite:'Lax'});
      dispatch(setAdmin(data))
      navigate("/admin/dashboard");
    }
    toast(message);
  });
}

