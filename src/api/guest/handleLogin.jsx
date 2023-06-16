import { setGuest } from '../../store/slices/GuestSlice'
import { toast } from 'react-toastify';
import { getApi } from '../axiosCalls';
import Cookies from 'js-cookie';

function handleLogin({ navigate, dispatch }) {
    getApi('/guest/login', (res) => {
        const { status, guest, guestToken, message } = res.data
        if (status) {
            if(guestToken){
                Cookies.set('guestToken', guestToken, { domain: `.${process.env.REACT_APP_DOMAIN_NAME?.split('://')[1].split(':')[0]}`, expires:1, sameSite: 'Lax' });
            }
            dispatch(setGuest(guest))
            navigate('/guest/dashboard')
        }
        toast(message)
    })
}

export default handleLogin