import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './index.css';
import './assets/css/Style.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Loader from './comonent/Loader';

const Root = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   },4000);
  //   return () => clearTimeout(timer);
  // }, []);

  // return loading ? <Loader/> : (
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // );

  return  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
