import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import SuperUserDashBoardBody from "../pages/superUser/SuperUserDashBoardBody";
const Layout = React.lazy(() => import("../layout/Layout"));
import SuperUserConnectionsBody from "../pages/superUser/SuperUserConnectionsBody";
import MembershipCheckout from "../components/superUser/MembershipCheckout";
import SuperUserProjectsBody from "../pages/superUser/SuperUserProjectsBody";
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import SuperUserSiteEngineersAssignmentBody from "../pages/superUser/SuperUserSiteEngineersAssignmentBody";
const SuperUserProfileBody = React.lazy(() =>
  import("../pages/superUser/SuperUserProfileBody")
);
import PageNotFound from "../pages/errorPages/PageNotFound";
import useSuperUserAuth from "../customHooks/superUser/useSuperUserAuth";
import RequireAuth from "../components/common/RequireAuth";

function SuperUserRoutes() {
  const { superUser, setSuperUserLogedOut } = useSuperUserAuth();
  const sideBarLinks = useCallback(
    {
      connections: "/superUser/connections",
      siteEngineers: "/superUser/siteengineers",
      projects: "/superUser/projects",
      reports: "/superUser/reports",
      dashBoard: "/superUser/dashboard",
    },
    []
  );
  const navBarLinks = useCallback(
    {
      profile: "/superUser/profile",
      logout: {
        link: "/",
        token: "superUserToken",
        setLogedOut: setSuperUserLogedOut,
      },
      notifications: "/superUser/notifications",
      chat: "/superUser/chat",
    },
    []
  );

  return (
    <RequireAuth individual={superUser} navigateTo={'/'}>
      <Layout
        individual={superUser}
        sideBarLinks={sideBarLinks}
        navBarLinks={navBarLinks}
      >
        <Routes>
          <Route path="/dashboard" element={<SuperUserDashBoardBody />} />
          <Route path="/projects" element={<SuperUserProjectsBody />} />
          <Route path="/reports" element={<SuperUserProjectsBody />} />
          <Route path="/profile" element={<SuperUserProfileBody />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/connections" element={<SuperUserConnectionsBody />} />
          <Route
            path="/siteengineers"
            element={<SuperUserSiteEngineersAssignmentBody />}
          />
          <Route path="/membershipupgrade" element={<MembershipCheckout />} />
          <Route path="/chat" element={<Messenger individual={superUser} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </RequireAuth>
  );
}

export default React.memo(SuperUserRoutes);
