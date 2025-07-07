import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ResidentialCleaning from './pages/ResidentialCleaning';
import OfficeCleaning from './pages/OfficeCleaning';
import CarpetCleaning from './pages/CarpetCleaning';
import WindowCleaning from './pages/WindowCleaning';
import GutterCleaning from './pages/GutterCleaning';
import HighPressureWashing from './pages/HighPressureWashing';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
            <Route path="/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
            <Route path="/window-cleaning" element={<WindowCleaning />} />
            <Route path="/gutter-cleaning" element={<GutterCleaning />} />
            <Route path="/high-pressure-washing" element={<HighPressureWashing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
