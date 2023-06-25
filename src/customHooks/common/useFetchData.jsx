import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function useFetchData(fetchDataFunction, navigateTo, navigateToWhenNotVerified, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue)
  const navigate = useNavigate()
  useEffect(() => {
    fetchDataFunction().then((res) => {
      const { message, data, tokenVerified } = res.data
      if (tokenVerified) {
        setFetchedData(data)
        navigate(navigateTo)
      }else{
        navigate(navigateToWhenNotVerified)
        toast.error(message)
      }
    }).catch(() => {
      toast.error('axios error')
    })
  },[])
  return [fetchedData, setFetchedData]
}

export default useFetchData