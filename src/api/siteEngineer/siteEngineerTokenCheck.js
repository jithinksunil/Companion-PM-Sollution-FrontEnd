import axiosInstance from '../../instances/axiosInstance'
const siteEngineerTokenCheck=()=>
axiosInstance.get('/siteEngineer/verifyToken'  )
export default siteEngineerTokenCheck