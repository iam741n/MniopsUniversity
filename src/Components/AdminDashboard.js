import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Button, Modal } from 'react-bootstrap';
import '../Styles/AdminDashboard.css'; 

const AdminDashboard = () => {
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
    lastName: 'Khan',
    birthDate: '1995-05-12',
    phone: '+1234567890',
    email: 'abdullahvbn233@gmail.com',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    degree: 'Computer Science',
    program: 'Bachelor of Science',
    gender: 'Male'
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
            Hi, welcome back!
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
            <div className="datatable-title">Basic Datatable</div>
            <Button variant="info">Reply All</Button>
          </div>

          <table className="datatable">
            <thead>
              <tr>
                <th>Email</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{student.email}</td>
                <td>
                  <Button variant="info" onClick={() => handleViewMore(student)}>View More</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom Modal for showing student details */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>First Name:</strong> {selectedStudent.firstName}</p>
          <p><strong>Last Name:</strong> {selectedStudent.lastName}</p>
          <p><strong>Birth Date:</strong> {selectedStudent.birthDate}</p>
          <p><strong>Phone:</strong> {selectedStudent.phone}</p>
          <p><strong>Email:</strong> {selectedStudent.email}</p>
          <p><strong>Address:</strong> {selectedStudent.address}</p>
          <p><strong>City:</strong> {selectedStudent.city}</p>
          <p><strong>State:</strong> {selectedStudent.state}</p>
          <p><strong>Degree:</strong> {selectedStudent.degree}</p>
          <p><strong>Program:</strong> {selectedStudent.program}</p>
          <p><strong>Gender:</strong> {selectedStudent.gender}</p>
        </Modal.Body>
        <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>Close</Button>
  <Button variant="info" onClick={() => console.log('Reply button clicked!')}>Reply</Button>
</Modal.Footer>

      </Modal>
    </div>
  );
};

export default AdminDashboard;
