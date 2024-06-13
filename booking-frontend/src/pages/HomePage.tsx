import React from "react";
import Hero from "../components/homepage/Hero";
import TreatmentsSection from "../components/homepage/TreatmentsSection";
import AboutMeSection from "../components/homepage/AboutMe";
import ContactSection from "../components/homepage/ContactSection";
import PriceSection from "../components/homepage/PriceSection";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TreatmentsSection />
      <PriceSection />
      <AboutMeSection/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
