import axios from "../constants/axiosBaseUrl"

export const getApi=(url,resolveCallback,rejectCallback=(err)=>{console.log(err);alert('cannot get now: axios error')})=>{
    axios.get(url,{withCredentials: true}).then(resolveCallback).catch(rejectCallback)
}

export const postApi=(url,body,resolveCallback,rejectCallback=(err)=>{console.log(err);alert('cannot get now: axios error')})=>{
    axios.post(url,body,{withCredentials: true}).then(resolveCallback).catch(rejectCallback)
}
