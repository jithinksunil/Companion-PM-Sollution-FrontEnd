import axiosInstance from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axiosInstance.get("/dashboard", { withCredentials: true })
export const fetchSiteEngineers = () =>
    axiosInstance.get('/siteengineerlist', { withCredentials: true })
export const fetchConnections = () =>
    axiosInstance.get("/connections", { withCredentials: true })
export const fetchProjects = () =>
    axiosInstance.get('/project', { withCredentials: true })
