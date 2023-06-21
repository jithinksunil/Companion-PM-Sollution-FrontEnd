import { toast } from 'react-toastify'

function useSignUp(signUpApi, closeSignUpModalFunction, openLoginModalFunction) {
    const handleSignUp = (formData) => {
        signUpApi(formData).then((res) => {
            const { message, status } = res.data
            toast(message)
            if (status) {
                closeSignUpModalFunction()
                openLoginModalFunction()
            }
        })
    }
    return handleSignUp
}

export default useSignUp