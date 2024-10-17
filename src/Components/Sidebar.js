import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">MNIOPS</div>
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink to="/AdminDashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>

        <li className="menu-item" onClick={toggleDropdown}>
          Student's Request
          <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
        </li>

        {isDropdownOpen && (
          <ul className="submenu">
            <li className="submenu-item">Apply now Request</li>
            <li className="submenu-item">
              <NavLink to="/ContactRequest" activeClassName="active">
                Contact Request
              </NavLink>
            </li>
            <li className="submenu-item"> <NavLink to="/RequestInfoadmin" activeClassName="active">
                Request Info
              </NavLink></li>
          </ul>
        )}

        <li className="menu-item">
          <NavLink to="/AddAdmin" activeClassName="active">
            Add Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
