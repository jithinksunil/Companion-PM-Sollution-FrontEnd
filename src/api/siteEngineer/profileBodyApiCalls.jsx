import axiosInstance from "../../instances/axiosInstance"

export const siteEngineerUpdateProfileApi = (formData) =>
  axiosInstance.post('/siteEngineer/updateProfile', formData  )
  