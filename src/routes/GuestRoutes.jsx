import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
const Layout = React.lazy(() => import("../layout/Layout"));
import GuestDashBoardBody from "../pages/guest/GuestDashBoardBody";
// import guestConnectionsBody from "../pages/guest/guestConnectionsBody";
// import MembershipCheckout from "../components/guest/MembershipCheckout";
// import guestProjectsBody from "../pages/guest/guestProjectsBody";
// import Messenger from "../pages/common/MessengerBody";
// import Notifications from "../pages/common/NotificationsBody";
// import guestSiteEngineersAssignmentBody from "../pages/guest/guestSiteEngineersAssignmentBody";
// import guestProfileBody from "../pages/guest/guestProfileBody";

function GuestRoutes() {
  const guest = useSelector((state) => state.guest.value);
  return (

    <Layout
      individual={guest}
      links={{
        profile: "/guest/profile",
        logout: { link: "/login", token: 'guestToken' },
        notifications: "/guest/notifications",
        connections: "/guest/connections",
        siteEngineers: "/guest/siteengineers",
        chat: '/guest/chat',
        projects: "/guest/projects",
        reports: "/guest/reports",
        dashBoard: "/guest/dashboard",
      }}
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
      </Routes>

    </Layout>

  );
}

export default GuestRoutes;
