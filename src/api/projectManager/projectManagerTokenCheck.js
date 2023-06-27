import axiosInstance from "../../instances/axiosInstance";

const projectManagerTokenCheck = () =>
    axiosInstance.get("/projectManager/verifyToken"   )
export default projectManagerTokenCheck