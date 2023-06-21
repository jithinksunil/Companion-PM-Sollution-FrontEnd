import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/admin/dashboard', {withCredentials:true})
export const fetchProfile = () =>
    axios.get("/admin/profile", {withCredentials:true})

