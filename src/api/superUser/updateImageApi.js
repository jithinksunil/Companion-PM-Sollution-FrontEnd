import axiosInstance from "../../instances/axiosInstance";

const updateImageApi = (formData) =>
    axiosInstance.post("/updateimage", formData ,{headers: { "Content-Type": "multipart/form-data" }})
export default updateImageApi