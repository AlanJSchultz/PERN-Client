//jshint esversion:6

import React, { useState, useEffect } from 'react';
import './App.css';
import SiteBar from './home/navbar';
import Auth from './auth/Auth';
import BowlingLogIndex from './bowling/BowlingLogIndex';

function App() {
  
  const [sessionToken, setSessionToken] = useState('');

  const [showLogin, setShowLogin] = useState(true);
  



  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const cleartoken = () => {
    localStorage.clear();
    setSessionToken('');
  };

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  const protectedViews = () => {
    return (
      localStorage.getItem('token') === sessionToken 
      ? <BowlingLogIndex token={sessionToken} /> 
      : <Auth showLogin={showLogin} updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <SiteBar token={sessionToken} showLogin={showLogin} setShowLogin={setShowLogin} clickLogout={cleartoken} />
      {protectedViews()}
    </div>

  );
}

export default App;
