import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/projectManager/dashboard',{ withCredentials: true })
export const fetchTasks = () =>
    axios.get("/task",{ withCredentials: true })
