import LandingPage from "./pages/companionLanding/LandingPage"
import SuperUserUI from "./pages/superUser/SuperUserUI"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminUI from "./pages/admin/AdminUI";
import NewTAbles from "./NewTAbles";
import { ToastContainer } from 'react-toastify';
import ProjectManagerLogginPage from "./pages/projectManger/ProjectManagerLogginPage";
import ProjectManagerUI from "./pages/projectManger/ProjectManagerUI";


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage/>}/>
        <Route path='/superuser/*' element={<SuperUserUI/>}/>
        <Route path='/projectmanager/login' element={<ProjectManagerLogginPage/>}/>
        <Route path='/projectmanager/*' element={<ProjectManagerUI/>}/>
        <Route path='/admin/login' element={<AdminLoginPage/>}/>
        <Route path='/admin/*' element={ <AdminUI/> }/>
        <Route path='/trial' element={<NewTAbles/>}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  )
}

export default App;

