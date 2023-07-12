import React, {  useCallback, useContext, useEffect, useRef, useState } from "react";
import SuperUserSignUp from "../superUser/SuperUserSignUp";
import SuperUserLogin from "../superUser/SuperUserLogin";
import useCreateModal from "../../customHooks/common/useCreateModal"
import { MyContext } from "../../context/Context";

function Navbar() {
  const [hideList, setHideList] = useState(true);
  const [showSignUpModal, openSignUpModalFunction, closeSignUpModalFunction] = useCreateModal('signUp-modal')
  const [showLoginModal, openLoginModalFunction] = useCreateModal('login-modal')
  const { featuresRef, pricingRef, resourceRef } = useContext(MyContext)
  const [showNavBarOnScroll,setShowNavbarOnScroll]=useState(true)
  const scrollRef=useRef(0)
  function handleToggle() {
    setHideList((hideList) => !hideList);
  }

  const scrollHandler=useCallback(()=>{
    const currentScrollY=window.scrollY
    if(scrollRef.current<currentScrollY){
      setShowNavbarOnScroll(false)
    }else{
      setShowNavbarOnScroll(true)
    }
    scrollRef.current=currentScrollY
  },[])
  useEffect(()=>{
    window.addEventListener('scroll',scrollHandler)
    return (()=>{
      window.removeEventListener('scroll',scrollHandler)
    })
  },[])

  return (
    <div className={`fixed z-10 w-full ${showNavBarOnScroll?"mt-0":"-mt-[260px] md:-mt-[75px]"} duration-300`}>
      <nav
        className={`md:flex items-center px-3 md:px-10 relative gap-4 shadow-xl ${hideList ? "h-20" : "h-64"
          } md:h-auto duration-200 text-gray-500 font-bold font-sans bg-white`}
      >
        <img
          className="w-28 py-7 md:w-40 md:py-6 cursor-pointer"
          src="campanion/companion.png"
        />
        <ul
          className={`${hideList ? "hidden" : ""
            } transition-opacity duration-1000 lg:flex md:gap-4 pr-10`}
        >
          <li className="py-1 cursor-pointer hover:text-blue-800  ">
            <h5>Why Us</h5>
          </li>
          <li className="py-1 cursor-pointer hover:text-blue-800" onClick={() => { featuresRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
            <h5>Features</h5>
          </li>
          <li className="py-1 cursor-pointer hover:text-blue-800" onClick={() => { resourceRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
            <h5>Resources</h5>
          </li>
          <li className="py-1 cursor-pointer hover:text-blue-800 " onClick={() => { pricingRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
            <h5>Pricing</h5>
          </li>
          <li className="pt-1 cursor-pointer pb-5 md:hidden">
            <h5
              onClick={openLoginModalFunction}
            >
              Login
            </h5>
          </li>
        </ul>

        <div className=" flex absolute right-3 top-5 md:top-auto md:right-10 gap-4">
          <h1
            className="items-center hidden md:flex cursor-pointer hover:border-blue-700  border-2 rounded-3xl px-5 hover:text-blue-700"
            onClick={openLoginModalFunction}
          >
            Login
          </h1>
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl shadow-lg shadow-blue-600 "
            onClick={openSignUpModalFunction}
          >
            Sign Up for free
          </button>
          <div className=" flex items-center md:hidden" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
      {showLoginModal && (
        <div id="login-modal" className=" fixed md:absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0">
          <SuperUserLogin />
        </div>
      )}
      {showSignUpModal && (
        <div id="signUp-modal" className="fixed md:absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0">
          <SuperUserSignUp openLoginModalFunction={openLoginModalFunction} closeSignUpModalFunction={closeSignUpModalFunction} />
        </div>
      )}
    </div>
  );
}

export default React.memo(Navbar)
