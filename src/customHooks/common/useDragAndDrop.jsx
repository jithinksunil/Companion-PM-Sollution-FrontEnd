import { useCallback } from "react"
import { toast } from "react-toastify"

const useDragAndDrop=(dragAndDropApi, setData)=>{
    const handleDragAndDrop=useCallback((startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)=>{
        const data = {
            startColumn,
            dragStartIndex,
            movingItem,
            endColumn,
            dragEnterIndex
        }
        console.log(data);
        dragAndDropApi(data).then((res) => {
            const {message,data,status}=res.data
            if(data&&status){
                setData(data)
                toast.success(message)
            }
            else{
                toast.error(message)
            }
        }).catch((err) => {
            toast.error(err.response.data.message||err.message)
        })
    },[])
    return handleDragAndDrop
}

export default useDragAndDrop