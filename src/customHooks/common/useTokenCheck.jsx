import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function useTokenCheck(tokenCheckApi, navigateTo) {
    const navigate = useNavigate()
    useEffect(() => {
        tokenCheckApi().then((res) => {
            const { tokenVerified, message } = res.data
            if (tokenVerified) {
                toast.success(message)
                navigate(navigateTo)
            }
        }).catch((err) => {
            console.log(err.response.data.message || err.message)
        })
    }, [])
}

export default useTokenCheck