import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Chand from '../assets/images/coms/chand.png'

const JoyfulLoader = () => {
  const [key, setKey] = useState(0);
  const letters = 'JOYFUL.'.split('');

  // Loop the animation by updating key
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 3000); // total cycle time (adjust if needed)
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.8,
        when: 'afterChildren',
      },
    },
  };

  const letterVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
      },
    },
  };

  return (
    <>
    <div
      style={{
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        key={key}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          display: 'flex',
          fontSize: '5rem',
          fontWeight: 'bold',
          color: '#000',
          fontFamily: 'Red Rose, serif',

        }}
      >
        {letters.map((letter, i) => (
          <motion.span key={i} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
    <p></p>
    </>
  );
};

export default JoyfulLoader;
