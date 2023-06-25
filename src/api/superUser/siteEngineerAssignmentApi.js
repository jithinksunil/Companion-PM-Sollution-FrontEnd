import axiosInstance from "../../instances/axiosInstance"

const siteEngineerAssignmentApi = (dataObject) => {
    return axiosInstance.post('/updatesiteengineerassignment', dataObject, {withCredentials:true})
}
export default siteEngineerAssignmentApi 