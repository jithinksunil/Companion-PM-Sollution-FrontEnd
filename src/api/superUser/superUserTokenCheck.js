import axiosInstance from "../../instances/axiosInstance";

const superUserTokenCheck = () =>
    axiosInstance.get("/verifyToken",{ withCredentials: true })
export default superUserTokenCheck