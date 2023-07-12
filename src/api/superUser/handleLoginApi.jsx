import axiosInstance from "../../instances/axiosInstance";

const handleLoginApi = (formData) => {
  return axiosInstance.post("/login", formData);
};

export const guestLoginApi = () => 
  axiosInstance.get("/login/guest");

export default handleLoginApi;
