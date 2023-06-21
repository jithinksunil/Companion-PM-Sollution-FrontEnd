import { toast } from "react-toastify"

const useDragAndDrop=(dragAndDropApi, setData)=>{
    const handleDragAndDrop=(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)=>{
        dragAndDropApi(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex).then((res) => {
            setData(res.data.data)
            toast.success(res.data.message)
        })
    }
    return handleDragAndDrop
}

export default useDragAndDrop