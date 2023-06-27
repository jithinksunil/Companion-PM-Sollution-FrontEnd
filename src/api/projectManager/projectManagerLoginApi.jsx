import axiosInstance from "../../instances/axiosInstance";

const projectManagerLoginApi = (formData) =>
axiosInstance.post("/projectManager/login",formData   )
export default projectManagerLoginApi

