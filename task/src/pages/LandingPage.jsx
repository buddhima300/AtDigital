import React from "react";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import IntroOne from "../components/IntroOne";
import Intro2 from "../components/Intro2";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <IntroOne />
      <Intro2 />
      <Questions />
      <Footer />
    </div>
  );
}

export default LandingPage;
