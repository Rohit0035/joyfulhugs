import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TeamCulture from './pages/TeamCulture';
import ComingSoon from './pages/ComingSoon';
import AdultgartenPhilosophy from './AdultgartenPhilosophy';
import Job from './pages/Job';
import ContactUs from './pages/ContactUs';
import ThankJob from './pages/ThankJob';
import ThankContact from './pages/ThankContact';
import Loader from './comonent/Loader';


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

        <Route path="/job" element={<Job />} />

        <Route path="/loader" element={<Loader />} />


        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankJob />} />
        <Route path="/thankyou-contact" element={<ThankContact />} />

      </Routes>
    </div>
  );
}

export default App;
