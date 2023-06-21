import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProjectManagerDashBoardBody from "../pages/projectManger/ProjectManagerDashBoardBody";
import Layout from "../layout/Layout";
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import ProjectManagerTaskBody from "../pages/projectManger/ProjectManagerTaskBody";
import ProjectManagerProfileBody from "../pages/projectManger/ProjectManagerProfileBody";
function ProjectManagerRoutes() {
  const projectManager = useSelector((state) => state.projectManager.value);
  return (
    <Layout
      individual={projectManager}
      links={{
        profile: "/projectManager/profile",
        logout: { link: "/projectManager/login", token: 'projectManagerToken' },
        attendence: "/projectManager/attendence",
        notifications: "/projectManager/notifications",
        dashBoard: "/projectManager/dashboard",
        projects: "/projectManager/projects",
        reports: "/projectManager/reports",
        tasks: "/projectManager/task",
        connections: "/projectManager/connections",
        materialRequest: "/projectManager/materialrequest",
        chat: "/projectManager/chat",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<ProjectManagerDashBoardBody />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Messenger individual={projectManager} />} />
        <Route path="/profile" element={<ProjectManagerProfileBody />} />
        <Route path="/task" element={<ProjectManagerTaskBody />} />
      </Routes>
    </Layout>
  );
}

export default ProjectManagerRoutes;
