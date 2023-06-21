import axiosInstance from "../../instances/axiosInstance";

const handleLogin = (formData) =>
axiosInstance.post("/admin/login", formData)

export default handleLogin

