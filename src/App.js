import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LoadingAnimation isLoading={isLoading} />
      <div className={`App transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ...existing code... */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;