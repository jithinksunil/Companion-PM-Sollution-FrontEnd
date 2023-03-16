import LandingPage from "./pages/companion/LandingPage"
import SuperUserUI from "./pages/superUser/SuperUserUI"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { getApi } from "./api/axiosCalls";
import { useEffect ,useContext } from "react";
import { MyContext } from './context/Context'
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminUI from "./pages/admin/AdminUI";
function App() {
  
  const {superUserLoggedIn,setSuperUserLoggedIn}=useContext( MyContext )
  useEffect(()=>{
    const superUserToken=Cookies.get('superUserToken')
    if(superUserToken){
      getApi('/verifyToken',(response)=>{
        if(response.data.superUserTokenVerified){
          setSuperUserLoggedIn(true)
        }})
    }
  },[])

  return (
    <div className="App">
    {
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={superUserLoggedIn?<Navigate to='/superuser/dashboard'/>:<LandingPage/>}/>
        <Route path='/superuser/*' element={<SuperUserUI/>}/>
        <Route path='/admin/login' element={<AdminLoginPage/>}/>
        <Route path='/admin/*' element={ <AdminUI/> }/>
      </Routes>
    </BrowserRouter>
    }

    </div>
  );
}

export default App;


