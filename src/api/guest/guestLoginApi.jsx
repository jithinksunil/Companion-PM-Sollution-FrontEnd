import axiosInstance from '../../instances/axiosInstance';

const guestLoginApi=() =>
    axiosInstance.get('/guest/login')

export default guestLoginApi