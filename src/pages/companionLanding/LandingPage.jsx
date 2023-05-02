import Banner from "../../components/companionLanding/Banner";
import Writing from "../../components/companionLanding/Writing";
import Navbar from "../../components/companionLanding/Navbar";
import Services from "../../components/companionLanding/Services";
import Pricing from "../../components/companionLanding/Pricing";
import Footer from "../../components/companionLanding/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Writing />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;
