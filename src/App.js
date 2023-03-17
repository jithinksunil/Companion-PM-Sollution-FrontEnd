import LandingPage from "./pages/companionLanding/LandingPage"
import SuperUserUI from "./pages/superUser/SuperUserUI"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminUI from "./pages/admin/AdminUI";
function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage/>}/>
        <Route path='/superuser/*' element={<SuperUserUI/>}/>
        <Route path='/admin/login' element={<AdminLoginPage/>}/>
        <Route path='/admin/*' element={ <AdminUI/> }/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;

