import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
const Layout = React.lazy(() => import("../layout/Layout"));
import GuestDashBoardBody from "../pages/guest/GuestDashBoardBody";
import PageNotFound from "../components/errorPages/PageNotFound";
// import guestConnectionsBody from "../pages/guest/guestConnectionsBody";
// import MembershipCheckout from "../components/guest/MembershipCheckout";
// import guestProjectsBody from "../pages/guest/guestProjectsBody";
// import Messenger from "../pages/common/MessengerBody";
// import Notifications from "../pages/common/NotificationsBody";
// import guestSiteEngineersAssignmentBody from "../pages/guest/guestSiteEngineersAssignmentBody";
// import guestProfileBody from "../pages/guest/guestProfileBody";

function GuestRoutes() {
  const guest = useSelector((state) => state.guest.value);
  const sideBarLinks=useCallback({
    profile: "/guest/profile",
    logout: { link: "/login", token: 'guestToken' },
    notifications: "/guest/notifications",
    chat: '/guest/chat',
  },[])
  const navBarLinks=useCallback({
    profile: "/guest/profile",
    logout: { link: "/login", token: 'guestToken' },
    notifications: "/guest/notifications",
    chat: '/guest/chat',
  },[])
  
  return (

    <Layout
      individual={guest}
      sideBarLinks={sideBarLinks}
      navBarLinks={navBarLinks}
    >
      <Routes>
        <Route path="/dashboard" element={<GuestDashBoardBody />} />
        {/* <Route path="/projects" element={<guestProjectsBody />} />
        <Route path="/reports" element={<guestProjectsBody />} />
        <Route path="/profile" element={<guestProfileBody/>} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/connections" element={<guestConnectionsBody />} />
        <Route path="/siteengineers" element={<guestSiteEngineersAssignmentBody />} />
        <Route path="/membershipupgrade" element={<MembershipCheckout />} />
        <Route path="/chat" element={<Messenger individual={guest} />} /> */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>

    </Layout>

  );
}

export default GuestRoutes;
