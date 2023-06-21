import axiosInstance from "../../instances/axiosInstance";

const adminTokenCheck = () =>
    axiosInstance.get("/admin/verifyToken")
export default adminTokenCheck