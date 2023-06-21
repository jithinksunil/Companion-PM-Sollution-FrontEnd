import axiosInstance from "../../instances/axiosInstance";

const handleClick = (id,status) =>
  axiosInstance.get(`/admin/blockorunblock?id=${id}&status=${status}`)
export default handleClick