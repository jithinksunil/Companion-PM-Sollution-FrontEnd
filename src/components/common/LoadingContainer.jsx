import { useContext } from 'react'
import Loading from './Loading'
import { MyContext } from '../../context/Context'

function LoadingContainer() {
    const {loading}=useContext(MyContext)
    return (
    <>
        {loading && <Loading />}
    </>
    )
}

export default LoadingContainer