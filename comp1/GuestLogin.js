// src/components/GuestLogin.js

import React from 'react';
import './GuestLogin.css';
import LoginPage from './LoginPage';

function GuestLogin() {
  return (
    <div className="guest-login-page">
      <h1>Guest Login</h1>
      <br></br>
      <LoginPage />
      {/* Guest login form can be added here */}
    </div>
  );
}

export default GuestLogin;
