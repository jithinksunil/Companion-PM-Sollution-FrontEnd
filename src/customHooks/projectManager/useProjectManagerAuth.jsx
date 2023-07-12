import { useDispatch, useSelector } from "react-redux";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";

const useProjectManagerAuth=()=>{
    const projectManager = useSelector((state) => state.projectManager.value)
    const dispatch=useDispatch()
    const setProjectManagerLogedIn=(projectManager)=>{
        dispatch(setProjectManager(projectManager))
    }
    const setProjectManagerLogedOut=()=>{
        dispatch(setProjectManager(null))
    }
    return {projectManager,setProjectManagerLogedIn,setProjectManagerLogedOut}
}
export default useProjectManagerAuth
