import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/admin/dashboard')
export const fetchProfile = () =>
    axios.get("/admin/profile")

