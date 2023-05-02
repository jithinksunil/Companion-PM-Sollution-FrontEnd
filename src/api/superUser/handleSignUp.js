import { toast } from "react-toastify";
import { postApi } from "../axiosCalls";

const handleSignUp = ({formData,navigate}) => {
    
      postApi("/signup", formData, () => {
        toast("SignIn Successful");
        navigate("/login");
      });

  };
export default handleSignUp