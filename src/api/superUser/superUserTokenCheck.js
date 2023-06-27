import axiosInstance from "../../instances/axiosInstance";

const superUserTokenCheck = () =>
    axiosInstance.get("/verifyToken"   )
export default superUserTokenCheck