import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import Body from "../components/common/Body";
import lowQuality from './lowQuality.webp'

function Layout({ individual, navBarLinks, sideBarLinks, children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [image,setImage]=useState(null)
  useEffect(()=>{
    import ('./pexels-cmonphotography-1809644.webp').then((module)=>{
      setImage(module.default)
    }).catch(()=>{
      console.log('erro loading bg image');
    })
  },[])
  return (
    <div className={`bg-cover bg-black background h-screen flex`}  style={{ backgroundImage: `url(${image?image:lowQuality})` }}>
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
