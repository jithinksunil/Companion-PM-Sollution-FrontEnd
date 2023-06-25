import Banner from "../../components/companionLanding/Banner";
import Separator from "../../components/companionLanding/Separator";
import Writing from "../../components/companionLanding/Writing";
import Navbar from "../../components/companionLanding/Navbar";
import Services from "../../components/companionLanding/Services";
import Pricing2 from "../../components/companionLanding/Pricing2";
import Footer from "../../components/companionLanding/Footer";
import Rail from "../../components/companionLanding/Rail";
import React from "react";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Writing />
      <Separator />
      <Services />
      <Rail />
      <Pricing2 />
      <Footer />
    </div>
  );
}

export default React.memo(LandingPage);
