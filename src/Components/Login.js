import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <Container className="d-flex justify-content-center align-items-center login-container">
        <div className="login-form">
          <img src="/Mniops.png" alt="Logo" className="login-logo" />
           {/* <h3 className="login-title text-center mb-4">Mniops</h3> */}
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Control type="text" placeholder="Username" className="input-field" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="password-group">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input-field"
              />
              <span onClick={togglePasswordVisibility} className="password-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </Form.Group>
            <Button variant="primary" type="submit" className="login-button">
              Log In
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span>Don't have any account? <a href="/signup">Sign Up</a></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
