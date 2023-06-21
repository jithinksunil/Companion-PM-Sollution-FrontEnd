import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get('/siteEngineer/dashboard')
export const fetchMaterialRequest = () =>
    axios.get('/siteEngineer/materialRequest')
export const fetchProjects = () =>
    axios.get('/siteEngineer/projects')
export const fetchTasks = () =>
    axios.get('/siteEngineer/tasks')
export const fetchReports = () =>
    axios.get('/siteEngineer/reports')
