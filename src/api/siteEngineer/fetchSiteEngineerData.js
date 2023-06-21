import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/siteEngineer/dashboard', {withCredentials:true})
export const fetchMaterialRequest = () =>
    axios.get('/siteEngineer/materialRequest', {withCredentials:true})
export const fetchProjects = () =>
    axios.get('/siteEngineer/projects', {withCredentials:true})
export const fetchTasks = () =>
    axios.get('/siteEngineer/tasks', {withCredentials:true})
export const fetchReports = () =>
    axios.get('/siteEngineer/reports', {withCredentials:true})
