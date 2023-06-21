import axiosInstance from '../../instances/axiosInstance'
const siteEngineerTokenCheck=()=>
axiosInstance.get('/siteEngineer/verifyToken', {withCredentials:true})
export default siteEngineerTokenCheck