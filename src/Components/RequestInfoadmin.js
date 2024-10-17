import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Button, Modal } from 'react-bootstrap';
import '../Styles/AdminDashboard.css'; 

const RequestInfoadmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle the opening of the modal
  const handleViewMore = (student) => {
    setSelectedStudent(student);  // Store selected student details
    setShowModal(true);           // Show the modal
  };

  const handleClose = () => setShowModal(false); // Close the modal

  const student = {
    firstName: 'Abdullah',
    lastName:'Khan',
    email: 'abdullahvbn233@gmail.com',
    program: 'Bachelors Degree',
   
  };

  return (
    <div className="admin-dashboard-screen">
      {isSidebarOpen && <Sidebar />}

      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="welcome-message">
             Request Info
            <div className="subtext">Datatable</div>
          </div>
          <div className="user-info">
            <span>abiha@pdmc.com</span>
            <Button variant="danger" href="/AdminLogin"> Logout</Button>
          </div>
        </div>

        {/* Flex container for title and button */}
        <div className="datatable-section">
          <div className="d-flex justify-content-between align-items-center">
            <div className="datatable-title">Contact Requests</div>
            <Button variant="info">Reply All</Button>
          </div>

          <table className="datatable">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Program of interest</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.program}</td>

                <td>
                  <Button variant="info" onClick={() => handleViewMore(student)}>Send Information</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Modal for showing student details */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Name:</strong> {selectedStudent.fullName}</p>
          <p><strong>Phone:</strong> {selectedStudent.phone}</p>
          <p><strong>Email:</strong> {selectedStudent.email}</p>
          <p><strong>Subject:</strong> {selectedStudent.subject}</p>
          <p><strong>Message:</strong> {selectedStudent.message}</p>
        </Modal.Body>
        <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>Close</Button>
  <Button variant="info" onClick={() => console.log('Reply button clicked!')}>Reply</Button>
</Modal.Footer>

      </Modal>
    </div>
  );
};

export default RequestInfoadmin;
