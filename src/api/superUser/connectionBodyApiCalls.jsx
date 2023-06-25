import axiosInstance from "../../instances/axiosInstance"

export const addConnectionApi = (formData) =>
  axiosInstance.post("/addConnection", formData, {withCredentials:true})

export const projectDragAndDropApi=(dataObject)=>{
  return axiosInstance.post('/updateprojectassignment', dataObject, {withCredentials:true})
}
