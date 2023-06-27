import axiosInstance from '../../instances/axiosInstance'
export const fetchDashBoard = () =>
    axiosInstance.get("/dashboard" )
export const fetchSiteEngineers = () =>
    axiosInstance.get('/siteengineerlist' )
export const fetchConnections = () =>
    axiosInstance.get("/connections" )
export const fetchProjects = () =>
    axiosInstance.get('/project' )
