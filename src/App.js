import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TeamCulture from './pages/TeamCulture';
import ComingSoon from './pages/ComingSoon';
import AdultgartenPhilosophy from './AdultgartenPhilosophy';
import Job from './pages/Job';
import ContactUs from './pages/ContactUs';
import ThankJob from './pages/ThankJob';
import ThankContact from './pages/ThankContact';
import ScrollToTop from './comonent/ScrollToTop';
import Login from './pages/Login';
import PrivateRoute from './comonent/PrivateRoute';
import AddPosition from './pages/AddPosition';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-culture" element={<TeamCulture />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/adultgarten-philosophy" element={<AdultgartenPhilosophy />} />
        <Route path="/job" element={<Job />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thankyou" element={<ThankJob />} />
        <Route path="/thankyou-contact" element={<ThankContact />} />

        {/* NEW ROUTES */}
        <Route path="/admin" element={<Login />} />
        <Route
          path="/add-position"
          element={
            <PrivateRoute>
              <AddPosition />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
