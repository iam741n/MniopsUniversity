import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, FormControl, Form  } from 'react-bootstrap';
import { FaSearch, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import "../Styles/Bachelors.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Bachelors() {
  return (
    <div className="Bachelors">
         <Container fluid className="p-0">
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
            <Nav.Link href="#">Tuition-Free</Nav.Link>
            <Nav.Link href="/AboutUs">About</Nav.Link>
            <Nav.Link href="/ContactUs">Contact</Nav.Link>
            <Link to="/ApplyNow" className="btn apply-now-btn ml-3">Apply Now</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <div className="container mt-5">
        {/* Bachelor of Science in Business Administration */}
        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Bachelor of Science in Business Administration (BSBA) Online Degree</h3>
              <p>
                Gain In-Demand Skills That Will Prepare You To Solve Real-Life Business Problems And Lead Teams With
                Confidence. This Degree Is The Perfect Foundation To Pursue A Master's Degree Or Advance Your Current Career.
              </p>
              <button className="btn btn-primary mb-3">Apply Now</button>
              <p><strong>Apply By:</strong> August 15, 2024</p>
              <p><strong>Classes Start:</strong> September 5, 2024</p>
            </div>
            <div className="col-md-4">
              <div className="card-stats p-3 text-center">
                <div className="stat-item">
                  <img src="/globe.png" alt="Icon 1" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>No Live Lectures</p>
                </div>
                <div className="stat-item">
                  <img src="/notebook.png" alt="Icon 2" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>12 Courses</p>
                </div>
                <div className="stat-item">
                  <img src="/clock.png" alt="Icon 3" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Less Than A Year</p>
                </div>
                <div className="stat-item">
                  <img src="/dollar.png" alt="Icon 4" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Pay As You Go ($400 Per Course Assessment)</p>

                </div>
              </div>
            </div>
          </div>
          <div className="overview mt-3 p-3">
            <h4>Overview</h4>
            <p>
              Explore Critical Business Concepts And Prepare For Your Future Career With A Bachelor Of Science In Business
              Administration. Explore In-Depth The Specialized Fields Of Accounting, Management, Marketing, Economics, And Finance.
              This Degree Is The Solid Foundation You Need To Build Your Career Or Continue To Graduate Studies.
            </p>
          </div>
        </div>

        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Bachelor of Science in Health Science (BHS) Online Degree</h3>
              <p>
              Prepare for an exciting career in healthcare and gain innovative skills to improve patient care and well-being.
               This degree is the perfect foundation to pursue a master's degree or advance your current career.
              </p>
              <button className="btn btn-primary mb-3">Apply Now</button>
              <p><strong>Apply By:</strong> August 15, 2024</p>
              <p><strong>Classes Start:</strong> September 5, 2024</p>
            </div>
            <div className="col-md-4">
              <div className="card-stats p-3 text-center">
                <div className="stat-item">
                  <img src="/globe.png" alt="Icon 1" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>No Live Lectures</p>
                </div>
                <div className="stat-item">
                  <img src="/notebook.png" alt="Icon 2" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>12 Courses</p>
                </div>
                <div className="stat-item">
                  <img src="/clock.png" alt="Icon 3" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Less Than A Year</p>
                </div>
                <div className="stat-item">
                  <img src="/dollar.png" alt="Icon 4" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Pay As You Go ($400 Per Course Assessment)</p>

                </div>
              </div>
            </div>
          </div>
          <div className="overview mt-3 p-3">
            <h4>Overview</h4>
            <p>
             The world needs healthcare workers answer the call with a Bachelor of Health Science.Gain knowledge and skills in areas
             of biology, psychology, anatomy, and physiology to make a difference in the rapidly growing,ever-changing field of health science.
             This degree builds a solid foundation to build your career or continue to graduate studies.
            </p>
          </div>
        </div>


        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Bachelor of Science in Computer Science (BCS) Online Degree</h3>
              <p>
              Gain in demand skills to join one of the fastest growing fields in the world 
              and learn the latest in programming, software, and computing technology. 
              </p>
              <button className="btn btn-primary mb-3">Apply Now</button>
              <p><strong>Apply By:</strong> August 15, 2024</p>
              <p><strong>Classes Start:</strong> September 5, 2024</p>
            </div>
            <div className="col-md-4">
              <div className="card-stats p-3 text-center">
                <div className="stat-item">
                  <img src="/globe.png" alt="Icon 1" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>No Live Lectures</p>
                </div>
                <div className="stat-item">
                  <img src="/notebook.png" alt="Icon 2" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>12 Courses</p>
                </div>
                <div className="stat-item">
                  <img src="/clock.png" alt="Icon 3" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Less Than A Year</p>
                </div>
                <div className="stat-item">
                  <img src="/dollar.png" alt="Icon 4" />
                  <p style={{ color: 'white', fontWeight: 'bold' }}>Pay As You Go ($400 Per Course Assessment)</p>

                </div>
              </div>
            </div>
          </div>
          <div className="overview mt-3 p-3">
            <h4>Overview</h4>
            <p>
            Expand your knowledge by learning about innovative software, computer programming and technology to give you a 
            critical advantage in a popular industry. Become fluent in current programming languages like Java and Python, 
            explore database management, and dive into the latest concepts in AI and machine learning.
            </p>
          </div>
        </div>
      

        {/* Additional Degree sections can be added here */}
      </div>
      <footer className="bach-custom-footer text-white text-center py-4">
          <Container>
            <Row className="mt-4">
              <Col>
                <p style={{ fontWeight: 'bold', fontSize: '2.1rem' }}>Looking for a bright future?</p>
                <Button variant="primary">Apply Now</Button>
              </Col>
            </Row>
            <Navbar expand="lg" className="bach-navbar-footer mt-4">
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
                <ul className="bach-list-unstyled d-flex justify-content-center">
                  <li className="mx-2"><Button variant="link" className="text-white p-0"><FaLinkedin /></Button></li>
                  <li className="mx-2"><Button variant="link" className="text-white p-0"><FaTwitter /></Button></li>
                  <li className="mx-2"><Button variant="link" className="text-white p-0"><FaFacebook /></Button></li>
                  <li className="mx-2"><Button variant="link" className="text-white p-0"><FaYoutube /></Button></li>
                  <li className="mx-2"><Button variant="link" className="text-white p-0"><FaInstagram /></Button></li>
                </ul>
                <p className="mt-4">A project of Minnesota Institute Of Professional Services</p>
                <p>© Copyright Mniops. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </Container>
    </div>
  );
}

export default Bachelors;
