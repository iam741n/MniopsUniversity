import React from "react";
import "../Styles/StudentExperience.css";
import { Button,Navbar, Nav, NavDropdown,Container,Form,FormControl, Row, Col, Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const TutionFree = () => {
  return (
    <div>
      <div className="search-container bg-light py-3">
          <Container className="d-flex justify-content-end align-items-center">
          <Link to ="/RequestInfo"><Button variant="link" className="mx-2 p-0">Request Info</Button></Link>
            <Link to ="/Login"><Button variant="link" className="mx-2 p-0">Login</Button></Link>
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
    <div className="student-experience-container">
      {/* Section 1: Student Experience */}
      <div className="student-experience-section container d-flex align-items-center">
        <div className="text-section">
          <h1 className="student-experience-title">TUTION FREE</h1>
          <p className="student-experience-subtitle">
          Our tuition-free model allows us to offer students an affordable solution to earn a quality degree. We charge minimal fees, for which scholarships are available.
          </p>
        </div>
        <div className="graduate-image-container">
          <img src="/s3.png" alt="Graduate" className="graduate-image" />
        </div>
      </div>


      <Row classname ="mt-5">
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <div className="icon-container">
                <img
                  src="/i1.png"
                  alt="Quality Icon"
                  className="card-icon"
                />
              </div>
              <Card.Title className="card-title">Tution Free?</Card.Title>
              <Card.Text className="card-text">
              American universities cutting
              your cost 95%
              </Card.Text>
              <ul className="card-list">
                <li>Accreditation</li>
                <li>Academic Leadership</li>
                <li>Academic Experience</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <div className="icon-container">
                <img
                  src="/i2.png"
                  alt="Difference Icon"
                  className="card-icon"
                />
              </div>
              <Card.Title className="card-title">Fees</Card.Title>
              <Card.Text className="card-text">
                Minimal Application and Assessment Fees
              </Card.Text>
              <ul className="card-list">
                <li>Online Learning At MNIOPS</li>
                <li>Global Network</li>
                <li>Career Development</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <div className="icon-container">
                <img
                  src="/i3.png"
                  alt="Student Life Icon"
                  className="card-icon"
                />
              </div>
              <Card.Title className="card-title">Scholarships</Card.Title>
              <Card.Text className="card-text">
              scholarship on Basis of 
              first come first served.
              </Card.Text>
              <ul className="card-list">
                <li>Academic Advising</li>
                <li>Student Stories</li>
                <li>Ask A Student</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 2: What's It Like to Study at MNIops */}
      <div className="study-section container d-flex align-items-center">
        <div className="text-section">
          <h2>WHAT'S IT LIKE TO STUDY AT MNIOPS?</h2>
          <p>
            Studying At <strong>MNIOPS</strong> Can Fit Into Almost Anyone's Life. That's Because Our Classes Take Place 100% Online, With No Live Lectures That You Have To Tune In For.You Can Complete Each Week's Assignments On Your Schedule, Whether That's During Your Commute, On Your Lunch Break, Or After You Put The Kids To Bed.
          </p>
        </div>
        <div className="video-container">
  <iframe
    title="Mniops Student Video"
    src="https://www.youtube.com/embed/fQ0TAHimEAk"
    className="video-embed"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


      </div>

      {/* Section 3: Call to Action */}
     
      <Row className="apply-section mt-5">
        <Col md={12} className="text-center">
        <h2 className="apply-heading" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            READY TO JOIN THE WORLD’S FIRST TUITION-FREE ACCREDITED, 100% ONLINE
            UNIVERSITY?
          </h2>
          <Button variant="primary" className="apply-button">
            APPLY NOW
          </Button>
        </Col>
      </Row>

      <Row className="apply-section mt-3">
        <Col md={12} className="text-center">
        <h2 className="apply-heading" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>LOOKING FOR A BRIGHT FUTURE ?</h2>
          <Button variant="primary" className="apply-button">
            APPLY NOW
          </Button>
        </Col>
      </Row>


      {/* Section 4: Footer */}
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
    </div>
  );
};

export default TutionFree;
