import axios from "axios";

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

axiosInstance.interceptors.request.use((request) => {
  request.withCredentials = true
  return request
})


export default axiosInstance;
