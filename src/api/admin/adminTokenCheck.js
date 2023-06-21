import axiosInstance from "../../instances/axiosInstance";

const adminTokenCheck = () =>
    axiosInstance.get("/admin/verifyToken", {withCredentials:true})
export default adminTokenCheck