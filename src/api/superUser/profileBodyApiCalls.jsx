import axiosInstance from "../../instances/axiosInstance"

export const superUserUpdateProfileApi = (formData) =>
  axiosInstance.post('/updateprofile', formData   )
  