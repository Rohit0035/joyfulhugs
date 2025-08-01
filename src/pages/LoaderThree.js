import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/LoaderThree.css';
import logo from '../assets/images/coms/logo.png';

const LoaderThree = () => {
  return (
    <div className="loader-container">
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="logo-animation"
      />
    </div>
  );
};

export default LoaderThree;
