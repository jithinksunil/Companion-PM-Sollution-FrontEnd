import LandingPage from "./pages/companionLanding/LandingPage";
import SuperUserUI from "./pages/superUser/SuperUserUI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminUI from "./pages/admin/AdminUI";
import NewTAbles from "./NewTAbles";
import { ToastContainer } from "react-toastify";
import ProjectManagerLogginPage from "./pages/projectManger/ProjectManagerLogginPage";
import ProjectManagerUI from "./pages/projectManger/ProjectManagerUI";
import VideoCallBody from "./components/common/VideoCallBody";
import SiteEngineerUI from "./pages/siteEngineer/SiteEngineerUI";
import SiteEngineerLogginPage from "./pages/siteEngineer/SiteEngineerLogginPage";

function App() {

  return (
    <div className="App">
      {console.log('jithin')}
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/superuser/*" element={<SuperUserUI />} />
          <Route path="/projectmanager/login" element={<ProjectManagerLogginPage />}/>
          <Route path="/projectmanager/*" element={<ProjectManagerUI />} />
          <Route path="/siteengineer/login" element={<SiteEngineerLogginPage />}/>
          <Route path="/siteengineer/*" element={<SiteEngineerUI />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/*" element={<AdminUI />} />
          <Route path="/trial" element={<NewTAbles />} />
          <Route path="/videocall/:roomId" element={<VideoCallBody/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
