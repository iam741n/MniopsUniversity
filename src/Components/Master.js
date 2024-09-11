import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, NavDropdown, FormControl, Form  } from 'react-bootstrap';
import { FaSearch, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import "../Styles/Bachelors.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Master() {
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
      <div className="container mt-5">
        {/* Bachelor of Science in Business Administration */}
        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Master of Business administration [MBA] online degree</h3>
              <p>
              Our master of Business Administration online degree offers a hands-on approach to both business 
              strategy and team leadership, as part of a cutting-edge educational experience.
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
            Advance your core business knowledge and learn the specialized skills to thrive in today's global business environment. 
            Explore exciting new business concepts that will prepare you to confidently take the lead in any organization or even 
            manage your own business.
            </p>
          </div>
        </div>

        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Master of Education in Advanced Teaching (M.Ed.) Online Degree</h3>
              <p>
              Impact the lives of the next generation with a rewarding teaching career. A Master's of Education provides a future-focused path for you to advance your teaching skills.
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
            Discover how to prepare the next generation for real-world success. Gain in-demand skills to watch your students thrive. This program is specifically crafted by leading educators to provide you with in-depth knowledge of curriculums, critical thinking, cultural competence and assessments geared for student support.
            </p>
          </div>
        </div>


        <div className="degree-container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="title">Master of Science in Information Technology (MSIT) Online Degree</h3>
              <p>
              Our master of Science in Information Technology has been specially designed to provide students with cutting-edge expertise in this ever-evolving field.
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
            Discover cutting-edge technological solutions to real world problems and gain a competitive advantage in one of the fastest-growing fields worldwide. Identify complex business problems and implement computer-based solutions while honing your leadership qualities. This degree is perfect for working professionals who want to advance their career in tech.
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
                <Nav.Link href="/BecomeStudent" className="text-white">Become A Student</Nav.Link>
                <Nav.Link href="/TutionFree" className="text-white">Tuition-Free</Nav.Link>
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

export default Master;
