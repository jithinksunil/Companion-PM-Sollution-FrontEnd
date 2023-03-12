import Banner from "../../components/companion/Banner";
import Writing from "../../components/companion/Writing";
import Navbar from "../../components/companion/Navbar"
import Services from "../../components/companion/Services";
import Pricing from "../../components/companion/Pricing";
import Footer from "../../components/companion/Footer"

function LandingPage() {
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
