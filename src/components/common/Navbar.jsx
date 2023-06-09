import { Link, useNavigate } from "react-router-dom";
import Attendence from "./Attendence";
import { handleLogout } from "../../api/common/commonApiCalls";
import CenterModalContaier from "./CenterModalContaier";

function Navbar({ individual, links, setShowSideBar, showSideBar }) {
    const {
        notifications,
        attendence,
        logout,
        profile,
        chat
    } = links;
    const navigate = useNavigate();
    const handleSubmit = () => {
        handleLogout(logout, navigate)

    };

    return (
        <div className="w-full flex justify-between items-center pr-5 md:pr-10 pl-5 py-2 ">
            <div className="flex text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={
                        `w-8 h-8 mr-5 ${showSideBar && "hidden"
                        } cursor-pointer`
                    }
                    onClick={
                        () => {
                            setShowSideBar((showSideBar) => !showSideBar);
                        }
                    }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={
                        `w-8 h-8 mr-5 ${!showSideBar && "hidden"
                        } cursor-pointer`
                    }
                    onClick={
                        () => {
                            setShowSideBar((showSideBar) => !showSideBar);
                        }
                    }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
                <Link to={notifications}>
                    {
                        notifications && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={
                                    `w-8 h-8 mr-5 md:flex ${showSideBar && "hidden"
                                    } cursor-pointer`
                                }>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                        )
                    }
                </Link>
                {
                    attendence && (
                        <svg
                            id='markAttendenceButton'
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={
                                `w-8 h-8 mr-5 md:flex ${showSideBar && "hidden"
                                } cursor-pointer`
                            }
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                        </svg>
                    )
                }
                <Link to={chat}>
                    {
                        chat && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={
                                    `w-8 h-8 mr-5 md:flex ${showSideBar && "hidden"
                                    } cursor-pointer`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                        )
                    } </Link>
            </div>
            <div className="flex items-center">
                {
                    logout && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={
                                `w-8 h-8 mr-5 md:flex ${showSideBar && "hidden"
                                } text-white cursor-pointer`
                            }
                            onClick={handleSubmit}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    )
                }
                {
                    profile && (
                        <Link to={profile}>
                            <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                                <img src={
                                    `${individual?.image
                                    }`
                                }
                                    alt="" />
                            </div>
                        </Link>
                    )
                }
            </div>
            <CenterModalContaier openModalButtonId='markAttendenceButton'>
                <Attendence url={attendence} />
            </CenterModalContaier>
        </div>
    );
}

export default Navbar;
