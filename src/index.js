import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Landing from './LandingPage'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
