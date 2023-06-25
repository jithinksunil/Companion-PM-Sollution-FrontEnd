import { useCallback } from "react"
import { toast } from "react-toastify"

function useAddProject(addProjectApi, setProjects) {
    const handleSubmit = useCallback((formData) => {
        addProjectApi(formData).then((resolve) => {
            const { data, message,status } = resolve.data
            if(status&&data){
                setProjects(data)
                toast.success(message)
            }else{
                toast.error(message)
            }
        }).catch(()=>{
            toast.error('axios error')
        })
    },[])
    return handleSubmit
}

export default useAddProject