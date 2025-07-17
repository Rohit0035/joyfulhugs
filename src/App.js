import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TeamCulture from './pages/TeamCulture';
import ComingSoon from './pages/ComingSoon';
import AdultgartenPhilosophy from './AdultgartenPhilosophy';


function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-culture" element={<TeamCulture />} />

        <Route path="/coming-soon" element={<ComingSoon />} />

        <Route path="/adultgarten-philosophy" element={<AdultgartenPhilosophy />} />


      </Routes>
    </div>
  );
}

export default App;
