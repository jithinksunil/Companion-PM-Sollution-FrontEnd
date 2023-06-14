import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import { toast } from "react-toastify";


export const handleLogin = ({ formData, dispatch, navigate }) => {
  postApi("/projectmanager/login", formData, (response) => {
    const { data, verified, message } = response.data
    if (verified) {
      Cookies.set('projectManagerToken', response.data.token, {domain:`.${process.env.REACT_APP_DOMAIN_NAME?.split('://')[1].split(':')[0]}`, expires: 7000,sameSite:'Lax'});
      dispatch(setProjectManager(data))
      navigate("/projectmanager/dashboard");
    }
    toast(message);
  });
}

