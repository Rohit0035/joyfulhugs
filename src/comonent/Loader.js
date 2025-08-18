// Loader.js
import React from 'react';
import '../assets/css/juyfulloader.css'; 
import ArcImage from '../assets/images/coms/ch-j.png'; 

const Loader = () => {
  return (
    <div className="mainload">
      <div className="loader">
        <span className="letter">J</span>
        <span className="letter">O</span>
        <span className="letter st-y">Y</span>
        <span className="letter">F</span>
        <span className="letter">U</span>
        <span className="letter">L</span>

        {/* Arc Image after JOYFUL */}
        <div className="arc-image delayed-fade-in">
          <img src={ArcImage} alt="Arc" />
        </div>

        {/* HUGS and Company Name */}
        <div className="hug-text">HUGS</div>
        <div className="company-text">AN ADULTGARTEN COMPANY</div>
      </div>
    </div>
  );
};

export default Loader;