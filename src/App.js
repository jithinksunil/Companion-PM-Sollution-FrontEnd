import LandingPage from "./pages/companion/LandingPage";
import SuperUserUi from "./pages/superUser/SuperUserUi"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { getApi } from "./api/axiosCalls";
import { useEffect ,useContext } from "react";
import { MyContext } from './Context'
import SuperUserProfile from "./pages/superUser/SuperUserProfile";


function App() {
  const {superUserLoggedIn,setSuperUserLoggedIn}=useContext( MyContext )
  useEffect(()=>{
    const superUserToken=Cookies.get('superUserToken')
    if(superUserToken){
      getApi('/verifyToken',(response)=>{
        if(response.data.superUserTokenVerified){
          setSuperUserLoggedIn(true)
        }},(reject)=>{console.log(reject)})
    }
  },[])

  return (
    <div className="App">
    {
    <BrowserRouter>
      <Routes>
      <Route path='/' element={superUserLoggedIn?<Navigate to='/superuser/dashboard'/>:<LandingPage/>}/>
      <Route path='/superuser/dashboard' element={superUserLoggedIn?<SuperUserUi/>:<Navigate to='/'/>}/>
      <Route path='/superuser/profile' element={<SuperUserProfile/>}/>
      </Routes>
    </BrowserRouter>
    }
    </div>
  );
}

export default App;
