import axiosInstance from "../../instances/axiosInstance";

const handleLoginApi = (formData) =>
  axiosInstance.post("/login", formData, {withCredentials:true})
  export default handleLoginApi


