import React from "react";
import "../Styles/AboutUs.css";
import {
  Container,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form
} from "react-bootstrap";
import {
  FaSearch
} from "react-icons/fa";

import { Link } from 'react-router-dom';

const BecomeStudent = () => {
  return (
    <div className="about-us-container">
      <div className="search-container bg-light py-3">
        <Container className="d-flex justify-content-end align-items-center">
          <Link to="/RequestInfo"><Button variant="link" className="mx-2 p-0">Request Info</Button></Link>
          <Link to="/Login"><Button variant="link" className="mx-2 p-0">Login</Button></Link>
          <Form className="d-flex align-items-center">
            <FormControl
              type="text"
              placeholder="Search"
              className="search-bar"
            />
            <Button variant="outline-success" className="search-icon"><FaSearch /></Button>
          </Form>
        </Container>
      </div>
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container>
          <Navbar.Brand href="/">
            <img src="/Mniops.png" alt="Mniops Logo" height="130" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Academic Programs" id="academic-programs-dropdown">
                <NavDropdown.Item href="/Bachelor">Bachelor's Programs</NavDropdown.Item>
                <NavDropdown.Item href="/Master">Master's Programs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/StudentExperience">Student Experience</Nav.Link>
            <Nav.Link href="/BecomeStudent">Become A Student</Nav.Link>
            <Nav.Link href="/TutionFree">Tuition-Free</Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/ContactUs">Contact</Nav.Link>
            <Link to="/ApplyNow" className="btn apply-now-btn ml-3">Apply Now</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="about-us container-fluid">
        <div className="intro">
          <h1>BECOME A STUDENT</h1>
          <h6 className="py-2">
          Affordable degree Programs provide you with the knowledge you need to succeed with top companies after graduation. Are you ready to join the Education Revolution?
          </h6>
        </div>
        <img src="/s2.png" alt="" />
      </div>
      <div className="mission-box m-5 py-4">
        <h2>ADMISSIONS</h2>
        <h6 className="p-2">
        MNIOPS is dedicated to opening the gates of higher education to all qualified applicants.
        </h6>
      </div>
      <div className="box-3 py-2 px-5">
        <h3>UNDERGRADUATE REQUIREMENTS</h3>
        <h6 className="py-2">
        If you're 16 or older, have completed high school, (or home school equivalent) or have completed at least 24 college credits, and can study in English, you can apply online today in just a few simple steps. All you need to do is complete our short online application form, choose your admissions pathway, and you will be ready to start studying with us!
        </h6>
      </div>
      <div className="services container-fluid p-4">
        <h3>GRADUATES REQUIREMENTS</h3>
        <h6>
        You can apply online today in just a few simple steps. All you need to do is complete our short online application form, choose your admissions pathway, and you will be ready to start studying with us!
        </h6>
      </div>
      <div className="box5 text-center py-4">
        <h2>OUR VALUES</h2>
        <Link to = "/ApplyNow"><Button className="btn mt-4" size="lg">
          Learn More
        </Button></Link>
      </div>
      <footer className="footer-section">
        <div className="quick-links">
          <a href="#academic-programs">Academic Programs</a>
          <a href="#student-experience">Student Experience</a>
          <a href="#become-a-student">Become A Student</a>
          <a href="/TutionFree">Tuition-Free</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.x.com"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="footer-note">A project of Minnesota Institute Of Professional Services</p>
        <p className="copyright">© Copyright MNIOPS. All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default BecomeStudent;
