import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { setSuperUser } from "../../store/slices/SuperUserSice";
import { toast } from "react-toastify";


export const handleLogin=({formData,dispatch,navigate})=>{
    postApi("/login", formData, (response) => {
        const {data,verified,message}=response.data
        if (verified) {
          Cookies.set('superUserToken', response.data.token, { expires: 7000 });
          dispatch(setSuperUser(data))
          navigate("/superuser/dashboard");
        }
        toast(message);
      });
}

