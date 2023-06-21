import axiosInstance from "../../instances/axiosInstance"

const addProjectApi = (formData) =>
    axiosInstance.post('/project/create', formData)

export default addProjectApi