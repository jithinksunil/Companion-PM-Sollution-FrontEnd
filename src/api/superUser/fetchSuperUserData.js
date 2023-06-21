import axios from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axios.get("/dashboard", { withCredentials: true })
export const fetchSiteEngineers = () =>
    axios.get('/siteengineerlist', { withCredentials: true })
export const fetchConnections = () =>
    axios.get("/connections", { withCredentials: true })
export const fetchProjects = () =>
    axios.get('/project', { withCredentials: true })
