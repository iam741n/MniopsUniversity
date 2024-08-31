import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav} from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../Styles/RequestInfo.css';  // Import the CSS file
import { Link } from 'react-router-dom'; 

function RequestInfo() {
  return (
    <div className="request-info-container">
      <div className="req-logo-container mb-3">
       <a href="/"> <img src="/Mniops2.png" alt="MNI OPS Logo" className="university-logo" /></a>
      </div>
      <div className="req-form-header text-center mb-4">
        <h1>Learn About Mniops Academic Programs</h1>
        <p>Enter your details on the form below to learn more about your program of interest.</p>
      </div>
      
      <div className="info-and-form-container">
        <div className="info-cards">
          <div className="card">
            <img src="/Money.png" alt="Tuition-Free" />
            <p><strong>Tuition-Free</strong><br />Mniops doesn’t charge for enrollment.</p>
          </div>
          <div className="card">
            <img src="/fluent.png" alt="Flexibility" />
            <p><strong>Flexibility</strong><br />Our Learning Is 100% Online.</p>
          </div>
          <div className="card">
            <img src="/calender.png" alt="Quality" />
            <p><strong>Quality</strong><br />Accredited Academic University!</p>
          </div>
        </div>
        
        <form className="info-form">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="mb-3">
            <select className="form-control">
              <option>Program Of Interest</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
            </select>
          </div>
         <Link to ="/RequestSubmitpage"><button type="submit" className="btn btn-primary btn-block">SUBMIT</button></Link> 
        </form>
      </div>
      
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

export default RequestInfo;
