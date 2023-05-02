import Cookies from "js-cookie";
import { postApi } from "../axiosCalls";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import { toast } from "react-toastify";


export const handleLogin=({formData,dispatch,navigate})=>{
    postApi("/projectmanager/login", formData, (response) => {
        const {data,verified,message}=response.data
        if (verified) {
          Cookies.set('projectManagerToken', response.data.token, { expires: 7000 });
          dispatch(setProjectManager(data))
          navigate("/projectmanager/dashboard");
        }
        toast(message);
      });
}

