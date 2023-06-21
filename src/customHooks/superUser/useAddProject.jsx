import { toast } from "react-toastify"

function useAddProject(addProjectApi, setProjects) {
    const handleSubmit = (formData) => {
        addProjectApi(formData).then((resolve) => {
            const { data, message } = resolve.data
            setProjects(data)
            toast.success(message)
        }).catch(()=>{
            toast.error('axios error')
        })
    }
    return handleSubmit
}

export default useAddProject