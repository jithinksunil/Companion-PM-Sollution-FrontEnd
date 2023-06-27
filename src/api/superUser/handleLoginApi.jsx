import axiosInstance from "../../instances/axiosInstance";

const handleLoginApi = (formData) =>{
  
  return axiosInstance.post("/login", formData)
}
  export default handleLoginApi


