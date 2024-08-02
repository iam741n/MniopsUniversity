import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import { FaSearch, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import the icons
import '../Styles/Homepage.css';

const Homepage = () => {
  return (
    <Container fluid className="p-0">
      <div className="search-container bg-light py-3">
        <Container className="d-flex justify-content-end align-items-center">
          <Button variant="link" className="mx-2 p-0">Request Info</Button>
          <Button variant="link" className="mx-2 p-0">Login</Button>
          <Form inline className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search" className="search-bar" />
            <Button variant="outline-success" className="search-icon">
              <FaSearch />
            </Button>
          </Form>
        </Container>
      </div>
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container>
          <Navbar.Brand href="#">
            <img src="/Mniops.png" alt="Mniops Logo" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Academic Programs</Nav.Link>
              <Nav.Link href="#">Student Experience</Nav.Link>
              <Nav.Link href="#">Become A Student</Nav.Link>
              <Nav.Link href="#">Tuition-Free</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Button className="apply-now-btn ml-3">Apply Now</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="header">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Bachelor's Degree</h1>
              <p>Learn From A Curriculum Specially Crafted By Top-Notch Industry Leaders To Prepare You For Real World Success.</p>
              <Button className="btn-primary mt-3">Apply Now</Button>
            </Col>
            <Col md={6}>
              <img src="/graduation.png" alt="Graduated" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Business Administration</Card.Title>
                <Card.Text>
                  Our Bachelor Of Science Online Degree Provides An In-Depth Understanding Of Key Tools And Methods Of The Industry. Full-Time Students Can Complete This 40 Course Degree In Four Years.
                </Card.Text>
                <ul>
                  <li>Manage Design Projects From Conception To Implementation</li>
                  <li>Apply Skills To Debug, Code And Test New Programming Solutions</li>
                  <li>Expand Your Critical Thinking Beyond The Classroom</li>
                </ul>
                <Button className="btn-primary mt-3">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Computer Science</Card.Title>
                <Card.Text>
                  Our Bachelor Of Computer Science Online Degree Is A 40 Course Degree Program, Providing A Full Understanding Of Industry Principles And Application To The Field. Full Time Students Can Complete The Program In Four Years.
                </Card.Text>
                <ul>
                  <li>Manage Design Projects From Conception To Implementation</li>
                  <li>Apply Skills To Debug, Code And Test New Programming Solutions</li>
                  <li>Expand Your Critical Thinking Beyond The Classroom</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Health Science</Card.Title>
                <Card.Text>
                  Our Bachelor Of Science In Health Science Is An Online, A 39-Course Degree Program, Provides A Comprehensive Understanding Of Industry Health Principles And Standards. Full-Time Students Can Complete The Program In Four Years.
                </Card.Text>
                <ul>
                  <li>Understand Social And Biological Causes Of Illness And Disease</li>
                  <li>Analyze Global Health Problems And Propose Solutions</li>
                  <li>Explore Ethics Of Healthcare Laws And Policies</li>
                </ul>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="custom-footer text-white text-center py-4">
        <Container>
          <Row>
            <Col>
              <h5>Common Questions Students Are Asking Us</h5>
              <p>Questions regarding our academic programs offered at Mniops</p>
              <Button variant="light">View All</Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p>Looking for a bright future?</p>
              <Button variant="primary">Apply Now</Button>
            </Col>
          </Row>
          <Navbar expand="lg" className="navbar-footer mt-4">
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
              <ul className="list-unstyled d-flex justify-content-center">
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
  );
};

export default Homepage;
