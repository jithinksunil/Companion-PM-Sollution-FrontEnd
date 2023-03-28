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
    message,
    notification,
    attendence,
    projects,
    dashBoard,
    userManagement,
    connections,
  } = links;
  return (
    <div className={`background h-screen flex`} style={{backgroundImage:`url(${image})`}}>
      <SideBar
        showSideBar={showSideBar}
        links={{ dashBoard, projects, userManagement, connections }}
      />
      <div className="w-full overflow-hidden">
        <Navbar
          individual={individual}
          links={{ profile, logout,  message, notification, attendence }}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Body>{children}</Body>
      </div>
    </div>
  );
}

export default Layout;
