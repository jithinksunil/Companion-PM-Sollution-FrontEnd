import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"

export const addTask = (engName, formData, setData, projectId) => {
  postApi(`task/add?siteEngineerName=${engName}&projectId=${projectId}`, formData, (response) => {
    toast.success(response.data.message)
    if (response.data.data) {
      setData(response.data.data)
    }
  })
}

export const taskAssignment = (startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex, setData) => {
  const data = { startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex }
  postApi('/task/updatetaskassignment', data, (res) => {
    setData(res.data.data)
    toast.success(res.data.message)
  })
}