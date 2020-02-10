//jshint esversion:6

import React, { useState, useEffect } from 'react';
import SiteBar from './home/navbar';
import Auth from './auth/Auth';

function App() {
  
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const cleartoken = () => {
    localStorage.clear();
    sessionToken('');
  };

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  // const protectedViews = () => {
  //   return (
  //     localStorage.getItem('token') === sessionToken ? <BowlingLogIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
  //   );
  // };

  return (
    <div className="App">
      <SiteBar clickLogout={cleartoken} />
      <Auth updateToken={updateToken} />
      {/* {protectedViews()} */}
    </div>

  );
}

export default App;
