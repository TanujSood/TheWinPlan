import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Landing from './LandingPage'
import AboutUs from './AboutUs'
import Strategy from './Strategy'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Navbar />
      <Landing />
      <AboutUs />
      <Strategy />
      <AboutUs />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();