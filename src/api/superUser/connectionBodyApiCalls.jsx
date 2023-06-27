import axiosInstance from "../../instances/axiosInstance"

export const addConnectionApi = (formData) =>
  axiosInstance.post("/addConnection", formData)

export const projectDragAndDropApi=(dataObject)=>{
  return axiosInstance.post('/updateprojectassignment', dataObject)
}
