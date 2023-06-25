import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function useTokenCheck(tokenCheckApi,navigateTo) {
    const navigate = useNavigate()
    useEffect(() => {
        tokenCheckApi().then((res) => {
            const { tokenVerified } = res.data
            if (tokenVerified)
                navigate(navigateTo)
        }).catch(() => {
            toast.error('axios error')
        })
    },[])
}

export default useTokenCheck