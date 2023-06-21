import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"
import axiosInstance from "../../instances/axiosInstance"

export const addTask = (formData, engName, projectId) =>
axiosInstance.post(`task/add?siteEngineerName=${engName}&projectId=${projectId}`, formData,{ withCredentials: true })

export const taskAssignment = (startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex, setData) => {
  const data = { startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex }
  postApi('/task/updatetaskassignment', data, (res) => {
    setData(res.data.data)
    toast.success(res.data.message)
  })
}