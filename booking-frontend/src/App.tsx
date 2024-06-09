import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';


const App: React.FC = () => {
  return(
    <Router>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;