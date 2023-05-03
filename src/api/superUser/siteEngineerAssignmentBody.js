import { toast } from "react-toastify"
import { postApi } from "../axiosCalls"

export const siteEngineerAssignment=(startColumn,dragStartIndex,movingItem,endColumn,dragEnterIndex,setData)=>{
    const data = {
        startColumn,
        dragStartIndex,
        movingItem,
        endColumn,
        dragEnterIndex
    }
    postApi('/updatesiteengineerassignment', data, (res) => {
        setData(res.data.data)
        toast.success(res.data.message)
    })
}