import { useCallback, useContext } from "react"
import { toast } from "react-toastify"
import { MyContext } from "../../context/Context"

const useAddConnection = (addConnectionApi, setProjects) => {
    const {setLoading}=useContext(MyContext)
    const handleAddConnection = useCallback((formData) => {
        setLoading(true)
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
        toast.error('axios-error')
        ).finally(()=>setLoading(false))
    },[])
    return handleAddConnection
}
export default useAddConnection