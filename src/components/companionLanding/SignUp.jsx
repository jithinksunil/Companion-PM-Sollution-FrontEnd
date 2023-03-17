import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postApi } from "../../api/axiosCalls"

function SignUp() {

    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const superUserData={email,companyName,password}
    const navigate=useNavigate()

    const handleSignUp=()=>{

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordFormat=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (!emailFormat.test(email)) {
      alert("Please enter a valid email");
    }

    if (!passwordFormat.test(password)) {
      alert("Please enter a alpha numeric password of lenght 6");
    }

    if(confirmPassword!=password){
      alert('password does not matching')
    }

    if(emailFormat.test(email)&&passwordFormat.test(password)&&confirmPassword===password){
      postApi("/signup",superUserData,
        (response)=>{
          alert("SignIn Successful")
          console.log(response.data.status)
          navigate('/login')
        }
      )
    }
      
    }

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl">
    <div className="flex justify-center ">
    <img className="w-32 py-2" src="campanion/companion.png" alt=""/>
    </div>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="email"  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="text"  placeholder="Company Name" onChange={(e)=>{setCompanyName(e.target.value)}}/>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="password"  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      <input className="block my-2 rounded-xl h-9 border-gray-500" required type="text"  placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
      <div className="flex justify-center py-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={handleSignUp} >
            Sign Up
        </button>
      </div>


    </div>
  )
}

export default SignUp

