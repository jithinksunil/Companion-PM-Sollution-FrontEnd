import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import SiteEngineerDashBoardBody from "../pages/siteEngineer/SiteEngineerDashBoardBody";
const Layout = React.lazy(() => import("../layout/Layout"));
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import SiteEngineerProjectBody from "../pages/siteEngineer/SiteEngineerProjectBody";
import SiteEngineerTasksBody from "../pages/siteEngineer/SiteEngineerTasksBody";
import SiteEngineerMaterialRequestBody from "../pages/siteEngineer/SiteEngineerMaterialRequestBody";
import SiteEngineerReportsBody from "../pages/siteEngineer/SiteEngineerReportsBody";
import SiteEngineerProfileBody from "../pages/siteEngineer/SiteEngineerProfileBody";
import { useSelector } from "react-redux";

function SiteEngineerRoutes() {
  const siteEngineer = useSelector((state) => state.siteEngineer.value);
  const sideBarLinks = useCallback({
    connections: "/siteEngineer/connections",
    projects: "/siteEngineer/project",
    tasks: "/siteEngineer/tasks",
    materialRequest: "/siteEngineer/material/request",
    reports: "/siteEngineer/reports",
    dashBoard: "/siteEngineer/dashboard",
  }, [])
  const navBarLinks = useCallback({
    profile: "/siteEngineer/profile",
    logout: { link: "/login", token: 'siteEngineerToken' },
    attendence: "/siteEngineer/attendence",
    notifications: "/siteEngineer/notifications",
    chat: '/siteEngineer/chat',
  }, [])
  
  return (
    <Layout
          individual={siteEngineer}
          sideBarLinks={sideBarLinks}
          navBarLinks={navBarLinks}
        >
          <Routes>
            <Route path="/dashboard" element={<SiteEngineerDashBoardBody />} />
            <Route path="/project" element={<SiteEngineerProjectBody />} />
            <Route path="/tasks" element={<SiteEngineerTasksBody />} />
            <Route path="/material/request" element={<SiteEngineerMaterialRequestBody />} />
            <Route path="/reports" element={<SiteEngineerReportsBody />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<SiteEngineerProfileBody />} />
            <Route path="/chat" element={<Messenger individual={siteEngineer} />} />
          </Routes>
        </Layout>
  );
}

export default SiteEngineerRoutes;
