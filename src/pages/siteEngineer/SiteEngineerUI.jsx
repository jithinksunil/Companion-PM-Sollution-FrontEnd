import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SiteEngineerDashBoardBody from "../../components/siteEngineer/SiteEngineerDashBoardBody";
const Layout=React.lazy(()=>  import ("../../layout/Layout"));
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../../errorBoundaries/ErrorBoundary";
import Messenger from "../../components/common/Messenger";
import Notifications from "../../components/common/Notifications";
import SiteEngineerProjectBody from "../../components/siteEngineer/SiteEngineerProjectBody";
import SiteEngineerTasksBody from "../../components/siteEngineer/SiteEngineerTasksBody";
import SiteEngineerMaterialRequestBody from "../../components/siteEngineer/SiteEngineerMaterialRequestBody";
import SiteEngineerReportsBody from "../../components/siteEngineer/SiteEngineerReportsBody";
import ProfileBody from "../../components/common/Profile";
import { setSiteEngineer } from "../../store/slices/SiteEngineerSlice";

function SiteEngineerUI() {
  const siteEngineer = useSelector((state) => state.siteEngineer.value);
  console.log(siteEngineer);
  return (
    <ErrorBoundary FallbackComponent={ Fallback } onReset={ () => {} }>
    <Suspense fallback={<div>Loading...</div>} >
    <Layout
      individual={siteEngineer}
      links={{
        profile: "/siteengineer/profile",
        logout: {link:"/login",token:'siteEngineerToken'},
        attendence: "/siteengineer/attendence",
        notifications: "/siteengineer/notifications",
        connections: "/siteengineer/connections",
        projects:"/siteengineer/project",
        tasks:"/siteengineer/tasks",
        materialRequest:"/siteengineer/material/request",
        reports:"/siteengineer/reports",
        chat:'/siteengineer/chat',
        dashBoard: "/siteengineer/dashboard",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<SiteEngineerDashBoardBody />} />
        <Route path="/project" element={<SiteEngineerProjectBody />} />
        <Route path="/tasks" element={<SiteEngineerTasksBody />} />
        <Route path="/material/request" element={<SiteEngineerMaterialRequestBody />} />
        <Route path="/reports" element={<SiteEngineerReportsBody />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/profile" element={<ProfileBody individual={siteEngineer} setIndividual={setSiteEngineer}/>} />
        <Route path="/chat" element={<Messenger individual={siteEngineer}/>} />
      </Routes>
    </Layout>
    </Suspense>
    </ErrorBoundary>
  );
}

export default SiteEngineerUI;
