function SideBar({showSideBar,links}) {
    const { projects,userManagement }=links
    return (
      <div className={`bg-slate-800 opacity-50 h-screen`}>
              <div className={`${showSideBar?"w-72 md:w-80 px-5 md:px-10":"w-20"} duration-300`}>
                  <img className={`${showSideBar&&"w-40 md:w-40"} py-10 `} src="./companion/companion.png" alt="ghgjhg"/>
                  <div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&"flex justify-center"} items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                      </svg>
                      <p className={`${!showSideBar&&"hidden"} pl-5`}>Dash Board</p>
                  </div>
                  {projects&&<div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&"flex justify-center"} items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                      </svg>
                      <p className={`${!showSideBar&&"hidden"} pl-5`}>Projects</p>
                  </div>}
                  {userManagement&&<div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&"flex justify-center"} items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                      </svg>
                      <p className={`${!showSideBar&&"hidden"} pl-5`}>User Management</p>
                  </div>}
              </div>
              </div>
    )
  }
  
  export default SideBar