import axiosInstance from "../../instances/axiosInstance"

const addProjectApi = (formData) =>
    axiosInstance.post('/project/create', formData)

export const searchProject = (search, cancelToken) =>
    axiosInstance.get(`/project?search=${search}`, { cancelToken })

export default addProjectApi