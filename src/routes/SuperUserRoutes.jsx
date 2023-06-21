import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SuperUserDashBoardBody from "../pages/superUser/SuperUserDashBoardBody";
const Layout = React.lazy(() => import("../layout/Layout"));
import SuperUserConnectionsBody from "../pages/superUser/SuperUserConnectionsBody";
import MembershipCheckout from "../components/superUser/MembershipCheckout";
import SuperUserProjectsBody from "../pages/superUser/SuperUserProjectsBody";
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import SuperUserSiteEngineersAssignmentBody from "../pages/superUser/SuperUserSiteEngineersAssignmentBody";
import SuperUserProfileBody from "../pages/superUser/SuperUserProfileBody";

function SuperUserRoutes() {
  const superUser = useSelector((state) => state.superUser.value);
  return (

    <Layout
      individual={superUser}
      links={{
        profile: "/superUser/profile",
        logout: { link: "/login", token: 'superUserToken' },
        notifications: "/superUser/notifications",
        connections: "/superUser/connections",
        siteEngineers: "/superUser/siteengineers",
        chat: '/superUser/chat',
        projects: "/superUser/projects",
        reports: "/superUser/reports",
        dashBoard: "/superUser/dashboard",
      }}
    >
      <Routes>
        
        <Route path="/dashboard" element={<SuperUserDashBoardBody />} />
        <Route path="/projects" element={<SuperUserProjectsBody />} />
        <Route path="/reports" element={<SuperUserProjectsBody />} />
        <Route path="/profile" element={<SuperUserProfileBody/>} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/connections" element={<SuperUserConnectionsBody />} />
        <Route path="/siteengineers" element={<SuperUserSiteEngineersAssignmentBody />} />
        <Route path="/membershipupgrade" element={<MembershipCheckout />} />
        <Route path="/chat" element={<Messenger individual={superUser} />} />
      </Routes>

    </Layout>

  );
}

export default SuperUserRoutes;
