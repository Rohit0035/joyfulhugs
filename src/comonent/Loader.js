// Loader.js
import React from 'react';
import '../assets/css/Loader.css'; 
const Loader = () => {
  return (
    <>
      <div className="mainload">
        <div className="loader">
          <span className="letter">J</span>
          <span className="letter">O</span>
          <span className="letter">Y</span>
          <span className="letter">F</span>
          <span className="letter">U</span>
          <span className="letter">L</span>
          {/* Arc SVG */}
          <div className="arc-container">
            <svg viewBox="0 0 200 100">
              <path className='paths' d="M 10 90 Q 100 -10 190 90" />
            </svg>
          </div>
          {/* HUGS text */}
          <div className="hug-text">HUGS</div>
          {/* AN ADULTGARTEN COMPANY text */}
          <div className="company-text">AN ADULTGARTEN COMPANY</div>
        </div>
      </div>
    </>
  );
};

export default Loader;


