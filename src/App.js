import LandingPage from "./pages/companionLanding/LandingPage";
import SuperUserRoutes from "./routes/SuperUserRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminRoutes from "./routes/AdminRoutes";
import NewTAbles from "./NewTAbles";
import { ToastContainer } from "react-toastify";
import ProjectManagerLogginPage from "./pages/projectManger/ProjectManagerLogginPage";
import ProjectManagerRoutes from "./routes/ProjectManagerRoutes";
import VideoCallBody from "./pages/common/VideoCallBody";
import SiteEngineerRoutes from "./routes/SiteEngineerRoutes";
import SiteEngineerLogginPage from "./pages/siteEngineer/SiteEngineerLogginPage";
import GuestRoutes from "./routes/GuestRoutes";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/superuser/*" element={<SuperUserRoutes />} />

          <Route path="/guest/*" element={<GuestRoutes />} />
          
          <Route path="/projectmanager/login" element={<ProjectManagerLogginPage />} />
          <Route path="/projectmanager/*" element={<ProjectManagerRoutes />} />

          <Route path="/siteengineer/login" element={<SiteEngineerLogginPage />} />
          <Route path="/siteengineer/*" element={<SiteEngineerRoutes />} />

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />

          <Route path="/trial" element={<NewTAbles />} />
          <Route path="/videocall/:roomId" element={<VideoCallBody />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
