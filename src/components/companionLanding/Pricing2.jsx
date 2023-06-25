import React, { Fragment, useContext } from "react";
import MainButton from "./MainButton";
import useAnimate from "../../customHooks/common/useAnimate";
import { MyContext } from "../../context/Context";

function Pricing() {
  const [showPricing,ref]=useAnimate(false)
  const {pricingRef}=useContext(MyContext)
  return (
    <Fragment>
      <svg viewBox="0 0 500 75" preserveAspectRatio="xMinYMin meet" className="md:-mt-12">
        <path d="M0,25 C150,-25 350,75 500,25 L500,75 L0,75 Z" style={{ fill: 'rgb(229 231 235)' }}></path>
      </svg>

      <div  className="flex justify-center bg-gray-200 pb-8 md:pb-28 font-sans">
        <div ref={ref} className="grid md:grid-cols-3 ">
          <div ref={pricingRef}  className={`bg-white mx-1 my-5 pt-10 pb-10 px-4 w-64 sm:w-60  md:w-64 ${showPricing ? "ml-0" : "-ml-[1800px]"} duration-1000 trasform hover:scale-110 hover:duration-300 hover:mx-4 hover:shadow-2xl`}>
            <div className="h-80">
              <h1 className="font-bold text-5xl text-gray-600 py-2">Free</h1>
              <p className="text-2xl font-semibold text-sky-500 my-2">Basic Features</p>
              <p className="text-lg font-medium text-gray-500 ">Simple tasks</p>
              <p className="text-lg font-medium text-gray-500 ">Something special</p>
              <p className="text-lg font-medium text-gray-500 ">Connection management</p>
            </div>
            <div className="flex justify-center py-4">
              <MainButton textSize="md" >
                Try Free
              </MainButton>
            </div>
            <div className="border-b-2">
            </div>
          </div>

          <div className={`bg-white mx-1 my-5 pt-10 pb-10 px-4 w-64 sm:w-60  md:w-64 ${showPricing ? "ml-0" : "-ml-[1400px]"} duration-1000 trasform hover:scale-110  hover:duration-300 hover:mx-4 hover:shadow-2xl`}>
            <div className="h-80">
              <h1 className="font-bold text-5xl text-blue-600 py-2">Platinum</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p className="text-2xl font-semibold text-sky-500 my-2">Full Features</p>
              <p className="text-lg font-medium text-gray-500 ">Simple tasks</p>
              <p className="text-lg font-medium text-gray-500 ">Something special</p>
              <p className="text-lg font-medium text-gray-500 ">Connection management</p>
              <p className="text-lg font-medium text-gray-500 ">Simple tasks</p>
              <p className="text-lg font-medium text-gray-500 ">Something special</p>
              <p className="text-lg font-medium text-gray-500 ">Connection management</p>
            </div>
            <div className="flex justify-center py-4">
              <MainButton textSize="md" >
                Buy Platinum
              </MainButton>
            </div>
            <div className="border-b-2">
            </div>
          </div>

          <div className={`bg-white mx-1 my-5 pt-10 pb-10 px-4 w-64 sm:w-60  md:w-64 ${showPricing ? "ml-0" : "-ml-[1000px]"} duration-1000 trasform hover:scale-110 hover:duration-300 hover:mx-2 hover:shadow-2xl`}>
            <div className="h-80">
              <h1 className="font-bold text-5xl text-yellow-700 py-2">Gold</h1>
              <p className="text-2xl font-semibold text-sky-500 my-2">Necessory Features</p>
              <p className="text-lg font-medium text-gray-500 ">Simple tasks</p>
              <p className="text-lg font-medium text-gray-500 ">Something special</p>
              <p className="text-lg font-medium text-gray-500 ">Connection management</p>
              <p className="text-lg font-medium text-gray-500 ">Simple tasks</p>
              <p className="text-lg font-medium text-gray-500 ">Something special</p>
            </div>
            <div className="flex justify-center py-4">
              <MainButton textSize="md" >
                Try Gold
              </MainButton>
            </div>
            <div className="border-b-2">
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default React.memo(Pricing)
