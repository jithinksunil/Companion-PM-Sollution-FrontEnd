import axiosInstance from "../../instances/axiosInstance";

const updateImageApi = (formData) =>
    axiosInstance.post("/projectManager/updateimage", formData, { headers: { "Content-Type": "multipart/form-data" } })
export default updateImageApi