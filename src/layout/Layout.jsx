import React, {   useState } from "react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import Body from "../components/common/Body";
import "./layout.css";
import image from './pexels-cmonphotography-1809644.jpg'

function Layout({ individual, links, children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const {
    profile,
    logout,
    notifications,
    attendence,
    projects,
    tasks,
    reports,
    materialRequest,
    dashBoard,
    userManagement,
    connections,
    chat 
  } = links;
  return (
    <div className={`background h-screen flex`} style={{backgroundImage:`url(${image})`}}>
      <SideBar
        showSideBar={showSideBar}
        links={{ dashBoard, projects, tasks, reports, materialRequest, userManagement, connections }}
      />
      <div className="w-full overflow-hidden">
        <Navbar
          individual={individual}
          links={{ profile, logout, notifications, attendence, chat }}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Body>{children}</Body>
      </div>
    </div>
  );
}

export default Layout;
