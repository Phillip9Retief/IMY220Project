import React from 'react';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
import './SplashPage.css';


function SplashPage({ onLogin, onSignUp }) {
  return (
    <div>
      <h1>Welcome to Tune Union</h1>
      <LoginForm onSubmit={onLogin} />
      <SignUpForm onSubmit={onSignUp} />
    </div>
  );
}

export default SplashPage;
