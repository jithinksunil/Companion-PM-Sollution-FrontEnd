import { toast } from "react-toastify";
import { postApi } from "../axiosCalls";

const handleSignUp = ({ formData, openLoginModalFunction, closeSignUpModalFunction }) => {

  postApi("/signup", formData, (res) => {
    const { message, status } = res.data
    toast(message)
    if (status) {
      closeSignUpModalFunction()
      openLoginModalFunction()
    }
  });

};
export default handleSignUp