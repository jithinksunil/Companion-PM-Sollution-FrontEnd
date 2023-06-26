import { useCallback, useContext } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { MyContext } from "../../context/Context"

const useUpdateProfile = (updateProfileApi, setIndividual) => {
    const dispatch =useDispatch()
    const {setLoading}=useContext(MyContext)
    const handleSubmitForm = useCallback((formData) => {
        setLoading(true)
        updateProfileApi(formData).then((response) => {
            const { status, message, data } = response.data
            if (status) {
                dispatch(setIndividual(data))
                toast.success(message)
            }
            else {
                toast.error(message)
            }
        }).catch((err) => {
            toast.error(err.response.data.message||err.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
    return handleSubmitForm
}
export default useUpdateProfile