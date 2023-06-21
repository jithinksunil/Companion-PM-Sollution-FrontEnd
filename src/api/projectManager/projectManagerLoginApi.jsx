import axiosInstance from "../../instances/axiosInstance";

const projectManagerLoginApi = (formData) =>
axiosInstance.post("/projectManager/login",formData,{ withCredentials: true })
export default projectManagerLoginApi

