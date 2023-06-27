import axiosInstance from "../../instances/axiosInstance"

export const addTask = (formData, engName, projectId) =>
  axiosInstance.post(`task/add?siteEngineerName=${engName}&projectId=${projectId}`, formData )

export const taskAssignment = (dataObject) => {
  return axiosInstance.post('/task/updateTaskAssignment', dataObject )
}