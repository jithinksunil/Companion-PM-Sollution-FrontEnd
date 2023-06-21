import React, { Fragment } from "react";
import useAnimate from "../../customHooks/common/useAnimate";
import guestLoginApi from "../../api/guest/guestLoginApi";
import useLogin from "../../customHooks/common/useLogin";
import { setGuest } from '../../store/slices/GuestSlice'


function Banner() {
  const [showBannerImage,ref]=useAnimate(false)
  const handleLoginFunction=useLogin(guestLoginApi,setGuest,'guestToken','/guest/dashboard')
  return (
    <Fragment>
      <div ref={ref} className="bg-gray-200 px-4 grid md:grid-cols-2 md:flex md:items-center pt-24 md:pt-36 md:px-10 font-sans overflow-hidden">
        <div>
          <p className="text-center text-gray-600 pb-5 text-4xl md:text-5xl font-bold">
            Transform your PMO vision into reality
          </p>
          <p className="text-center text-xl text-gray-500 pb-2">
            Align your strategy with execution for end-to-end success. Companion
            connects every part of your PMO — all in one place.
          </p>
          <div className="flex justify-center pb-10">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-3xl shadow-blue-700 shadow-xl "
            onClick={()=>{handleLoginFunction()}}
            >
              Try as Guest
            </button>
          </div>
        </div>
        <div className={`${showBannerImage?"md:mr-0":"md:-mr-[600px]"} duration-1000`}>
          <img
            className=""
            src="./images/banner/hero-image-left-pmo-600x382.png"
            alt=""
          />
        </div>
      </div>
      <svg viewBox="0 0 500 75" preserveAspectRatio="xMinYMin meet">
        <path d="M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z" style={{ fill: 'rgb(229 231 235)' }}></path>
    </svg>
    </Fragment>
  );
}

export default Banner;
