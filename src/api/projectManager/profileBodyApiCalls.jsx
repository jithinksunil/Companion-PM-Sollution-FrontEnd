import axiosInstance from "../../instances/axiosInstance"

export const projectManagerUpdateProfileApi = (formData) =>
  axiosInstance.post('/projectManager/updateprofile', formData   )
  

