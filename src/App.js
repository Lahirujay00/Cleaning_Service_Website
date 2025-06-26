import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResidentialCleaning from './pages/ResidentialCleaning';
import OfficeCleaning from './pages/OfficeCleaning';
import CarpetCleaning from './pages/CarpetCleaning';
import GutterCleaning from './pages/GutterCleaning';
import HighPressureWashing from './pages/HighPressureWashing';
import WindowCleaning from './pages/WindowCleaning';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LoadingAnimation isLoading={isLoading} />
      <div className={`App transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/office-cleaning" element={<OfficeCleaning />} />
          <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
          <Route path="/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/high-pressure-washing" element={<HighPressureWashing />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;