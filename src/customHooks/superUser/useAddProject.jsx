import { useCallback, useContext } from "react"
import { toast } from "react-toastify"
import { MyContext } from "../../context/Context"

function useAddProject(addProjectApi, setProjects) {
    const {setLoading}=useContext(MyContext)
    const handleSubmit = useCallback((formData) => {
        setLoading(true)
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
        }).finally(()=>setLoading(false))
    },[])
    return handleSubmit
}

export default useAddProject