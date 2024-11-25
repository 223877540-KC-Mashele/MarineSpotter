import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import MarineLife from './components/MarineLife';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';
import EditProfile from './components/EditProfile';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Set the user as authenticated
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Logout the user
  };

  return (
    <Router>
      <div className="app-container">
        {!isAuthenticated ? (
          // If not authenticated, show the login page
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        ) : (
          // If authenticated, show the main app
          <div className="main-app">
            <div className="sidebar-container">
              <Sidebar />
            </div>
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/profile"
                  element={<Profile onLogout={handleLogout} />} // Pass handleLogout to Profile
                />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/marine-life" element={<MarineLife />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
              </Routes>
            </div>
            <footer className="footer">
              © 2024 MarineSpotter. All rights reserved.
            </footer>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
