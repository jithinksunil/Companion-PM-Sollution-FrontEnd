import axiosInstance from "../../instances/axiosInstance";

const updateImageApi = (formData) =>
    axiosInstance.post("/projectManager/updateimage", formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })
export default updateImageApi