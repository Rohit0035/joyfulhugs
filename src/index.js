import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './index.css';
import './assets/css/Style.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';
import JoyfulLoader from './comonent/JoyfulLoader';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <JoyfulLoader /> : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // return  (
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
