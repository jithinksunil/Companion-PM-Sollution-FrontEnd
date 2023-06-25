import { toast } from "react-toastify"

const useDragAndDrop=(dragAndDropApi, setData)=>{
    const handleDragAndDrop=(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)=>{
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
        }).catch(()=>
        toast.error('axios-error'))
    }
    return handleDragAndDrop
}

export default useDragAndDrop