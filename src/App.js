import LandingPage from "./pages/companion/LandingPage";
import SuperUserProfile from "./pages/superUser/SuperUserProfile"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    {<BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/superuser/profile' element={<SuperUserProfile/>}/>
    </Routes>
  </BrowserRouter>}
    </div>
  );
}

export default App;
