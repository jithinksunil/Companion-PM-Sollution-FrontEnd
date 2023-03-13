import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import {MyContext} from '../../Context'
import { postApi } from "../../api/axiosCalls"
import Cookies from 'js-cookie';
function Login() {
  const {setSuperUserLoggedIn}=useContext(MyContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const superUserData={email,password}
    const navigate=useNavigate()

    const handleLogin=()=>{
        postApi('/login',superUserData,
            (response)=>{
                if(response.data.verified){
                    Cookies.set('superUserToken', response.data.superUserToken, { expires: 7000 })
                    navigate('/dashboard')
                    setSuperUserLoggedIn(true)
                }
                alert(response.data.message)
            }
        )
    }

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl">
    <div className="flex justify-center ">
    <img className="w-32 py-2" src="campanion/companion.png" alt=""/>
    </div>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="email" name="" id="" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="password" name="" id="" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      <div className="flex justify-center py-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={handleLogin} >
            Login
        </button>
      </div>
    </div>
  )
}
export default Login


