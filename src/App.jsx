import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/companionLanding/LandingPage"
const SuperUserRoutes =React.lazy(()=>import("./routes/SuperUserRoutes"))
const AdminLoginPage =React.lazy(()=>import("./pages/admin/AdminLoginPage"))
const AdminRoutes =React.lazy(()=>import("./routes/AdminRoutes"))
const ProjectManagerLogginPage =React.lazy(()=>import("./pages/projectManger/ProjectManagerLogginPage"))
const ProjectManagerRoutes =React.lazy(()=>import("./routes/ProjectManagerRoutes"))
const SiteEngineerRoutes =React.lazy(()=>import("./routes/SiteEngineerRoutes"))
const SiteEngineerLogginPage =React.lazy(()=>import("./pages/siteEngineer/SiteEngineerLogginPage"))

import VideoCallBody from "./pages/common/VideoCallBody";
import PageNotFound from "./pages/errorPages/PageNotFound";
import Loading from "./components/common/Loading";
import LoadingContainer from "./components/common/LoadingContainer";


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/superUser/*" element={<SuperUserRoutes />} />

          <Route path="/projectManager/login" element={<ProjectManagerLogginPage />} />
          <Route path="/projectManager/*" element={<ProjectManagerRoutes />} />

          <Route path="/siteEngineer/login" element={<SiteEngineerLogginPage />} />
          <Route path="/siteEngineer/*" element={<SiteEngineerRoutes />} />

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />

          <Route path="/videocall/:roomId" element={<VideoCallBody />} />
          <Route path="/trial" element={<Loading/>} />

          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <LoadingContainer/>
    </div>
  );
}

export default App;
