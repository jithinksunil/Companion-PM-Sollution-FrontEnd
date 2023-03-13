import LandingPage from "./pages/companion/LandingPage";
import SuperUserDashBoard from "./pages/superUser/SuperUserDashBoard"
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Cookies from 'js-cookie';
import { getApi } from "./api/axiosCalls";
import { useEffect ,useContext } from "react";
import { MyContext } from './context/Context'
import SuperUserProfile from "./pages/superUser/SuperUserProfile"

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
        <Route path='/' element={superUserLoggedIn?<Navigate to='/dashboard'/>:<LandingPage/>}/>
        <Route path='/dashboard' element={superUserLoggedIn?<SuperUserDashBoard/>:<Navigate to='/'/>}/>
        <Route path='/profile' element={<SuperUserProfile/>}/>
      </Routes>
    </BrowserRouter>
    }
    </div>
  );
}

export default App;
