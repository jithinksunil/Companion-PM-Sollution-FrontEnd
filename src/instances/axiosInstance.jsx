import axios from "axios";

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.request.use((request) => {
  request.withCredentials = true
  return request
})


export default axiosInstance;
