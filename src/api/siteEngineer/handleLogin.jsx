import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { toast } from "react-toastify";
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";


export const handleLogin = ({ formData, dispatch, navigate }) => {
  postApi("/siteengineer/login", formData, (response) => {
    const { data, verified, message } = response.data
    if (verified) {
      Cookies.set('siteEngineerToken', response.data.token, {domain:`.${process.env.DOMAIN_NAME?.split('://')[1]?.split(':')[0]}`, expires: 7000,sameSite:'Lax'});
      dispatch(setSiteEngineer(data))
      navigate("/siteengineer/dashboard");
    }
    toast(message);
  });
}

