import { toast } from "react-toastify"

const useAddConnection = (addConnectionApi, setProjects) => {
    const handleAddConnection = (formData) => {
        addConnectionApi(formData).then((response) => {
            const { data, message } = response.data
            setProjects(data)
            toast.success(message)
        }).catch(()=>
        toast.error('axios-error'))
    }
    return handleAddConnection
}
export default useAddConnection