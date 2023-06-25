import LandingPage from "./pages/companionLanding/LandingPage";
import SuperUserRoutes from "./routes/SuperUserRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminRoutes from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import ProjectManagerLogginPage from "./pages/projectManger/ProjectManagerLogginPage";
import ProjectManagerRoutes from "./routes/ProjectManagerRoutes";
import VideoCallBody from "./pages/common/VideoCallBody";
import SiteEngineerRoutes from "./routes/SiteEngineerRoutes";
import SiteEngineerLogginPage from "./pages/siteEngineer/SiteEngineerLogginPage";
import GuestRoutes from "./routes/GuestRoutes";
import PageNotFound from "./components/errorPages/PageNotFound";

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/superUser/*" element={<SuperUserRoutes />} />

          <Route path="/guest/*" element={<GuestRoutes />} />
          
          <Route path="/projectManager/login" element={<ProjectManagerLogginPage />} />
          <Route path="/projectManager/*" element={<ProjectManagerRoutes />} />

          <Route path="/siteEngineer/login" element={<SiteEngineerLogginPage />} />
          <Route path="/siteEngineer/*" element={<SiteEngineerRoutes />} />

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />

          <Route path="/videocall/:roomId" element={<VideoCallBody />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
