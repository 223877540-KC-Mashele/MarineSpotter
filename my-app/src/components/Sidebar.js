import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiSettings, FiBook } from 'react-icons/fi'; // Add FiBook icon for "Learn About Marine Life"
import logo from '../assets/logo.jpg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">MarineSpotter</span>
      </div>

      {/* Divider Line */}
      <hr className="divider" />

      {/* Main Menu Items */}
      <ul className="menu-list">
        <li>
          <NavLink
            to="/"
            exact
            className="sidebar-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1f53d5' : '#f2f4fa',
              color: isActive ? 'white' : 'black',
            })}
          >
            <FiHome className="sidebar-icon" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="sidebar-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1f53d5' : '#f2f4fa',
              color: isActive ? 'white' : 'black',
            })}
          >
            <FiUser className="sidebar-icon" />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/marine-life"
            className="sidebar-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1f53d5' : '#f2f4fa',
              color: isActive ? 'white' : 'black',
            })}
          >
            <FiBook className="sidebar-icon" />
            <p>Marine Life</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="sidebar-link"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1f53d5' : '#f2f4fa',
              color: isActive ? 'white' : 'black',
            })}
          >
            <FiSettings className="sidebar-icon" />
            <p>Settings</p>
          </NavLink>
        </li>
      </ul>

      {/* Divider Line */}
      <hr className="divider" />
    </div>
  );
};

export default Sidebar;
