import axiosInstance from "../../instances/axiosInstance"

export const addTask = (formData, engName, projectId) =>
  axiosInstance.post(`task/add?siteEngineerName=${engName}&projectId=${projectId}`, formData, { withCredentials: true })

export const taskAssignment = (dataObject) => {
  return axiosInstance.post('/task/updateTaskAssignment', dataObject, { withCredentials: true })
}