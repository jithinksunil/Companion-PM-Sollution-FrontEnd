import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProjectManagerDashBoardBody from "../../components/projectManager/ProjectManagerDashBoardBody";
import Layout from "../../layout/Layout";
import Messenger from "../../components/common/Messenger";
import Notifications from "../../components/common/Notifications";
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import ProfileBody from "../../components/common/Profile";
import ProjectManagerTaskBody from "../../components/projectManager/ProjectManagerTaskBody";
function ProjectManagerUI() {
  const projectManager = useSelector((state) => state.projectManager.value);
  return (
    <Layout
      individual={projectManager}
      links={{
        profile: "/projectmanager/profile",
        logout: {link:"/projectmanager/login",token:'projectManagerToken'},
        attendence: "/projectmanager/attendence",
        notifications: "/projectmanager/notifications",
        dashBoard: "/projectmanager/dashboard",
        projects: "/projectmanager/projects",
        reports:"/projectmanager/reports",
        tasks:"/projectmanager/task",
        connections:"/projectmanager/connections",
        materialRequest:"/projectmanager/materialrequest",
        chat:"/projectmanager/chat",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<ProjectManagerDashBoardBody />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Messenger individual={projectManager} />} />
        <Route path="/profile" element={<ProfileBody individual={projectManager} setIndividual={setProjectManager} />} />
        <Route path="/task" element={<ProjectManagerTaskBody/>} />
      </Routes>
    </Layout>
  );
}

export default ProjectManagerUI;
