import axiosInstance from "../../instances/axiosInstance"

const siteEngineerAssignmentApi = (startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex) => {
    const data = {
        startColumn,
        dragStartIndex,
        movingItem,
        endColumn,
        dragEnterIndex
    }
    return axiosInstance.post('/updatesiteengineerassignment', data, {withCredentials:true})
}
export default siteEngineerAssignmentApi 