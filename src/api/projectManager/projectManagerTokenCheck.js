import axiosInstance from "../../instances/axiosInstance";

const projectManagerTokenCheck = () =>
    axiosInstance.get("/projectManager/verifyToken",{ withCredentials: true })
export default projectManagerTokenCheck