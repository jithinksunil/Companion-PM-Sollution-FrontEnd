import { useContext } from 'react'
import Loading from './Loading'
import { MyContext } from '../../context/Context'

function LoadingContainer() {
    const {isLoading}=useContext(MyContext)
    return (
    <>
        {isLoading && <Loading />}
    </>
    )
}

export default LoadingContainer