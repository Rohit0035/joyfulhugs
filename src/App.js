import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TeamCulture from './pages/TeamCulture';
import ComingSoon from './pages/ComingSoon';
import AdultgartenPhilosophy from './AdultgartenPhilosophy';
import Job from './pages/Job';
import ContactUs from './pages/ContactUs';
import ThankJob from './pages/ThankJob';
import ThankContact from './pages/ThankContact';
import LoaderImg from './comonent/LoaderImg';
import ScrollToTop from './comonent/ScrollToTop';
import AddPositions from './pages/AddPositions';

function App() {

  const [positions, setPositions] = useState(() => {
    const saved = localStorage.getItem('positions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('positions', JSON.stringify(positions));
  }, [positions]);

  const addPosition = (position) => {
    setPositions((prev) => [...prev, position]);
  };

  const deletePosition = (indexToDelete) => {
    setPositions((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-culture" element={<TeamCulture />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/adultgarten-philosophy" element={<AdultgartenPhilosophy />} />
        <Route path="/job" element={<Job positions={positions} deletePosition={deletePosition} />} />
        <Route path="/loader" element={<LoaderImg />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankJob />} />
        <Route path="/thankyou-contact" element={<ThankContact />} />
        <Route path="/add-position" element={<AddPositions positions={positions} addPosition={addPosition} deletePosition={deletePosition} />} />

      </Routes>
    </div>
  );
}

export default App;
