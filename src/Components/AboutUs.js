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

const AboutUs = () => {
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
                <NavDropdown.Item href="#">Master's Programs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/StudentExperience">Student Experience</Nav.Link>
            <Nav.Link href="#">Become A Student</Nav.Link>
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
          <h1>ABOUT US</h1>
          <h6 className="py-2">
            At MNIOPS, we are on a mission to redefine IT education in Pakistan. With a relentless commitment to excellence, we offer a wide spectrum of cutting-edge training programs and services that empower individuals, students, and educators to thrive in the ever-evolving landscape of Information Technology.
          </h6>
        </div>
        <img src="/s2.png" alt="" />
      </div>
      <div className="mission-box m-5 py-4">
        <h2>OUR MISSION</h2>
        <h6 className="p-2">
          MNIOPS Pakistan Is To Empower Individuals From All Walks Of Life With Quality Education.
        </h6>
      </div>
      <div className="box-3 py-2 px-5">
        <h3>Our Plan</h3>
        <h6 className="py-2">
          We're committed to expanding our course offerings in Pakistan. Our focus includes technology-centric programs such as IT professional and ServiceNow Developer courses, equipping students with vital skills. Empowering girls through our Girls' Education Initiative is our top priority. We'll boost enrollment, offer scholarships, and foster a safe learning environment. Collaborating with local universities and utilizing technology, we aim to prepare students for the future of work, emphasizing skill development in AI, coding, cybersecurity, and more.
        </h6>
      </div>
      <div className="services container-fluid p-4">
        <h3>Our Services</h3>
        <h6>
          MNIOPS offers a range of services to individuals and organizations seeking to harness the power of Information Technology. These services include: <br /> - IT Training and Certifications <br /> - Professional Development Workshops <br /> - IT Consulting and Solutions <br /> - Research and Development <br /> - Collaborations and Partnerships
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

export default AboutUs;
