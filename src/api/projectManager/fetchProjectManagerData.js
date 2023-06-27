import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/projectManager/dashboard'   )
export const fetchTasks = () =>
    axios.get("/task"   )
