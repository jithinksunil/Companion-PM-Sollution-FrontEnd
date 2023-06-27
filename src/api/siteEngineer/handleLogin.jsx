import axiosInstance from "../../instances/axiosInstance";

const handleLogin = (formData) =>
    axiosInstance.post("/siteEngineer/login", formData )

export default handleLogin