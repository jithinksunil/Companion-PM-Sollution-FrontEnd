import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MyContext } from '../../context/Context'

function useFetchData(fetchDataFunction, navigateToWhenNotVerified, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue)
  const {setLoading}=useContext(MyContext)
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    fetchDataFunction().then((res) => {
      const { data,message } = res.data
      if (data) {
        setFetchedData(data)
      }
      toast.warning(message)
    }).catch((err) => {
      toast.error(err.response.data.message||err.message)
      navigate(navigateToWhenNotVerified)
  }).finally(()=>setLoading(false))
  },[])
  return [fetchedData, setFetchedData]
}

export default useFetchData