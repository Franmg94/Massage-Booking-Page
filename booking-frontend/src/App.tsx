import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { FormProvider } from "./components/common/FormContext";
import SlideBookingForm from "./components/common/SlideBookingForm";


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <FormProvider>
      <SlideBookingForm/>
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      </FormProvider> 
      <Footer />
    </Router>
  );
};

export default App;
