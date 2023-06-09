import { Fragment, useState } from "react";
import SuperUserSignUp from "../superUser/SuperUserSignUp";
import SuperUserLogin from "../superUser/SuperUserLogin";
import useCreateModal from "../../customHooks/common/useCreateModal"

function Navbar() {
  const [hideList, setHideList] = useState(true);
  const [showSignUpModal, openSignUpModalFunction, closeSignUpModalFunction] = useCreateModal('signUp-modal')
  const [showLoginModal, openLoginModalFunction] = useCreateModal('login-modal')
  function handleToggle() {
    setHideList((hideList) => !hideList);
  }

  return (
    <Fragment>
      <nav
        className={`md:flex items-center px-3 md:px-10 relative gap-4 shadow-lg ${hideList ? "h-20" : "h-64"
          } md:h-auto duration-200 `}
      >
        <img
          className="w-28 py-7 md:w-40 md:py-6 cursor-pointer"
          src="campanion/companion.png"
        />
        <ul
          className={`${hideList ? "hidden opacity-0" : "opacity-100"
            } transition-opacity duration-1000 md:flex md:gap-4 pr-10`}
        >
          <li className="py-1 cursor-pointer">
            <h5>Why Us</h5>
          </li>
          <li className="py-1 cursor-pointer">
            <h5>Features</h5>
          </li>
          <li className="py-1 cursor-pointer">
            <h5>Resources</h5>
          </li>
          <li className="py-1 cursor-pointer ">
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
            className="items-center hidden md:flex cursor-pointer hover:border-blue-700  border-2 rounded-3xl px-5"
            onClick={openLoginModalFunction}
          >
            Login
          </h1>
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl"
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
        <div id="login-modal" className=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0">
          <SuperUserLogin />
        </div>
      )}
      {showSignUpModal && (
        <div id="signUp-modal" className="fixed md:absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:right-10 md:top-20 md:-translate-x-0 md:-translate-y-0">
          <SuperUserSignUp openLoginModalFunction={openLoginModalFunction} closeSignUpModalFunction={closeSignUpModalFunction} />
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;
