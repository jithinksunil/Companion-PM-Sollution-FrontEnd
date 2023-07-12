import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useContext } from "react";
import { MyContext } from "../../context/Context"


const useLogin = (loginApi, setLogedIn, tokenName, navigateTo) => {
    const location=useLocation()
    const redirectPath=location.state?.path||navigateTo
    const {setLoading}=useContext(MyContext)
    const navigate = useNavigate()
    const handleLoginFunction = useCallback((formData) => {
        setLoading(true)
        loginApi(formData).then((response) => {
            const { data, verified, message, token } = response.data
            if (verified) {
                Cookies.set(tokenName, token, { domain: `.${process.env.REACT_APP_DOMAIN_NAME?.split('://')[1].split(':')[0]}`, expires: 7000, sameSite: 'Lax' });
                setLogedIn(data)
                navigate(redirectPath,{replace:true});
                location.state=null
            }
            toast(message);
        }).catch((err) => {
            toast.error(err.response.data.message||err.message)
        }).finally(()=>setLoading(false))
    },[])
    return handleLoginFunction
}

export default useLogin

