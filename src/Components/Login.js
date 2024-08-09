import React, { useState } from 'react';
import '../Styles/Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-body">
      <div className="login-app">
        <div className="login-container">
          <img src="/Mniops.png" alt="logo" className="login-logo" />
          <div className="login-input-container">
            <input type="text" className="login-input" placeholder="Username" />
            <div className="password-input-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="login-input"
                placeholder="Password"
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button className="login-submit-button">Log in</button>
          <p className="login-signup-text">
            Don't have any account? <a href="/signup" className="login-signup-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
