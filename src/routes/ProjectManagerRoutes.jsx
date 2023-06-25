import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProjectManagerDashBoardBody from "../pages/projectManger/ProjectManagerDashBoardBody";
import Layout from "../layout/Layout";
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import ProjectManagerTaskBody from "../pages/projectManger/ProjectManagerTaskBody";
import ProjectManagerProfileBody from "../pages/projectManger/ProjectManagerProfileBody";
import PageNotFound from "../components/errorPages/PageNotFound";
function ProjectManagerRoutes() {
  const projectManager = useSelector((state) => state.projectManager.value);
  const sideBarLinks = useCallback({
    dashBoard: "/projectManager/dashboard",
    projects: "/projectManager/projects",
    reports: "/projectManager/reports",
    tasks: "/projectManager/task",
    connections: "/projectManager/connections",
    materialRequest: "/projectManager/materialrequest",
  }, [])
  const navBarLinks = useCallback({
    profile: "/projectManager/profile",
    logout: { link: "/projectManager/login", token: 'projectManagerToken' },
    attendence: "/projectManager/attendence",
    notifications: "/projectManager/notifications",
    chat: "/projectManager/chat",
  }, [])


  return (
    <Layout
      individual={projectManager}
      sideBarLinks={sideBarLinks}
      navBarLinks={navBarLinks}
    >
      <Routes>
        <Route path="/dashboard" element={<ProjectManagerDashBoardBody />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Messenger individual={projectManager} />} />
        <Route path="/profile" element={<ProjectManagerProfileBody />} />
        <Route path="/task" element={<ProjectManagerTaskBody />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Layout>
  );
}

export default React.memo(ProjectManagerRoutes)
