import axiosInstance from "../../instances/axiosInstance";

const signUpApi = (formData) =>
  axiosInstance.post("/signup", formData)
export default signUpApi