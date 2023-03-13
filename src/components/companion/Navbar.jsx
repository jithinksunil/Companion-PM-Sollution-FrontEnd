import { Fragment, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp"

function Navbar() {
  const [list, setList] = useState(true)
  const [signUpPopUp, setSignUpPopUp] = useState(false)
  const [logInPopUp, setLogInPopUp] = useState(false)
  function handleToggle(){
    setList(list=>!list)
  }

  return (
    <Fragment>
      <nav className="md:flex items-center px-3 md:px-10 relative gap-4 shadow-lg">
        <img className="w-28 py-7 md:w-40 md:py-6" src="campanion/companion.png" alt=""/>
          <ul className={`${list&&"hidden"} duration-300 md:flex md:gap-4 pr-10`}>
            <li className="py-1">
              <h5>Why Us</h5>
            </li>
            <li className="py-1">
              <h5>Features</h5>
            </li>
            <li className="py-1">
              <h5>Resources</h5>
            </li>
            <li className="py-1 ">
              <h5>Pricing</h5>
            </li>
            <li className="pt-1 pb-5 md:hidden">
            <h5 onClick={()=>{setLogInPopUp(!logInPopUp);setSignUpPopUp(false)}}>Login</h5>
            </li>
          </ul>

          <div className=" flex absolute right-3 top-5 md:top-auto md:right-10 gap-4" >
            <h1 className="items-center hidden md:flex cursor-pointer hover:border-blue-700  border-2 rounded-3xl px-5" onClick={()=>{setLogInPopUp(!logInPopUp);setSignUpPopUp(false)}}>Login</h1>
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl" onClick={()=>{setSignUpPopUp(!signUpPopUp);setLogInPopUp(false)}}>
              Sign Up for free
            </button>
            <div className=" flex items-center md:hidden" onClick={handleToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </nav>
        {logInPopUp&&<div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0"><Login/></div>}
      {signUpPopUp&&<div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0"><SignUp/></div>}
    </Fragment>
  )
}
 
export default Navbar;
