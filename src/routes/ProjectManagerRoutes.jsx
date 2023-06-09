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
        profile: "/projectmanager/profile",
        logout: { link: "/projectmanager/login", token: 'projectManagerToken' },
        attendence: "/projectmanager/attendence",
        notifications: "/projectmanager/notifications",
        dashBoard: "/projectmanager/dashboard",
        projects: "/projectmanager/projects",
        reports: "/projectmanager/reports",
        tasks: "/projectmanager/task",
        connections: "/projectmanager/connections",
        materialRequest: "/projectmanager/materialrequest",
        chat: "/projectmanager/chat",
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
