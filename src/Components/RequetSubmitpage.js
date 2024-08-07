import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav} from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../Styles/RequestSubmitpage.css'
import {Link} from 'react-router-dom';

const RequestSubmitpage = () => {
  return (
    <div className="submit-info-container">
    <div className="submit-logo-container mb-3">
      <img src="/Mniops2.png" alt="MNI OPS Logo" className="university-logo" />
    </div>
    <header className="sub-header">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img src="/student1.png" alt="Graduated" className="img-fluid student-image" />
          </Col>
          <Col md={6} className="text-center text-md-left">
            <h1 className="header-title">Thank You For Your Interest!</h1>
            <p className="header-subtitle">Access your program by viewing your page:</p>
           <Link to ='/ApplyNow'> <Button className="btn-view-page mt-3">Apply Now</Button></Link>
          </Col>
        </Row>
      </Container>
    </header>
    <div class="contact-us-container">
  <h2>CONTACT US</h2>
  <p>Feel free to reach us for more information, we're here to make you successful!</p>
  <div class="contact-details">
    <div class="contact-item">
      <img src="/location.png" alt="Address Icon" class="contact-icon"/>
      <h3>ADDRESS</h3>
      <p>House No 736, Street No. 22, Phase 5-B, Gauri Town, Islamabad, Pakistan</p>
    </div>
    <div class="contact-item">
      <img src="/group.png" alt="Phone Icon" class="contact-icon"/>
      <h3>PHONE NUMBER</h3>
      <p>+923451515196</p>
    </div>
    <div class="contact-item">
      <img src="/email.png" alt="Email Icon" class="contact-icon"/>
      <h3>EMAIL</h3>
      <p>pakistan@mniops.education</p>
    </div>
  </div>
</div>

      
      <footer className="req-custom-footer text-white text-center py-4">
          <Container>
            <Row className="mt-4">
              <Col>
                <p style={{ fontWeight: 'bold', fontSize: '2.1rem' }}>Looking for a bright future?</p>
                <Button variant="primary">Apply Now</Button>
              </Col>
            </Row>
            <Navbar expand="lg" className="req-navbar-footer mt-4">
              <Nav className="mx-auto">
                <Nav.Link href="#" className="text-white">Academic Programs</Nav.Link>
                <Nav.Link href="#" className="text-white">Student Experience</Nav.Link>
                <Nav.Link href="#" className="text-white">Become A Student</Nav.Link>
                <Nav.Link href="#" className="text-white">Tuition-Free</Nav.Link>
                <Nav.Link href="#" className="text-white">About</Nav.Link>
                <Nav.Link href="#" className="text-white">Contact</Nav.Link>
              </Nav>
            </Navbar>
            <Row className="mt-4">
              <Col>
                <ul className="req-list-unstyled d-flex justify-content-center">
                <li className="mx-3"><Button variant="link" className="text-white p-0"><FaLinkedin /></Button></li>
                  <li className="mx-3"><Button variant="link" className="text-white p-0"><FaTwitter /></Button></li>
                  <li className="mx-3"><Button variant="link" className="text-white p-0"><FaFacebook /></Button></li>
                  <li className="mx-3"><Button variant="link" className="text-white p-0"><FaYoutube /></Button></li>
                  <li className="mx-3"><Button variant="link" className="text-white p-0"><FaInstagram /></Button></li>
                </ul>
                <p className="mt-4">A project of Minnesota Institute Of Professional Services</p>
                <p>© Copyright Mniops. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
    </div>
  );
}

export default RequestSubmitpage;