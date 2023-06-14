import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { setSuperUser } from "../../store/slices/SuperUserSice";
import { toast } from "react-toastify";

export const handleLogin = ({ formData, dispatch, navigate }) => {
  postApi("/login", formData, (response) => {
    const { data, verified, message } = response.data
    if (verified) {
      // document.cookie=`superUserToken=${response.data.token};max-age=604800;SameSite=None;Secure`
      Cookies.set('superUserToken', response.data.token, {domain:`.${process.env.REACT_APP_DOMAIN_NAME?.split('://')[1].split(':')[0]}`, expires: 7000,sameSite:'Lax'});
      dispatch(setSuperUser(data))
      navigate("/superuser/dashboard");



    }
    toast(message);
  });
}

