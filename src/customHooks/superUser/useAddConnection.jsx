import { useCallback } from "react"
import { toast } from "react-toastify"

const useAddConnection = (addConnectionApi, setProjects) => {
    const handleAddConnection = useCallback((formData) => {
        addConnectionApi(formData).then((response) => {
            const { data, message,status } = response.data
            if(status){
                if(data){
                    setProjects(data)
                }
                toast.success(message)
            }else{
                toast.error(message)
            }
        }).catch(()=>
        toast.error('axios-error'))
    },[])
    return handleAddConnection
}
export default useAddConnection