import {Link} from "react-router-dom";

function SideBar({showSideBar, links}) {
    const {
        dashBoard,
        projects,
        tasks,
        reports,
        materialRequest,
        connections,
        userManagement
    } = links;
    return (
        <div className={`bg-slate-800 bg-opacity-50 h-screen`}>
            <div className={
                `${
                    showSideBar ? "w-72 md:w-80 px-5" : "w-0 md:w-20 "
                } duration-300`
            }>
                <div className="h-24 w-full flex justify-center items-center  py-10 px-2">
                    <img className={"h-7"}
                        src={
                            showSideBar ? "https://res.cloudinary.com/df8w69xon/image/upload/v1678773094/Companion%20web%20application/companion/companion_vn1uma.png" : "https://res.cloudinary.com/df8w69xon/image/upload/v1679164831/Companion%20web%20application/companion/sm_logo_mnlaja.png"
                        }
                        alt="ghgjhg"/>
                </div>

                {
                dashBoard && (
                    <Link to={dashBoard}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                            </svg>
                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Dash Board
                            </p>
                        </div>
                    </Link>
                )
            }


                {
                projects && (
                    <Link to={projects}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } cursor-pointer items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                            </svg>

                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Projects
                            </p>
                        </div>
                    </Link>
                )
            }

                {
                tasks && (
                    <Link to={tasks}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } cursor-pointer items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"/>
                            </svg>


                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Tasks
                            </p>
                        </div>
                    </Link>
                )
            }

                {
                reports && (
                    <Link to={reports}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } cursor-pointer items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/>
                            </svg>


                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Reports
                            </p>
                        </div>
                    </Link>
                )
            }

                {
                  materialRequest && (
                    <Link to={materialRequest}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } cursor-pointer items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
                            </svg>


                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Material Requests
                            </p>
                        </div>
                    </Link>
                )
            }

                {
                connections && (
                    <Link to={connections}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } cursor-pointer items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                            </svg>
                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                Connections
                            </p>
                        </div>
                    </Link>
                )
            }

                {
                userManagement && (
                    <Link to={userManagement}>
                        <div className={
                            `flex py-3 text-white text-md font-semibold ${
                                !showSideBar && " justify-center"
                            } items-center`
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                            </svg>
                            <p className={
                                `${
                                    !showSideBar && "hidden"
                                } pl-5 truncate`
                            }>
                                User Management
                            </p>
                        </div>
                    </Link>
                )
            } </div>
        </div>
    );
}

export default SideBar;
