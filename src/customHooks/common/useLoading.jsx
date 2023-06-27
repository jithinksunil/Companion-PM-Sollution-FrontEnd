import { useContext } from 'react'
import { MyContext } from '../../context/Context'

function useLoading() {
    const {setLoading}=useContext(MyContext)
    const startLoading=()=>{
      setLoading(true)
    }
    const stopLoading=()=>{
      setLoading(false)
    }

  return [startLoading,stopLoading]
}

export default useLoading