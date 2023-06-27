import axiosInstance from "../../instances/axiosInstance";

const handleClick = (id, status) =>
  axiosInstance.get(`/admin/blockorunblock?id=${id}&status=${status}`)

export const searchUserApi = (search, cancelToken) =>
  axiosInstance.get(`/admin/superusermanagement?search=${search}`, { cancelToken })
export default handleClick