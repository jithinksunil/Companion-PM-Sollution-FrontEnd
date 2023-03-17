import Cookies from 'js-cookie';
import { getApi } from "../../api/axiosCalls";
import { useEffect } from "react";

import Banner from "../../components/companionLanding/Banner";
import Writing from "../../components/companionLanding/Writing";
import Navbar from "../../components/companionLanding/Navbar"
import Services from "../../components/companionLanding/Services";
import Pricing from "../../components/companionLanding/Pricing";
import Footer from "../../components/companionLanding/Footer"
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate=useNavigate()
  useEffect(()=>{
    const superUserToken=Cookies.get('superUserToken')
    if(superUserToken){
      getApi('/verifyToken',(response)=>{
        if(response.data.superUserTokenVerified){
          navigate('/superuser/dashboard')
        }})
    }
  },[])
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Writing/>
    <Services/>
    <Pricing/>
    <Footer/>
    </div>
  )
}

export default LandingPage
