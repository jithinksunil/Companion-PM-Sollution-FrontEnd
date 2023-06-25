import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";


const useLogin = (loginApi, setIndividual, tokenName, navigateTo) => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const handleLoginFunction = useCallback((formData) => {
        loginApi(formData).then((response) => {
            const { data, verified, message, token } = response.data
            if (verified) {
                Cookies.set(tokenName, token, { domain: `.${process.env.REACT_APP_DOMAIN_NAME?.split('://')[1].split(':')[0]}`, expires: 7000, sameSite: 'Lax' });
                dispatch(setIndividual(data))
                navigate(navigateTo);
            }
            toast(message);
        }).catch(()=>
        toast.error('axios-error'))
    },[])
    return handleLoginFunction
}

export default useLogin
