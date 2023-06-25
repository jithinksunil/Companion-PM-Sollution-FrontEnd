import axiosInstance from "../../instances/axiosInstance";

const handleLogin = (formData) =>
    axiosInstance.post("/siteEngineer/login", formData, { withCredentials: true })

export default handleLogin