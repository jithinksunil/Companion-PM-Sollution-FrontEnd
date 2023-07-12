import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectManagerDashBoardBody from "../pages/projectManger/ProjectManagerDashBoardBody";
const Layout = React.lazy(() => import("../layout/Layout"));
import Messenger from "../pages/common/MessengerBody";
import Notifications from "../pages/common/NotificationsBody";
import ProjectManagerTaskBody from "../pages/projectManger/ProjectManagerTaskBody";
const ProjectManagerProfileBody=React.lazy(()=>import ("../pages/projectManger/ProjectManagerProfileBody"))
import PageNotFound from "../pages/errorPages/PageNotFound";
import useProjectManagerAuth from '../customHooks/projectManager/useProjectManagerAuth'
import RequireAuth from '../components/common/RequireAuth'
function ProjectManagerRoutes() {
  const {projectManager,setProjectManagerLogedOut} = useProjectManagerAuth()
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
    logout: { link: "/projectManager/login", token: 'projectManagerToken',setLogedOut:setProjectManagerLogedOut },
    attendence: "/projectManager/attendence",
    notifications: "/projectManager/notifications",
    chat: "/projectManager/chat",
  }, [])


  return (
    <RequireAuth individual={projectManager} navigateTo={'/projectManager/login'}>
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
    </RequireAuth>
  );
}

export default React.memo(ProjectManagerRoutes)
