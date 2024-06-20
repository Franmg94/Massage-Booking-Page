import React from "react";
import Hero from "../components/homepage/Hero";
import TreatmentsSection from "../components/homepage/TreatmentsSection";
import AboutMeSection from "../components/homepage/AboutMe";
import ContactSection from "../components/homepage/ContactSection";
import PriceSection from "../components/homepage/PriceSection";
import ReserveSection from "../components/homepage/ReserveSection";
import Banner from "../components/homepage/Banner";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ReserveSection/>
      <TreatmentsSection />
      <PriceSection />
      <Banner/>
      <AboutMeSection/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
