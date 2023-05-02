import { toast } from "react-toastify"
import { getApi, postApi } from "../axiosCalls"

export const addConnection=(formData,setProjects)=>{

    postApi("/addConnection", formData, (respose) => {
      toast.success(respose.data.message)
      getApi('/connections',(resolve)=>{
        setProjects(resolve.data.data)
      })

    })

  }

  export function projectDragAndDrop(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex,setProjects) {
    const data = {
        startColumn,
        dragStartIndex,
        movingItem,
        endColumn,
        dragEnterIndex
    }
    postApi('/updateprojectassignment', data, (res) => {
        setProjects(res.data.data)
        toast.success(res.data.message)
    })

}