import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const useUpdateProfile = (updateProfileApi, setIndividual) => {
    const dispatch =useDispatch()
    const handleSubmitForm = useCallback((formData) => {
        updateProfileApi(formData).then((response) => {
            const { status, message, data } = response.data
            if (status) {
                dispatch(setIndividual(data))
                toast.success(message)
            }
            else {
                toast.error(message)
            }
        }).catch(() => {
            toast.error('Axios Error')
        })
    },[])
    return handleSubmitForm
}
export default useUpdateProfile