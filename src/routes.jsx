import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CarpetCleaning from './pages/CarpetCleaning';
import GutterCleaning from './pages/GutterCleaning';
import HighPressureWashing from './pages/HighPressureWashing';
import WindowCleaning from './pages/WindowCleaning';
import AboutUs from './pages/AboutUs';

const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
                <Route path="/gutter-cleaning" element={<GutterCleaning />} />
                <Route path="/high-pressure-washing" element={<HighPressureWashing />} />
                <Route path="/window-cleaning" element={<WindowCleaning />} />
            </Routes>
        </Router>
    );
};

export default Routes;
