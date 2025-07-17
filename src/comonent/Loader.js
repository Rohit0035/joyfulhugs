// Loader.js
import React from 'react';
import '../assets/css/Loader.css'; // Optional: Add styles for the loader
import Zebra from "../assets/images/common/zebra.jpg"
const Loader = () => {
    return (
      <div className="loader-wrapper">
        <div className="zebra">
          
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    );
  };

export default Loader;
