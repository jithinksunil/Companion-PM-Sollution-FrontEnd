import { useDispatch, useSelector } from "react-redux";
import { setSuperUser } from "../../store/slices/SuperUserSice";

const useSuperUserAuth=()=>{
    const superUser = useSelector((state) => state.superUser.value)
    const dispatch=useDispatch()
    const setSuperUserLogedIn=(superUser)=>{
        dispatch(setSuperUser(superUser))
    }
    const setSuperUserLogedOut=()=>{
        dispatch(setSuperUser(null))
    }
    return {superUser,setSuperUserLogedIn,setSuperUserLogedOut}
}
export default useSuperUserAuth
