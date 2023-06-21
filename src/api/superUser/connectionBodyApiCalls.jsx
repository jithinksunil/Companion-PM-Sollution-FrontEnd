import axiosInstance from "../../instances/axiosInstance"

export const addConnectionApi = (formData) =>
  axiosInstance.post("/addConnection", formData, {withCredentials:true})

export const projectDragAndDropApi=(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)=>{
  const data = {
    startColumn,
    dragStartIndex,
    movingItem,
    endColumn,
    dragEnterIndex
  }
  return axiosInstance.post('/updateprojectassignment', data, {withCredentials:true})
}
