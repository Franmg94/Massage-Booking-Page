import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import { FormProvider } from "./components/common/FormContext";
import SlideBookingForm from "./components/homepage/SlideBookingForm";



const App: React.FC = () => {
  return (
    <Router>
      <FormProvider>
      <Header />
      <SlideBookingForm/>
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      </FormProvider> 
      <Footer />
    </Router>
  );
};

export default App;
