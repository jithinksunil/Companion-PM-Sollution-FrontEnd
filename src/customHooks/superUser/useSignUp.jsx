import { useCallback, useContext } from 'react'
import { toast } from 'react-toastify'
import { MyContext } from '../../context/Context'

function useSignUp(signUpApi, closeSignUpModalFunction, openLoginModalFunction) {
    const {setLoading}=useContext(MyContext)
    const handleSignUp = useCallback((formData) => {
        setLoading(true)
        signUpApi(formData).then((res) => {
            const { message } = res.data
            toast.success(message)
            closeSignUpModalFunction()
            openLoginModalFunction()
        }).catch((err)=>{
            toast.error(err.response.data.message||err.message)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
    return handleSignUp
}

export default useSignUp