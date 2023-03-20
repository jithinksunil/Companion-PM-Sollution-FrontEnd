import { Link } from "react-router-dom"

function SideBar({showSideBar,links}) {
    const { dashBoard,projects,userManagement }=links
    return (
      <div className={`bg-slate-800 bg-opacity-50 h-screen`}>
              <div className={`${showSideBar?"w-72 md:w-80 px-5":"w-20"} duration-300`}>
              <div className='h-24 w-full flex justify-center items-center  py-10 px-2'>
              <img className={'h-7'} src={showSideBar?"https://res.cloudinary.com/df8w69xon/image/upload/v1678773094/Companion%20web%20application/companion/companion_vn1uma.png":"https://res.cloudinary.com/df8w69xon/image/upload/v1679164831/Companion%20web%20application/companion/sm_logo_mnlaja.png"} alt="ghgjhg"/>
              </div>
                  
                  <Link to={dashBoard}>
                    {dashBoard&&<div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&" justify-center"} items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                    <p className={`${!showSideBar&&"hidden"} pl-5 truncate`}>Dash Board</p>
                    </div>}
                  </Link>

                  {projects&&<div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&" justify-center"} items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                      </svg>
                      <p className={`${!showSideBar&&"hidden"} pl-5 truncate`}>Projects</p>
                  </div>}

                  <Link to='/admin/usermanagement'>
                  {userManagement&&<div className={`flex py-3 text-white text-md font-semibold ${!showSideBar&&" justify-center"} items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                  </svg>
                      <p className={`${!showSideBar&&"hidden"} pl-5 truncate`}>User Management</p>
                    </div>}
                </Link>
                      </div>
                      </div>
                      )
                    }
  
  export default SideBar