import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        

      </Routes>
    </div>
  );
}

export default App;
