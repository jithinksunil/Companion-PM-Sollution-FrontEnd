import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import Body from "../components/common/Body";
import "./layout.css";
import image from './pexels-cmonphotography-1809644.jpg'

function Layout({ individual, navBarLinks, sideBarLinks, children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className={`bg-black background h-screen flex`} style={{ backgroundImage: `url(${image})` }}>
      <SideBar
        showSideBar={showSideBar}
        links={sideBarLinks}
      />
      <div className="w-full h-full overflow-x-hidden flex flex-col">
        <Navbar
          individual={individual}
          links={navBarLinks}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Body>{children}</Body>
      </div>

    </div>
  );
}

export default React.memo(Layout)
