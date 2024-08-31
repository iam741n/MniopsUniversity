// import React from "react";
import React, { useState } from "react";
import "../Styles/ContactUs.css";
import {Link} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
 
} from "react-bootstrap";
import {
  FaSearch,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const ContactUs = () => {
  //Defining states for input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });

  //Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="contact-us-page"> {/* Unique class for this component */}
    <div className="cpsearch-container bg-light py-3">
        <Container className="d-flex justify-content-end align-items-center">
            <Link to="/RequestInfo">
                <Button variant="link" className="mx-2 p-0">Request Info</Button>
            </Link>
            <Link to="/Login">
                <Button variant="link" className="mx-2 p-0">Login</Button>
            </Link>
            <Form className="d-flex align-items-center">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                />
                <Button variant="outline-success" className="cpsearch-icon"><FaSearch /></Button>
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
    <div className="cus-container container-fluid">
        <h1>CONTACT US</h1>
        <h6>
            Feel Free To Reach Out To Us With Any Questions Or Inquiries. We're
            Here To Help. Contact Us Today For Expert Assistance And Personalized
            Solutions Tailored To Your Needs.
        </h6>
    </div>
    <div className="cus-form container-md min-vh-75">
        <h3>Contact Form</h3>
        <p>
            Contact us today for expert assistance and personalized solutions
            tailored to your needs.
        </p>
        <form>
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name*"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address*"
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number*"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    placeholder="Subject*"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="msg"
                    value={formData.msg}
                    placeholder="Your message*"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn mx-3">
                APPLY NOW
            </button>
        </form>
    </div>
    <div className="cus-box3 container-fluid my-5">
        <h3>CONTACT US</h3>
        <h5>
            FEEL FREE TO REACH US FOR MORE INFORMATION, WE'RE HERE TO MAKE YOU
            SUCCESSFUL!
        </h5>
        <div className="mt-4 mx-5 container-fluid">
            <div className="row icons-box">
                <div className="address icons col-lg-4 col-12">
                    <img src="/location.png" alt="Address Icon" className="contact-icon" />
                    <h5>ADDRESS</h5>
                    <p>
                        House No 736, Street No. 22, Phase 5-B,Gauri Town,
                        Islamabad, Pakistan
                    </p>
                </div>
                <div className="phone icons col-lg-4 col-12 border-left-lg">
                    <img src="/group.png" alt="Phone Icon" className="contact-icon" />
                    <h5>PHONE NUMBER</h5>
                    <p>+923415155196</p>
                </div>
                <div className="email icons col-lg-4 col-12 border-left-lg">
                    <img src="/email.png" alt="Email Icon" className="contact-icon" />
                    <h5>EMAIL</h5>
                    <p>pakistan@mniops.education</p>
                </div>
            </div>
        </div>
    </div>
    <footer className="cus-custom-footer text-white text-center py-4">
        <Container>
            <Row className="mt-4">
                <Col>
                    <p style={{ fontWeight: "bold", fontSize: "2.1rem" }}>
                        Looking for a bright future?
                    </p>
                    <Button variant="primary">Apply Now</Button>
                </Col>
            </Row>
            <Navbar expand="lg" className="navbar-footer mt-4">
                <Nav className="mx-auto">
                    <Nav.Link href="#" className="text-white">
                        Academic Programs
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        Student Experience
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        Become A Student
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        Tuition-Free
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        About
                    </Nav.Link>
                    <Nav.Link href="#" className="text-white">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Row className="mt-4">
                <Col>
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li className="mx-2">
                            <Button variant="link" className="text-white p-0">
                                <FaLinkedin />
                            </Button>
                        </li>
                        <li className="mx-2">
                            <Button variant="link" className="text-white p-0">
                                <FaTwitter />
                            </Button>
                        </li>
                        <li className="mx-2">
                            <Button variant="link" className="text-white p-0">
                                <FaFacebook />
                            </Button>
                        </li>
                        <li className="mx-2">
                            <Button variant="link" className="text-white p-0">
                                <FaYoutube />
                            </Button>
                        </li>
                        <li className="mx-2">
                            <Button variant="link" className="text-white p-0">
                                <FaInstagram />
                            </Button>
                        </li>
                    </ul>
                    <p className="mt-4">
                        A project of Minnesota Institute Of Professional Services
                    </p>
                    <p>© Copyright Mniops. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
</div> {/* Closing tag for unique class */}

    </>
  );
};

export default ContactUs;
