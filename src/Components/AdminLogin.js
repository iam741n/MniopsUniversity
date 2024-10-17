import React from 'react';
import '../Styles/AdminLogin.css'; // Import the new CSS file
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdminLogin = () => {
  return (
    <div className="admin-login-page-container">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="image-col d-none d-md-block">
            <div className="image-section">
              <img src="/admin.png" alt="Login Illustration" className="img-fluid" />
            </div>
          </Col>
          <Col md={6} sm={12} className="form-col">
            <div className="login-form">
              <h2 className="text-center" style={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Admin Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex justify-content-between mt-2">
                  {/* Replace <a> with <Link> */}
                  <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                </div>

                <Button variant="primary" type="submit" className="w-100 mt-4 login-btn">
                  <a href='/AdminDashboard'>LOGIN</a>
                </Button>

                
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;