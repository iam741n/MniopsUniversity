import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Styles/ApplyNow.css';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
    const  navigate =useNavigate();
    return (
    <div>
      <div className="university-logo-container mb-3">
        <img src="/Mniops2.png" alt="MNI OPS Logo" className="university-logo" />
      </div>
      <Container className="university-form-container my-5">
        <div className="university-form-header text-center mb-4">
          <h1>Application for University</h1>
          <p>Please Fill Out The Form Carefully</p>
        </div>
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group controlId="formBirthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="text" placeholder="Phone No" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Street Address" className="mb-2" />
            <Row>
              <Col xs={12} md={6}>
                <Form.Control type="text" placeholder="City" className="mb-2" />
              </Col>
              <Col xs={12} md={6}>
                <Form.Control type="text" placeholder="State/Province" className="mb-2" />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formDegreeInformation">
            <Form.Label>Degree Information</Form.Label>
            <Row>
              <Col xs={12} md={6}>
                <Form.Select>
                  <option>Select Academic Field/Major</option>
                  <option>Business Administration</option>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Health Science</option>
                  {/* Add options here */}
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                <Form.Select>
                  <option>Select Program Requested</option>
                  <option>Bachelor's Degree(BS) 4 years</option>
                  <option>Master's Degree(MS) 2 years</option>
                  <option>Associate's Degree(AS) 2 years</option>
                  {/* Add options here */}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
          <div className="button-row">
            <Button variant="primary" type="submit" className="university-form-button">
              Submit
            </Button>
            <Button
              variant="secondary"
              type="button"
              className="university-back-button"
              onClick={() => navigate('/')} // Replace '/previousPage' with the actual route you want to navigate to
            >
              Back
            </Button>
          </div>
        </Form>
        <div className="university-form-footer text-center mt-4">
          <p>
            By Completing This Form, I Hereby Affirm That I Agree With The MNIOPS Privacy Policy Terms And To
            Receive Updates From The University That May Include Emails, Calls, And Text Messages. Fill Your Form Carefully.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ApplyNow;
